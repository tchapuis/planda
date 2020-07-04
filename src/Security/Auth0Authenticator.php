<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Security\Authenticator\SocialAuthenticator;
use Riskio\OAuth2\Client\Provider\Auth0ResourceOwner;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class Auth0Authenticator extends SocialAuthenticator
{

    /**
     * @var ClientRegistry
     */
    private ClientRegistry $clientRegistry;
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;

    public function __construct(ClientRegistry $clientRegistry, EntityManagerInterface $entityManager)
    {

        $this->clientRegistry = $clientRegistry;
        $this->entityManager = $entityManager;
    }

    public function supports(Request $request)
    {
        return $request->attributes->get('_route') === 'connect_auth0_check';
    }

    public function getCredentials(Request $request)
    {
        return $this->fetchAccessToken($this->getAuth0Client());
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        /** @var Auth0ResourceOwner $auth0User */
        $auth0User = $this->getAuth0Client()->fetchUserFromToken($credentials);

        $email = $auth0User->getEmail();

        $client = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        if($client) {
            return $client;
        }

        $client = new User();
        $client->setEmail($email);
        $client->setRoles(['ROLE_AUTH0']);
        $this->entityManager->persist($client);
        $this->entityManager->flush();

        return $client;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        return new JsonResponse([
            'error' => $exception->getMessageKey()
        ], 401);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        return null;
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        return new JsonResponse([
            'error' => 'Access Denied'
        ], 401);
    }

    private function getAuth0Client()
    {
        return $this->clientRegistry->getClient('auth0_main');
    }
}

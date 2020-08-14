<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login", methods={"POST"})
     */
    public function index()
    {
        return $this->json([
                'user' => $this->getUser() ? $this->getUser()->getId() : null]
        );
    }

    /**
     * @Route("/api/me", name="app_me", methods={"GET"})
     */
    public function me()
    {
        return $this->json([
                'user' => $this->getUser() ? $this->getUser()->getId() : null]
        );
    }
}

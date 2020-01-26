<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{

    public function login(Request $request)
    {
        $email = $request->get('email', '');
        $password = $request->get('password', '');
    }

    public function logout(Request $request)
    {
        # code...
    }

    public function register(Request $request)
    {
        # code...
    }
}

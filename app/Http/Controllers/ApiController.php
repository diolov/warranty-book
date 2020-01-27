<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiController extends Controller
{

    /**
     * Authenticate user credentials and return user object
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                'success' => true,
                'user' => Auth::user()
            ], 200);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid Email or Password',
        ], 401);
    }

    /**
     * Log user out
     *
     * @param Request $request
     * @return void
     */
    public function logout(Request $request)
    {
        Auth::logout();
    }

    /**
     * Register a new user
     *
     * @param Request $request
     * @return void
     */
    public function register(Request $request)
    {
        $this->validator($request->all()); //->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        return response()->json([
            'success' => true,
            'user' => $user
        ], 200);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string'], //, 'max:255'],
            'email' => ['required', 'string'], //, 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'], //, 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'api_token' => Str::random(80)
        ]);
    }
}

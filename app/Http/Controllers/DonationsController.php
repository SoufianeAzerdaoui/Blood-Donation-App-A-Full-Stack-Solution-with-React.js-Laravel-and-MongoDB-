<?php

namespace App\Http\Controllers;

use App\Http\Requests\DonationRequest;
use App\Models\Donation;
use Illuminate\Http\Request;

class DonationsController extends Controller
{
    public function search(DonationRequest $request)
    {
        $city = $request->input('city');

        $donations = Donation::where('city', 'like', "%$city%")->get();

        return response()->json($donations);
    }

}

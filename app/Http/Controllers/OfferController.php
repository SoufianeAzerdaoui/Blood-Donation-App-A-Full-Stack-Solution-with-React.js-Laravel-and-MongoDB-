<?php

namespace App\Http\Controllers;

use App\Http\Requests\BonatebloodRequest;
use App\Models\Offer;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;

class OfferController extends Controller
{

    public function search($city)
    {
        $offers = Offer::where('city', 'like', "%$city%")->get();
        return response()->json($offers);
    }


    public function donateblood(BonatebloodRequest $request)
{
    $data = $request->validated();

    try {
        $offer = Offer::create([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'city' => $data['city'],
            'phone' => $data['phone'],
            'description' =>$data['description'],
            'type' =>$data['type'],
        ]);


        return response()->json(['message' => 'Success', 'offer_id' => $offer->id], 200);

    } catch (\Exception $e) {
        \Log::error($e);

        return response()->json(['message' => 'Internal Server Error'], 500);
    }
}


}

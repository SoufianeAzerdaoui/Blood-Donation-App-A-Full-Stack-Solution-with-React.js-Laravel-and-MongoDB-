<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request_Health_check;
use App\Models\HealthCheck;
use App\Models\Offer;
use Illuminate\Http\Request;

class Health_check extends Controller
{
    public function healthcheck(Request_Health_check $request)
    {
        $data = $request->validated();

        if (!array_key_exists('offer_id', $data)) {
            return response()->json(['message' => 'Offer ID is missing in the request'], 400);
        }


        $offerModel = Offer::find($data['offer_id']);


        if (!$offerModel) {
            return response()->json(['message' => 'Offer not found'], 404);
        }


        $offerId = $offerModel->getKey();;
        $offerFullName = $offerModel->full_name;

        $health_check = HealthCheck::create([
            'offer_id' => $offerId,
            'offer_full_name' => $offerFullName,
            'situation' =>$data['situation'],
        ]);

        $health_check->save();


        return response()->json(['message' => 'Success'], 200);

    }



}

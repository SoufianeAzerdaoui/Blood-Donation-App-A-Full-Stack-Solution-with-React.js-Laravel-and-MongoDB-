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

        try {

            $offer = Offer::find($data['offer_id']);

            if (!$offer) {
                return response()->json(['message' => 'Offer not found'], 404);
            }


            $health_check = HealthCheck::create([
                'situation' =>$data['situation'],
                'offer_full_name' => $offer->full_name,
            ]);

            $health_check->save();


            return response()->json(['message' => 'Success'], 200);

        } catch (\Exception $e) {
            \Log::error($e);

            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }



}

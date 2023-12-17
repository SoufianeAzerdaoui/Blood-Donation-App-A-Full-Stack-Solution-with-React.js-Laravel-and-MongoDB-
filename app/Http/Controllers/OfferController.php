<?php

namespace App\Http\Controllers;

use App\Http\Requests\BonatebloodRequest;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    // public function donateblood(BonatebloodRequest $request)
    // {
    //     $data = $request->validated();

    //     $offer = Offer::create([
    //         'full_name' => $data['full_name'],
    //         'email' => $data['email'],
    //         'city' => $data['city'],
    //         // 'type' => $data['type'],
    //         'phone' => $data['phone'],
    //         // 'description' => $data['description']
    //     ]);

    //     $offer = Offer::create($data);

    //     try {
    //         // Your controller logic

    //         return response()->json(['message' => 'Success'], 200);
    //     } catch (\Exception $e) {
    //         \Log::error($e);

    //         return response()->json(['message' => 'Internal Server Error'], 500);
    //     }

    // }


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

        // return response()->json(['message' => 'Success', 'offer_id' => $offer->id], 200);

        return response()->json(['message' => 'Success', 'offer_id' => $offer->id], 200);

    } catch (\Exception $e) {
        \Log::error($e);

        return response()->json(['message' => 'Internal Server Error'], 500);
    }
}


}

<?php

namespace App\Http\Controllers;

use App\Exports\OffersExport;
use App\Http\Requests\BonatebloodRequest;
use App\Models\Offer;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Excel;

class OfferController extends Controller
{

    public function export(Request $request)
    {
        if ($request->key === 'estfbs2024')
            return Excel::download(new OffersExport, 'offers.xlsx');
        else
            return 'Key not valid';
    }

    // public function index(Request $request)
    // {
    //     $offers = Offer::all();
    //     return response()->json($offers);
    // }

    public function index(Request $request)
{
    // Get the 'perPage' query parameter with a default of 15
    $perPage = (int) $request->get('perPage', 1000000000);

    // Ensure $perPage is a positive integer
    $perPage = max(1, $perPage);

    $offers = Offer::paginate($perPage);

    return response()->json($offers);
}




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
            'age' => $data['age'],
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

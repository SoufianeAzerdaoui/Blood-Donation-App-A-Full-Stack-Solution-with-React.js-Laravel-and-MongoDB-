<?php

namespace App\Exports;

use App\Models\Offer;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Collection;


class OffersExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return new Collection([
            ['id',
                'full_name',
                'city' ,
                'full_name' ,'description' , 'type', 'created_at' , 'updated_at'
            ],
            Offer::all()
        ]);
    }






}

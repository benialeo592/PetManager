<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = ['gender', 'name', 'date_of_birth', 'microchip', 'img_url'];

    public function petType()
    {
        return $this->belongsTo(PetType::class, 'pet_type_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}

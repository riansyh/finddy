<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Update extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
        'user_id',
        'update',
        'create_at',

    ];
    public function updatePosts()
    {
        return $this->belongsTo(User::class);
    }
}

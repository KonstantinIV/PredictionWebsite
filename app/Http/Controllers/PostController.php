<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$post = Post::all();
        //$posts = DB::table('posts')->where('id', '1')->first();
        $posts = DB::table('posts')
        ->select(
            'posts.id','users.username','posts.thread_id',
            'posts.title','posts.text','posts.created_at','posts.release_at',
            DB::raw(' count( distinct post_likes.user_id) as likes'),
            DB::raw(' count( distinct post_dislikes.user_id) as dislikes'),

            )
        ->join('users', 'users.id', '=', 'posts.user_id')
        ->leftJoin('post_likes', 'posts.id', '=', 'post_likes.post_id')
        ->leftJoin('post_dislikes', 'posts.id', '=', 'post_dislikes.post_id')
        ->groupBy('posts.id')
        ->get();

        return $posts;
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

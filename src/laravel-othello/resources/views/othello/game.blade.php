@extends('share.base')

@section('title', 'Game')

@section('styles')
    <link rel="stylesheet" href="{{ asset('/css/othello.css') }}">
@endsection

@section('contents')
    <div id="game"></div>

    <img src="{{ asset('/img/black.png') }}" style="display:none" />
    <img src="{{ asset('/img/white.png') }}" style="display:none" />

    <div id="player_id" type="hidden" style="display: none">{{$player->id}}</div>
    <div id="player_name" type="hidden" style="display: none">{{$player->name}}</div>
    <div id="player_rating" type="hidden" style="display: none">{{$player->rating}}</div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/othello_game.js') }}"></script>
@endsection
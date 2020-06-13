@extends('share.base')

@section('title', 'Watching')

@section('styles')
@endsection

@section('contents')
    <div id="matching"></div>

    <div id="player_id" type="hidden" style="display: none">{{$player->id}}</div>
    <div id="player_name" type="hidden" style="display: none">{{$player->name}}</div>
    <div id="player_rating" type="hidden" style="display: none">{{$player->rating}}</div>
    @foreach ($games as $game)
    <div name="game" type="hidden", style="display: none">
        <div name="game_id" type="hidden", style="display: none">{{$game->id}}</div>
        <div name="player1_name" type="hidden", style="display: none">{{$game->player1_name}}</div>
        <div name="player1_rating" type="hidden", style="display: none">{{$game->player1_rating}}</div>
        <div name="player2_name" type="hidden", style="display: none">{{$game->player2_name}}</div>
        <div name="player2_rating" type="hidden", style="display: none">{{$game->player2_rating}}</div>
    </div>
    @endforeach
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/othello_watching.js') }}"></script>
@endsection
@extends('share.base')

@section('title', 'Top')

@section('styles')
@endsection

@section('contents')
    <div id="index"></div>

    <div id="player_id" type="hidden" style="display: none">{{$player->id}}</div>
    <div id="player_name" type="hidden" style="display: none">{{$player->name}}</div>
    <div id="player_rating" type="hidden" style="display: none">{{$player->rating}}</div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/othello_index.js') }}"></script>
@endsection
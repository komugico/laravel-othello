@extends('share.base')

@section('title', 'Main')

@section('styles')
@endsection

@section('contents')
    <div id="othello"></div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/othello_index.js') }}"></script>
@endsection
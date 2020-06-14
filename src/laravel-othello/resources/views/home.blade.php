@extends('share.base')

@section('title', 'Home')

@section('styles')
@endsection

@section('contents')
    <div id="home"></div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/home_index.js') }}"></script>
@endsection
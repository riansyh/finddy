<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#607EF5">
    <meta name="description" content="Platform pencari teman belajar sesuai dengan bidang/minat yang dipelajari dan sebagai tempat berdiskusi seputar permasalahan saat belajar.">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      window.base_url = "{{url("/")}}";
    </script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">
    @routes
  </head>
  <body>
    @inertia
    
    <script>
      AOS.init();
    </script>
  </body>
</html>
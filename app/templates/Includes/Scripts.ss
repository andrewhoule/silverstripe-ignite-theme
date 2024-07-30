<% if $IsLive %>
  <script src="dist/app.js?v=1"></script>
<% else %>
  <script src="dist/app.js?v=$Now"></script>
<% end_if %>


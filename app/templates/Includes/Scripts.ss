<% if $IsLive %>
  <script src="dist/index.js?v=1"></script>
<% else %>
  <script src="dist/index.js?v=$Now"></script>
<% end_if %>


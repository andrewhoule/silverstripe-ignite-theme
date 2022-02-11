const AddRelToExtLinks = () => {
  const extLinks = document.querySelectorAll("a[target=_blank]");
  if (extLinks) {
    extLinks.forEach(function(link) {
      link.setAttribute("rel", "noopener noreferrer");
    });
  }
};

export { AddRelToExtLinks };

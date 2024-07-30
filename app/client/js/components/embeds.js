const ResponsiveEmbeds = () => {
  const embeds = document.querySelectorAll('.embed');

  function makeResponsive(embed) {
    const iframe = embed.querySelector('iframe');
    if (!iframe) return;

    const height = iframe.getAttribute('height');
    const width = iframe.getAttribute('width');

    (height || width)
      ? embed.style.aspectRatio = `${width}/${height}`
      : embed.style.aspectRatio = '16/9';
  }

  if (embeds) {
    embeds.forEach(function(embed) {
      makeResponsive(embed);
    });
  }
};

export { ResponsiveEmbeds };

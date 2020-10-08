const ResponsiveEmbeds = () => {
  const embedClass = "embed";
  const responsiveModifier = "--responsive";
  const embeds = document.querySelectorAll(`.${embedClass}`);

  function makeResponsive(embed) {
    embed.classList.add(`${embedClass}${responsiveModifier}`);
  }

  if (embeds) {
    embeds.forEach(function (embed) {
      makeResponsive(embed);
    });
  }
};

export { ResponsiveEmbeds };

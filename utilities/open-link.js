const openLink = (url, newPage = false) => {
  if (typeof window !== "undefined") {
    if (newPage) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  }
};

export default openLink;

export function getSelectedFileType(fileName) {
    var fileNameExt = fileName
      .substr(fileName.lastIndexOf(".") + 1)
      .toLowerCase();
    var ImageExts = ["png", "jpg", "jpeg", "gif", "heic", "heif"];
    var VoiceExts = ["webm", "ogg", "mpeg", "wav", "mp4", "m4a", "mp3"];
    var documentExts = ["xlsx", "pdf"];
  
    if (ImageExts.findIndex((i) => i === fileNameExt) > -1) return "image";
    else if (VoiceExts.findIndex((i) => i === fileNameExt) > -1) return "voice";
    else if (documentExts.findIndex((i) => i === fileNameExt) > -1)
      return "document";
    else return null;
  }
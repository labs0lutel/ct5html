function changeEpisode(episodeNumber) {
    var iframe = document.getElementById('video');
    var videoSrc = '';
    
    var buttons = document.querySelectorAll('.episode-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var currentButton = document.querySelector('.episode-buttons button:nth-child(' + episodeNumber + ')');
    currentButton.classList.add('active');
    
    switch(episodeNumber) {
        case 1:
            videoSrc = '//kodik.info/seria/140453/669e21552000ac15f2a034974a6a5ee1/720p';
            break;
        case 2:
            videoSrc = '//kodik.info/seria/140454/9b3f9030552d472e42ce6d3f638b881f/720p';
            break;
        case 3:
            videoSrc = '//kodik.info/seria/140455/66d0ed4eb56f9e9d11578a8dbb505661/720p';
            break;
        case 4:
            videoSrc = '//kodik.info/seria/140456/16f0d93db50b4b8b290f436a9571fca9/720p';
            break;
        case 5:
            videoSrc = '//kodik.info/seria/140457/81c70050312828a75d2c5d35dc85fb5d/720p';
            break;
        case 6:
            videoSrc = '//kodik.info/seria/140458/c7692ebd4398912c88100e2257c0230c/720p';
            break;
        case 7:
            videoSrc = '//kodik.info/seria/140459/d4e1ba0a1970d28af2c2c52eb804ff7a/720p';
            break;
        case 8:
            videoSrc = '//kodik.info/seria/140460/4827d1db68cf5f49560ad9d103c4f97c/720p';
            break;
        case 9:
            videoSrc = '//kodik.info/seria/140461/cef886dabadc70b4cc61e8c2012d0ee4/720p';
            break;
        case 10:
            videoSrc = '//kodik.info/seria/140462/bed6bd12eb80af7a9051525920ab6b4e/720p';
            break;
        case 11:
            videoSrc = '//kodik.info/seria/140463/f0b218eb0d140886db1b14377ed325da/720p';
            break;
        case 12:
            videoSrc = '//kodik.info/seria/140464/6b1eb68f8b2bf3786bd1584283ed888a/720p';
            break;
        default:
            videoSrc = '//kodik.info/seria/140453/669e21552000ac15f2a034974a6a5ee1/720p';
    }
    
    iframe.src = videoSrc;
}
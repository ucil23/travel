(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist,this.mainPlayList])",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player14994"
 },
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B",
  "this.Container_A69AAC48_A8C7_FBA7_41CD_F3F63E2EEB5E",
  "this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95",
  "this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2",
  "this.Container_47066755_610F_58FC_41D7_5448283489DD",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "shadow": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 20,
 "downloadEnabled": false,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD",
 "borderRadius": 0,
 "class": "Player",
 "definitions": [{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
 "thumbnailUrl": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_t.jpg",
 "label": "18",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_45675E69_52E3_EE50_4198_B1D83AA58CC2",
  "this.overlay_587F64A1_5744_09BB_41D0_826DFC84D807",
  "this.popup_58B5736C_574C_0889_41CA_7AB0A130CC59",
  "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window441"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_69280B6F_627D_6F0D_41D6_EAB1116014FD",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EB"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
 "thumbnailUrl": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_t.jpg",
 "label": "63",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7EAF5206_6134_EFFF_41BD_F60629A605DA",
  "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.49,
  "pitch": -2.03,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
   "start": "this.viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C5F162_6283_3B34_41D0_0746150D7A8D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C5F162_6283_3B34_41D0_0746150D7A8D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EBVideoPlayer)",
   "player": "this.viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EBVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C5F162_6283_3B34_41D0_0746150D7A8D",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
   "end": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, -1, this.effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false); this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, -1, this.effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D, 'showEffect', false)",
   "camera": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
   "end": "this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false, -1, this.effect_CE945323_DF50_2A30_41EA_9D3683524D78, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false); this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true, -1, this.effect_CE978322_DF50_2A30_41CA_F6108ACB13BA, 'showEffect', false)",
   "camera": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A306080_2641_7547_419D_6ED179219674",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_2A306080_2641_7547_419D_6ED179219674_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "end": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, -1, this.effect_4A666E98_6135_4874_41C9_E25A92EA7A4C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52); this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false); this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, -1, this.effect_4A669E98_6135_4874_41D7_79C805E2DF03, 'showEffect', false)",
   "camera": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "camera": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "camera": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "camera": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "camera": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "camera": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "camera": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "camera": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 0)",
   "camera": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
   "start": "this.viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C32162_6283_3B34_41C8_CBCA82EB5AB1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C32162_6283_3B34_41C8_CBCA82EB5AB1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209VideoPlayer)",
   "player": "this.viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C32162_6283_3B34_41C8_CBCA82EB5AB1",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
 "thumbnailUrl": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_t.jpg",
 "label": "26",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_48DC2B35_52E0_F630_41C8_A01847CDE857",
  "this.overlay_468466A7_5654_54D2_41D0_00AB3DFACB46",
  "this.popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89",
  "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.94,
  "pitch": -0.42,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
 "thumbnailUrl": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_t.jpg",
 "label": "55",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7585FF78_610D_5413_41C9_EA55B3284CE8",
  "this.overlay_7595D0D0_610C_EC13_4186_78AF136D12E9",
  "this.overlay_75485003_610C_ABF5_41C6_AEDEF681197C",
  "this.overlay_755895E6_6115_543F_41D7_DB16A7912C5C",
  "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "yaw": -21.84,
  "pitch": -1.11,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
 "thumbnailUrl": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_t.jpg",
 "label": "28",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F19FEC89_E0D0_3EF0_41EA_A3EC4FA9EA19",
  "this.overlay_49549F67_52E3_AE50_41CF_403E642B67F9",
  "this.popup_45FD7A14_6115_DC13_41D2_0EB46932B408",
  "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
 "thumbnailUrl": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_t.jpg",
 "label": "60",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7ED84FC2_6135_B477_41D5_5877744E6FEC",
  "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A306080_2641_7547_419D_6ED179219674",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
 "thumbnailUrl": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_t.jpg",
 "label": "10",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33FC440C_2641_FD5F_41AE_FC038C20214C",
  "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
 "thumbnailUrl": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_t.jpg",
 "label": "9",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B7B35322_A75F_FB5E_41E3_9A590744A560",
  "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": 22.8,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.52,
 "autoplay": true,
 "id": "popup_59E2D1DB_575C_0B8F_41C0_511201061795",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": -9.25,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_59090B1B_575C_188F_41C2_7A164EA3B15E",
   "start": "this.viewer_uid707910C6_6283_397F_41C2_9665641A22D3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C12162_6283_3B34_41CF_85D3E041458C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C12162_6283_3B34_41CF_85D3E041458C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid707910C6_6283_397F_41C2_9665641A22D3VideoPlayer)",
   "player": "this.viewer_uid707910C6_6283_397F_41C2_9665641A22D3VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C12162_6283_3B34_41CF_85D3E041458C",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -32.31,
  "pitch": 0.77,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
 "thumbnailUrl": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_t.jpg",
 "label": "44",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A119007_52A7_B1D0_41C3_B619A3830C07",
  "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
 "thumbnailUrl": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_t.jpg",
 "label": "43",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A574EE9_52AF_AE50_41BD_AEC09D3DE28A",
  "this.overlay_76841B77_52A0_5630_41D1_8222E3B2B8E9",
  "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 133,
  "yaw": 5.77,
  "pitch": 6.56,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_5819CD50_574C_1898_41BE_5050055E22DF",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_71849105_6283_38FD_41D4_9C83DA346FE3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_71849105_6283_38FD_41D4_9C83DA346FE3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_71849105_6283_38FD_41D4_9C83DA346FE3",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
 "thumbnailUrl": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_t.jpg",
 "label": "25",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4BB335BC_52E0_B230_41D2_62692C71DE5C",
  "this.overlay_4B316BEB_52E0_7650_41D4_A592FAB49523",
  "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
 "thumbnailUrl": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_t.jpg",
 "label": "42",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_75F1EE0A_52A0_D1D0_41C5_B5BD72D5771F",
  "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
 "thumbnailUrl": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_t.jpg",
 "label": "62",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_40A25B36_6135_BC1F_41CA_154CB0F4F8D4",
  "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 25.71,
 "hideDuration": 500,
 "yaw": -10.95,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D",
 "image": {
  "levels": [
   {
    "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.34,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
 "thumbnailUrl": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_t.jpg",
 "label": "13",
 "pitch": 0,
 "partial": false,
 "hfovMax": 139,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_314E100E_2641_955B_41C2_678FB75B7443",
  "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
 "thumbnailUrl": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_t.jpg",
 "label": "58",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_782F7965_611B_DC3D_41BA_B75187905AF9",
  "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 39.05,
 "hideDuration": 500,
 "yaw": -33.73,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_47F96725_610B_785C_41D6_8458F5C7FCC2",
 "image": {
  "levels": [
   {
    "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.65,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window440"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_69291B6F_627D_6F0D_41C4_7D0FF982AF52",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid719140F5_6283_391D_41D8_958923C88457"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "rotationY": 0,
 "yaw": -1.06,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.42,
 "autoplay": true,
 "id": "popup_45FD7A14_6115_DC13_41D2_0EB46932B408",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 6.13,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
 "thumbnailUrl": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_t.jpg",
 "label": "29",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_49AD35A8_52E0_72D0_41C8_9990891DA7DB",
  "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7184A105_6283_38FD_41D1_E66287475377, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7184A105_6283_38FD_41D1_E66287475377, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_7184A105_6283_38FD_41D1_E66287475377",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
 "thumbnailUrl": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_t.jpg",
 "label": "65",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_40F54487_613D_B4FD_4183_2D78C4A4C3A1",
  "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": -27.9,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.02,
 "autoplay": true,
 "id": "popup_450ADD29_611C_B435_41C6_FFDBAE758CC1",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 2.97,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
 "thumbnailUrl": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_t.jpg",
 "label": "4",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_303AE09F_264F_9579_41B9_8C196E8535F3",
  "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -122.42,
  "pitch": 10.24,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window442"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_692B6B6F_627D_6F0D_41C7_E24E855735D6",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid719B7105_6283_38FD_41B1_47017805D39F"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window438"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_692CFB5F_627D_6F0D_4197_FA7B6128046E",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid706450D6_6283_391F_41D2_83736BEA7A86"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
 "thumbnailUrl": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_t.jpg",
 "label": "52",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_70C02472_613B_7417_41D6_374D81B20327",
  "this.overlay_4AB3CC20_613F_C854_41B7_35FFE1E1084D",
  "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": 26.34,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.57,
 "autoplay": true,
 "id": "popup_46150353_611D_58F5_41CA_60C870685261",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 4.01,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_49F84193_611D_D874_4196_5AFB6144F66B.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
 "thumbnailUrl": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_t.jpg",
 "label": "24",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_BD665D4B_A8FC_B5B9_41E3_BE2B953C7C89",
  "this.overlay_484F763D_52E0_BE30_416D_40E5DE03E13E",
  "this.overlay_47791082_574C_0879_41BE_236A3F40CEB0",
  "this.popup_4398722D_610F_AC0D_4194_EDC876FB26E3",
  "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
 "thumbnailUrl": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_t.jpg",
 "label": "35",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7070B844_52E3_B250_41D0_7D9E40F397AD",
  "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": -15.82,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "autoplay": true,
 "id": "popup_477997A1_611B_D855_41D3_039B056CADA3",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 1.25,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1,
  "pitch": 1.71,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.86,
  "pitch": 1.58,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "140%",
 "hfov": 360,
 "id": "panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
 "thumbnailUrl": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_t.jpg",
 "label": "57",
 "pitch": 0,
 "partial": false,
 "hfovMax": 146,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_76F34FB3_6114_F415_41BE_0CA933719B77",
  "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera",
 "class": "PanoramaCamera"
},
{
 "label": "1004(2)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A.mp4"
 }
},
{
 "label": "1004(1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.12,
  "pitch": -9.34,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
 "thumbnailUrl": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_t.jpg",
 "label": "6",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_30CEFE46_2643_6DCB_41B5_FB0DC4EFB7F7",
  "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.38,
  "pitch": 9.21,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
   "start": "this.viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C6D162_6283_3B34_4181_78175018E0C6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C6D162_6283_3B34_4181_78175018E0C6, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DAVideoPlayer)",
   "player": "this.viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DAVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C6D162_6283_3B34_4181_78175018E0C6",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
 "thumbnailUrl": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_t.jpg",
 "label": "40",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_758CCABB_52A0_D630_41BE_862BFF128321",
  "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
   "start": "this.viewer_uid706450D6_6283_391F_41D2_83736BEA7A86VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C49162_6283_3B34_41C4_3F0A9D5EFA05, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C49162_6283_3B34_41C4_3F0A9D5EFA05, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid706450D6_6283_391F_41D2_83736BEA7A86VideoPlayer)",
   "player": "this.viewer_uid706450D6_6283_391F_41D2_83736BEA7A86VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C49162_6283_3B34_41C4_3F0A9D5EFA05",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
 "thumbnailUrl": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_t.jpg",
 "label": "54",
 "pitch": 0,
 "partial": false,
 "hfovMax": 142,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7209029A_610B_6C17_41BE_AFADAF522CCE",
  "this.overlay_77408D90_610F_7413_41D1_353097C6ED72",
  "this.overlay_78960C88_6114_D4F2_41CB_5A0172486DA4",
  "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674",
 "thumbnailUrl": "media/panorama_2A306080_2641_7547_419D_6ED179219674_t.jpg",
 "label": "11",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A306080_2641_7547_419D_6ED179219674_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_334D4FC5_2643_AAC9_41A1_F30013C576D9",
  "this.panorama_2A306080_2641_7547_419D_6ED179219674_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
 "thumbnailUrl": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_t.jpg",
 "label": "21",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3113F4F7_2640_9EC9_41AD_CEEBE159B050",
  "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_tcap0"
 ]
},
{
 "id": "effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "media": "this.video_5819CD50_574C_1898_41BE_5050055E22DF",
   "start": "this.viewer_uid707E40C6_6283_397F_41D2_66C1D961A086VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C3B162_6283_3B34_41D6_9DE0FBEE3A25, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C3B162_6283_3B34_41D6_9DE0FBEE3A25, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid707E40C6_6283_397F_41D2_66C1D961A086VideoPlayer)",
   "player": "this.viewer_uid707E40C6_6283_397F_41D2_66C1D961A086VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C3B162_6283_3B34_41D6_9DE0FBEE3A25",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 65.84,
  "pitch": -2.83,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera",
 "class": "PanoramaCamera"
},
{
 "label": "1004",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_59090B1B_575C_188F_41C2_7A164EA3B15E",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_CE945323_DF50_2A30_41EA_9D3683524D78",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -79.79,
  "pitch": 8.81,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
 "thumbnailUrl": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_t.jpg",
 "label": "41",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_772F3C32_52A1_D230_41CB_B617C4919A3D",
  "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.16,
  "pitch": 4.4,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
 "thumbnailUrl": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_t.jpg",
 "label": "1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 128,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_304FC957_2640_97C9_4182_D295A892F188",
  "this.overlay_402003AB_52A0_B6D0_41D3_47B74C6F3DAB",
  "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
   "end": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, -1, this.effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 0, 1); this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false); this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, -1, this.effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D, 'showEffect', false)",
   "camera": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 1, 2)",
   "camera": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 2, 3)",
   "camera": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 3, 4)",
   "camera": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 4, 5)",
   "camera": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 5, 6)",
   "camera": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 6, 7)",
   "camera": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 7, 8)",
   "camera": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
   "end": "this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false, -1, this.effect_CE945323_DF50_2A30_41EA_9D3683524D78, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 8, 9); this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false); this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true, -1, this.effect_CE978322_DF50_2A30_41CA_F6108ACB13BA, 'showEffect', false)",
   "camera": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 9, 10)",
   "camera": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A306080_2641_7547_419D_6ED179219674",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 10, 11)",
   "camera": "this.panorama_2A306080_2641_7547_419D_6ED179219674_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 11, 12)",
   "camera": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 12, 13)",
   "camera": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 13, 14)",
   "camera": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 14, 15)",
   "camera": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 15, 16)",
   "camera": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 16, 17)",
   "camera": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 17, 18)",
   "camera": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 18, 19)",
   "camera": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 19, 20)",
   "camera": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 20, 21)",
   "camera": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 21, 22)",
   "camera": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 22, 23)",
   "camera": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 23, 24)",
   "camera": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 24, 25)",
   "camera": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 25, 26)",
   "camera": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 26, 27)",
   "camera": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 27, 28)",
   "camera": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 28, 29)",
   "camera": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 29, 30)",
   "camera": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 30, 31)",
   "camera": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 31, 32)",
   "camera": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 32, 33)",
   "camera": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 33, 34)",
   "camera": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 34, 35)",
   "camera": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 35, 36)",
   "camera": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 36, 37)",
   "camera": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 37, 38)",
   "camera": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 38, 39)",
   "camera": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 39, 40)",
   "camera": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 40, 41)",
   "camera": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 41, 42)",
   "camera": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 42, 43)",
   "camera": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 43, 44)",
   "camera": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 44, 45)",
   "camera": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 45, 46)",
   "camera": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 46, 47)",
   "camera": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 47, 48)",
   "camera": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 48, 49)",
   "camera": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 49, 50)",
   "camera": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 50, 51)",
   "camera": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "end": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, -1, this.effect_4A666E98_6135_4874_41C9_E25A92EA7A4C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 51, 52); this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false); this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, -1, this.effect_4A669E98_6135_4874_41D7_79C805E2DF03, 'showEffect', false)",
   "camera": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 52, 53)",
   "camera": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 53, 54)",
   "camera": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 54, 55)",
   "camera": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 55, 56)",
   "camera": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 56, 57)",
   "camera": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 57, 58)",
   "camera": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 58, 59)",
   "camera": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 59, 60)",
   "camera": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 60, 61)",
   "camera": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 61, 62)",
   "camera": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 62, 63)",
   "camera": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 63, 64)",
   "camera": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 64, 65)",
   "camera": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 65, 0)",
   "camera": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.81,
  "pitch": 12.21,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
 "thumbnailUrl": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_t.jpg",
 "label": "30",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4CC5A839_52E0_7230_41D4_6C7DA70AF7DD",
  "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -48.03,
  "pitch": -0.97,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
 "thumbnailUrl": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_t.jpg",
 "label": "51",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_791FF326_52A0_57D0_41CA_F910712CEA95",
  "this.overlay_7C62FC06_52AF_F1D0_41D2_389F7C6E396A",
  "this.overlay_449E8489_610C_B854_41CB_10A08022A925",
  "this.popup_47F96725_610B_785C_41D6_8458F5C7FCC2",
  "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window439"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_692E3B6F_627D_6F0D_41D3_EE654D3D979B",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.4,
  "pitch": 4.9,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 25.3,
 "hideDuration": 500,
 "yaw": 19.39,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89",
 "image": {
  "levels": [
   {
    "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.1,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "label": "1004(3)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_446145B7_611C_F41D_416E_FA9CAC510D24",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
 "thumbnailUrl": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_t.jpg",
 "label": "17",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33DF8A4B_2640_95D9_41B6_707F519AB636",
  "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window435"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_6933BB5F_627D_6F0D_41C4_F60F28E04D49",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid707910C6_6283_397F_41C2_9665641A22D3"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "label": "DJI_0729",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919_t.jpg",
 "class": "Video",
 "width": 2688,
 "loop": false,
 "id": "video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
 "height": 1512,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -106.79,
  "pitch": 7.32,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
 "thumbnailUrl": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_t.jpg",
 "label": "37",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_75E60840_52A0_7250_418B_CAED987999D4",
  "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.58,
  "pitch": 0.47,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -110.86,
  "pitch": 3.1,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
 "thumbnailUrl": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_t.jpg",
 "label": "36",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7048D086_52E1_F2D0_41D3_6112D628B96A",
  "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_71824105_6283_38FD_41B2_0DBC34491AE0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_71824105_6283_38FD_41B2_0DBC34491AE0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_71824105_6283_38FD_41B2_0DBC34491AE0",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
 "thumbnailUrl": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_t.jpg",
 "label": "61",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_40D1A817_6134_DC1E_41A6_0D3BB94C1101",
  "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
 "thumbnailUrl": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_t.jpg",
 "label": "14",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B2067059_A774_55EA_41D7_EBAC5FED98FC",
  "this.overlay_CA8D6605_C58A_E77F_41D1_75170DF406B4",
  "this.popup_59E2D1DB_575C_0B8F_41C0_511201061795",
  "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_49F84193_611D_D874_4196_5AFB6144F66B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7183D105_6283_38FD_41C7_C5CB6890902B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7183D105_6283_38FD_41C7_C5CB6890902B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_7183D105_6283_38FD_41C7_C5CB6890902B",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.79,
  "pitch": 10.53,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674_camera",
 "class": "PanoramaCamera"
},
{
 "label": "DJI_0694",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_5819CD50_574C_1898_41BE_5050055E22DF_t.jpg",
 "class": "Video",
 "width": 2688,
 "loop": false,
 "id": "video_5819CD50_574C_1898_41BE_5050055E22DF",
 "height": 1512,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_5819CD50_574C_1898_41BE_5050055E22DF.mp4"
 }
},
{
 "id": "ImageResource_4A627E7C_6135_48AC_41D6_ABA3857F99B5",
 "levels": [
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "id": "effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.39,
  "pitch": 1.53,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_4A666E98_6135_4874_41C9_E25A92EA7A4C",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
 "thumbnailUrl": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_t.jpg",
 "label": "19",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3E99619A_2641_977B_41A2_A614DA7BE598",
  "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -7.36,
  "pitch": -7.76,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
   "start": "this.viewer_uid719140F5_6283_391D_41D8_958923C88457VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C46162_6283_3B34_41B5_69F3668E6589, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C46162_6283_3B34_41B5_69F3668E6589, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid719140F5_6283_391D_41D8_958923C88457VideoPlayer)",
   "player": "this.viewer_uid719140F5_6283_391D_41D8_958923C88457VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C46162_6283_3B34_41B5_69F3668E6589",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
 "thumbnailUrl": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_t.jpg",
 "label": "7",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3031B16D_2640_B7D9_41B4_800ECC77F6FC",
  "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera",
 "class": "PanoramaCamera"
},
{
 "label": "20241003_194804_424",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470_t.jpg",
 "class": "Video",
 "width": 1080,
 "loop": false,
 "id": "video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "yaw": -22,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.86,
 "autoplay": true,
 "id": "popup_58B5736C_574C_0889_41CA_7AB0A130CC59",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": -1.7,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_5819CD50_574C_1898_41BE_5050055E22DF.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
 "thumbnailUrl": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_t.jpg",
 "label": "48",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_66884B64_52A3_F650_416F_8609194C6476",
  "this.overlay_59C82CA5_5655_F4D6_41BE_28042750AE83",
  "this.popup_59869DD9_5654_547E_41C5_EDF38103D19A",
  "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_tcap0"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "66",
 "id": "panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
 "thumbnailUrl": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_46DAC53E_611B_58AC_41C8_3C2A8D17A049",
  "this.popup_477997A1_611B_D855_41D3_039B056CADA3",
  "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_446145B7_611C_F41D_416E_FA9CAC510D24",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_71826105_6283_38FD_41D3_3D515D14B4C3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_71826105_6283_38FD_41D3_3D515D14B4C3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_71826105_6283_38FD_41D3_3D515D14B4C3",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
 "thumbnailUrl": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_t.jpg",
 "label": "49",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7F776ED2_52A1_AE70_4182_89A6D3D9C949",
  "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7183F105_6283_38FD_41CD_51FC4A59541E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7183F105_6283_38FD_41CD_51FC4A59541E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_7183F105_6283_38FD_41CD_51FC4A59541E",
 "class": "PlayList"
},
{
 "id": "ImageResource_4A6FAE73_6135_48B4_4184_2E4F52E9CE4D",
 "levels": [
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7183F105_6283_38FD_41D8_72C6F44CEBB1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7183F105_6283_38FD_41D8_72C6F44CEBB1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_7183F105_6283_38FD_41D8_72C6F44CEBB1",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.62,
  "pitch": -0.28,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
 "thumbnailUrl": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_t.jpg",
 "label": "31",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F267B298_E0D0_6A1F_41EA_DA90E7BA3085",
  "this.overlay_4DB795F1_52E0_B230_41D0_382FA9EBF302",
  "this.popup_450ADD29_611C_B435_41C6_FFDBAE758CC1",
  "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": -14.45,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.76,
 "autoplay": true,
 "id": "popup_4398722D_610F_AC0D_4194_EDC876FB26E3",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 1.12,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
 "thumbnailUrl": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_t.jpg",
 "label": "27",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_481CA6E5_52E1_BE50_41C5_8C5E9A237129",
  "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "yaw": -6.97,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "autoplay": true,
 "id": "popup_59869DD9_5654_547E_41C5_EDF38103D19A",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": -0.94,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
 "thumbnailUrl": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_t.jpg",
 "label": "8",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3069220D_2640_B559_41AA_8B1F1D368008",
  "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_tcap0"
 ]
},
{
 "id": "ImageResource_4A6DEE6E_6135_48AC_418B_C2866F6CAEA1",
 "levels": [
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
 "thumbnailUrl": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_t.jpg",
 "label": "15",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3043F070_2641_F5C7_41A5_B22E2676E795",
  "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.15,
  "pitch": -0.57,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_4A669E98_6135_4874_41D7_79C805E2DF03",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "buttonMoveUp": "this.IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
 "buttonMoveRight": "this.IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7",
 "displayPlaybackBar": true,
 "buttonZoomOut": "this.IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonZoomIn": "this.IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonMoveDown": "this.IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA",
 "buttonMoveLeft": "this.IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9",
 "mouseControlMode": "drag_rotation"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -84.09,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 124,
  "yaw": -84.09,
  "pitch": -3.76,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": -3.76,
   "targetHfov": 124,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera",
 "class": "PanoramaCamera"
},
{
 "label": "1004(4)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_49F84193_611D_D874_4196_5AFB6144F66B_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_49F84193_611D_D874_4196_5AFB6144F66B",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_49F84193_611D_D874_4196_5AFB6144F66B.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
 "thumbnailUrl": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_t.jpg",
 "label": "20",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_31C05AFC_2641_AABF_41C3_29A229A1D827",
  "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "116%",
 "hfov": 360,
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
 "thumbnailUrl": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_t.jpg",
 "label": "23",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_BD8BEB6F_A8FD_9C79_41B9_584962BAD5D7",
  "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.89,
  "pitch": -14.92,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
 "thumbnailUrl": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_t.jpg",
 "label": "47",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_78699CE5_52A0_F250_41BE_8A4B5BBB260F",
  "this.overlay_7E047D33_52A0_5230_41C0_092B49E7B675",
  "this.popup_59C0B6DB_5654_D472_41CC_9481FD91F75A",
  "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
 "thumbnailUrl": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_t.jpg",
 "label": "39",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_77FF7D94_52A3_D2F0_41AF_CFE3814548F3",
  "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201",
 "thumbnailUrl": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_t.jpg",
 "label": "32",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_733F804B_52E0_5250_41D2_8DFC5C60F2CA",
  "this.overlay_58591E3D_5654_5436_41BF_CFF64722AB19",
  "this.popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D",
  "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
 "thumbnailUrl": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_t.jpg",
 "label": "45",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_79F3D8E0_52A1_F251_41C6_97558F44FA88",
  "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
 "thumbnailUrl": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_t.jpg",
 "label": "3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B5E49DAC_A754_4EAA_41C8_11D4EE6987B1",
  "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
 "thumbnailUrl": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_t.jpg",
 "label": "56",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_747E146F_6114_B40D_41D3_121AAC1E44BD",
  "this.overlay_77C7AFBF_6114_D40D_41D1_330724A58086",
  "this.overlay_77AA545F_6115_B40E_41D2_0C6068B21E23",
  "this.overlay_4717EF4D_611C_C8EC_41D1_D32FE3B2867B",
  "this.popup_46150353_611D_58F5_41CA_60C870685261",
  "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window437"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_692DFB5F_627D_6F0D_41C6_8672D2798EE4",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.15,
  "pitch": -10.39,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.26,
  "pitch": 1.19,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790",
 "thumbnailUrl": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_t.jpg",
 "label": "38",
 "pitch": 0,
 "partial": false,
 "hfovMax": 138,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_71FE7A42_52A0_5650_41A2_68B9D2718181",
  "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_71833105_6283_38FD_41C9_282BEB2B916B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_71833105_6283_38FD_41C9_282BEB2B916B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_71833105_6283_38FD_41C9_282BEB2B916B",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.31,
  "pitch": 0.49,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 60.2,
  "pitch": -6.96,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
 "thumbnailUrl": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_t.jpg",
 "label": "59",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A8A9C8E_610B_540E_41D6_1EC3CB4C92F7",
  "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
 "thumbnailUrl": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_t.jpg",
 "label": "33",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D27C4F8_52E1_D230_41CF_0491E0A7C63A",
  "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_tcap0"
 ]
},
{
 "id": "effect_CE978322_DF50_2A30_41CA_F6108ACB13BA",
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6",
 "thumbnailUrl": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_t.jpg",
 "label": "2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33D25AB6_2641_B54B_41A8_A2D2953ED7CC",
  "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
 "thumbnailUrl": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_t.jpg",
 "label": "46",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_783B691C_52A0_53F0_41CC_9643779BD6A1",
  "this.overlay_7D8FA01C_52A0_51F0_41C4_F952A751B50F",
  "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window443"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_692ABB6F_627D_6F0D_41D1_476BE146F920",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DA"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window436"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 0,
 "id": "window_69329B5F_627D_6F0D_41D7_2999DCB3CB07",
 "backgroundColorRatios": [],
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadow": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "modal": true,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid707E40C6_6283_397F_41D2_66C1D961A086"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "paddingLeft": 0,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minHeight": 20,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingLeft": 0,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": 8.74,
  "pitch": -4.98,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -56.44,
  "pitch": 12.71,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
 "thumbnailUrl": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_t.jpg",
 "label": "50",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7FAE9B42_52A0_B650_41D3_50B5CA89FDC1",
  "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 125,
  "yaw": -94.92,
  "pitch": 1.82,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
 "thumbnailUrl": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_t.jpg",
 "label": "16",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_305902D7_2647_9AC9_4197_023287A02EF5",
  "this.overlay_3F440FAE_2641_6B5B_4192_0E0CC65D0A04",
  "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
 "thumbnailUrl": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_t.jpg",
 "label": "34",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_731F0257_52E0_B670_41CF_5B7203B93F34",
  "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
 "thumbnailUrl": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_t.jpg",
 "label": "64",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_43ED229E_613C_EC0E_41CA_4C6D8F229649",
  "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 134,
  "yaw": -51.81,
  "pitch": -11.11,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
 "thumbnailUrl": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_t.jpg",
 "label": "5",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_30CFBA94_2641_954F_41B0_4FF48C7E5194",
  "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_tcap0"
 ]
},
{
 "rotationY": 0,
 "yaw": -9.85,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.12,
 "autoplay": true,
 "id": "popup_59C0B6DB_5654_D472_41CC_9481FD91F75A",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": -10.69,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
 "thumbnailUrl": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_t.jpg",
 "label": "53",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_70BB3131_6137_AC15_41C9_825F6226481B",
  "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_446145B7_611C_F41D_416E_FA9CAC510D24",
   "start": "this.viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C40162_6283_3B34_41C8_1367A67A445F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C40162_6283_3B34_41C8_1367A67A445F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0VideoPlayer)",
   "player": "this.viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C40162_6283_3B34_41C8_1367A67A445F",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
 "thumbnailUrl": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_t.jpg",
 "label": "12",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33F2FFA9_2641_AB59_41B9_3D0177BB016D",
  "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 41.34,
  "pitch": 4.52,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_59090B1B_575C_188F_41C2_7A164EA3B15E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_71832105_6283_38FD_41C0_3ED3A5EF235B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_71832105_6283_38FD_41C0_3ED3A5EF235B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_71832105_6283_38FD_41C0_3ED3A5EF235B",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_49F84193_611D_D874_4196_5AFB6144F66B",
   "start": "this.viewer_uid719B7105_6283_38FD_41B1_47017805D39FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71C54162_6283_3B34_417B_13B081874C56, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71C54162_6283_3B34_417B_13B081874C56, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid719B7105_6283_38FD_41B1_47017805D39FVideoPlayer)",
   "player": "this.viewer_uid719B7105_6283_38FD_41B1_47017805D39FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_71C54162_6283_3B34_417B_13B081874C56",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
 "thumbnailUrl": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_t.jpg",
 "label": "22",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_BB317AE2_A8FD_BC6B_41C2_0E31998D37E1",
  "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_tcap0"
 ]
},
{
 "label": "20241003_195419_554",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D_t.jpg",
 "class": "Video",
 "width": 1080,
 "loop": false,
 "id": "video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D.mp4"
 }
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 10,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarHeadHeight": 30
},
{
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B",
 "itemLabelFontStyle": "normal",
 "scrollBarColor": "#FFFFFF",
 "horizontalAlign": "left",
 "right": "0.16%",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "shadow": false,
 "itemBorderRadius": 0,
 "itemThumbnailShadowOpacity": 0.54,
 "paddingRight": 20,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "height": "55.373%",
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "backgroundOpacity": 0.24,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "class": "ThumbnailList",
 "rollOverItemBackgroundOpacity": 0,
 "layout": "vertical",
 "rollOverItemLabelFontWeight": "normal",
 "borderSize": 0,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist",
 "top": "21.65%",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowVerticalLength": 3,
 "gap": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "itemThumbnailHeight": 75,
 "minHeight": 20,
 "itemThumbnailShadow": true,
 "borderRadius": 5,
 "paddingTop": 10,
 "itemLabelGap": 9,
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "minWidth": 20,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_A69AAC48_A8C7_FBA7_41CD_F3F63E2EEB5E",
 "left": "31.46%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "width": 464.2,
 "children": [
  "this.IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173",
  "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
  "this.IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74",
  "this.IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9",
  "this.Container_A69BFC48_A8C7_FBA7_41D2_176D4A3A27F7",
  "this.IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7",
  "this.IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130",
  "this.IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD",
  "this.IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadow": false,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 137.03,
 "bottom": "3.32%",
 "gap": 4,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "minHeight": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "hidden",
 "class": "Container",
 "minWidth": 20,
 "data": {
  "name": "Tombol"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95",
 "left": "0.6%",
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Longsor"
 },
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 2,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "top": "1.03%",
 "width": "33.124%",
 "paddingRight": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "scrollBarMargin": 2,
 "height": "31.114%",
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "minHeight": 1,
 "backgroundOpacity": 0.91,
 "paddingBottom": 10,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"><B>Perhatikan gambar ini dengan seksama</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:16px;\">Gambar tersebut menunjukkan adanya longsoran kecil yang terjadi di area pertanian sayur di Brakseng. Perubahan pengelolaan lahan dari yang awalnya hutan menjadi area pertanian sayur dapat berdampak serius terhadap lingkungan, salah satunya adalah peningkatan risiko tanah longsor. Berikut beberapa dampak yang ditimbulkan dari perubahan pengelolaan lahan: Hilangnya penahan alami tanah, perubahan struktur tanah, peningkatan aliran air permukaan, penurunan kesuburan tanah, kerusakan ekosistem dan sumber daya alam, penguranagn kualitas hidrologi. Secara keseluruhan, perubahan lahan dari hutan ke pertanian sayur yang tidak disertai dengan praktik konservasi tanah yang baik dapat memicu tanah longsor, mengancam keselamatan manusia, dan merusak ekosistem serta kualitas tanah di sekitarnya. Upaya mitigasi seperti penanaman kembali pohon di area kritis, penggunaan sistem terasering, dan pengelolaan air yang lebih baik menjadi penting untuk mencegah risiko ini. </SPAN></SPAN></DIV></div>",
 "shadowOpacity": 0.19,
 "paddingTop": 20,
 "borderRadius": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2",
 "left": "0%",
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_F1046843_E59D_D80C_41C2_806B65205A57",
  "this.Container_F1071843_E59D_D80C_41C7_0901C9C99EEF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "gap": 10,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Brakseng"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_47066755_610F_58FC_41D7_5448283489DD",
 "left": "0%",
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_49A068EF_610F_C9AC_41D5_EF218B83BEDE",
  "this.Container_47064755_610F_58FC_41C5_1C0B6AB8E37C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "gap": 10,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Longsor"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "class": "UIComponent",
 "minWidth": 0,
 "data": {
  "name": "UIComponent6655"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minHeight": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "class": "ZoomImage",
 "minWidth": 0,
 "data": {
  "name": "ZoomImage6656"
 }
},
{
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "layout": "horizontal",
 "textDecoration": "none",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "data": {
  "name": "CloseButton6657"
 },
 "horizontalAlign": "center",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconHeight": 20,
 "borderColor": "#000000",
 "top": 10,
 "paddingRight": 5,
 "verticalAlign": "middle",
 "iconLineWidth": 5,
 "mode": "push",
 "iconColor": "#000000",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowBlurRadius": 6,
 "gap": 5,
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "borderRadius": 0,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingTop": 5,
 "iconWidth": 20,
 "class": "CloseButton",
 "cursor": "hand",
 "minWidth": 0,
 "fontWeight": "normal"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD",
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27672"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 77.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.9,
   "image": "this.AnimatedImageResource_468C557A_613B_5417_41AD_ECDAA44EE15F",
   "pitch": -17,
   "yaw": 77.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_45675E69_52E3_EE50_4198_B1D83AA58CC2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_58B5736C_574C_0889_41CA_7AB0A130CC59, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_69329B5F_627D_6F0D_41D7_2999DCB3CB07, this.video_5819CD50_574C_1898_41BE_5050055E22DF, this.PlayList_71C3B162_6283_3B34_41D6_9DE0FBEE3A25, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 13.86,
   "yaw": -22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_2_0.png",
      "width": 234,
      "height": 224,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "yaw": -22
  }
 ],
 "id": "overlay_587F64A1_5744_09BB_41D0_826DFC84D807",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EB",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6652"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 63)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 16.88,
   "yaw": -132.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.88,
   "image": "this.AnimatedImageResource_496E95A9_613B_5435_419E_2554337B0F36",
   "pitch": -10.42,
   "yaw": -132.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7EAF5206_6134_EFFF_41BD_F60629A605DA",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EB",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid7193D0F5_6283_391D_41B6_4B4153C7E5EBVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "viewerArea": "this.viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 12.54,
   "yaw": 65.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_4697057A_613B_5417_41D1_959CBBD4243E",
   "pitch": -15.89,
   "yaw": 65.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_48DC2B35_52E0_F630_41C8_A01847CDE857",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4A6DEE6E_6135_48AC_418B_C2866F6CAEA1, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "hfov": 25.3,
   "yaw": 19.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.3,
   "image": "this.AnimatedImageResource_4696957A_613B_5417_41D1_098741FE5C64",
   "pitch": 5.1,
   "yaw": 19.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_468466A7_5654_54D2_41D0_00AB3DFACB46",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 30.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_0_0.png",
      "width": 525,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.98,
   "yaw": 124.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_7585FF78_610D_5413_41C9_EA55B3284CE8",
 "data": {
  "label": "Sisa Longsoran"
 },
 "maps": [
  {
   "hfov": 30.86,
   "yaw": 124.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_0_0_map.gif",
      "width": 85,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 51.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_1_0.png",
      "width": 876,
      "height": 159,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.92,
   "yaw": 27.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_7595D0D0_610C_EC13_4186_78AF136D12E9",
 "data": {
  "label": "Pembuatan Plengsengan Upaya\u000dMeminimalisir Longsor"
 },
 "maps": [
  {
   "hfov": 51.41,
   "yaw": 27.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_1_0_map.gif",
      "width": 88,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 28.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_2_0.png",
      "width": 483,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.61,
   "yaw": -156.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_75485003_610C_ABF5_41C6_AEDEF681197C",
 "data": {
  "label": "Plengsengan"
 },
 "maps": [
  {
   "hfov": 28.48,
   "yaw": -156.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_2_0_map.gif",
      "width": 78,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 55)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "hfov": 11.08,
   "yaw": 44.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.08,
   "image": "this.AnimatedImageResource_49621599_613B_5415_41C7_A0B1C60D80DA",
   "pitch": -13.57,
   "yaw": 44.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_755895E6_6115_543F_41D7_DB16A7912C5C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D9988C2_610C_BC77_41D1_149D2483C988_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_45FD7A14_6115_DC13_41D2_0EB46932B408, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_692CFB5F_627D_6F0D_4197_FA7B6128046E, this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A, this.PlayList_71C49162_6283_3B34_41C4_3F0A9D5EFA05, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -1.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_1_HS_0_0.png",
      "width": 210,
      "height": 220,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.13,
   "yaw": -1.06
  }
 ],
 "id": "overlay_F19FEC89_E0D0_3EF0_41EA_A3EC4FA9EA19",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "hfov": 15.2,
   "yaw": -172.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.2,
   "image": "this.AnimatedImageResource_4695A57A_613B_5417_41CE_1D8CBB0AFDAF",
   "pitch": -30.53,
   "yaw": -172.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_49549F67_52E3_AE50_41CF_403E642B67F9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 60)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 7.91,
   "yaw": 123.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.91,
   "image": "this.AnimatedImageResource_496ED5A9_613B_5435_41C3_7A6F9E98A083",
   "pitch": -8.64,
   "yaw": 123.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7ED84FC2_6135_B477_41D5_5877744E6FEC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 11.92,
   "yaw": -142.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.92,
   "image": "this.AnimatedImageResource_4686356A_613B_5437_41C0_425CB47232D9",
   "pitch": -3.47,
   "yaw": -142.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33FC440C_2641_FD5F_41AE_FC038C20214C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "hfov": 11.67,
   "yaw": 96.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.67,
   "image": "this.AnimatedImageResource_4686A55B_613B_5415_41C8_2E3CBF79A05C",
   "pitch": -0.73,
   "yaw": 96.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B7B35322_A75F_FB5E_41E3_9A590744A560",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid707910C6_6283_397F_41C2_9665641A22D3",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid707910C6_6283_397F_41C2_9665641A22D3VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 13.55,
   "yaw": 179.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.55,
   "image": "this.AnimatedImageResource_469C958A_613B_54F7_41BC_B4AB72004E82",
   "pitch": -32.08,
   "yaw": 179.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7A119007_52A7_B1D0_41C3_B619A3830C07",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 13.47,
   "yaw": -178.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.47,
   "image": "this.AnimatedImageResource_469D958A_613B_54F7_41D8_1CD051746779",
   "pitch": -23.53,
   "yaw": -178.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7A574EE9_52AF_AE50_41BD_AEC09D3DE28A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Menuju Desa Sekitar"
 },
 "maps": [
  {
   "hfov": 41.66,
   "yaw": -177.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_1_0_map.gif",
      "width": 115,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 41.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_1_0.png",
      "width": 705,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.68,
   "yaw": -177.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_76841B77_52A0_5630_41D1_8222E3B2B8E9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 35.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_0_0.png",
      "width": 617,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.82,
   "yaw": -89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4BB335BC_52E0_B230_41D2_62692C71DE5C",
 "data": {
  "label": "Telaga Madiredo"
 },
 "maps": [
  {
   "hfov": 35.67,
   "yaw": -89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_0_0_map.gif",
      "width": 100,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -59.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_4697957A_613B_5417_41AB_054562B436A6",
   "pitch": -17.69,
   "yaw": -59.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4B316BEB_52E0_7650_41D4_A592FAB49523",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 15.31,
   "yaw": 2.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.31,
   "image": "this.AnimatedImageResource_469E758A_613B_54F7_41CA_74409BFAB245",
   "pitch": -26.82,
   "yaw": 2.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_75F1EE0A_52A0_D1D0_41C5_B5BD72D5771F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 62)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 16.84,
   "yaw": -120.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.84,
   "image": "this.AnimatedImageResource_496D95A9_613B_5435_4178_A970F5E86AE2",
   "pitch": -11.1,
   "yaw": -120.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_40A25B36_6135_BC1F_41CA_154CB0F4F8D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 13.25,
   "yaw": -133.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.25,
   "image": "this.AnimatedImageResource_4684956A_613B_5437_41D5_6EC00920EE02",
   "pitch": -5.61,
   "yaw": -133.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_314E100E_2641_955B_41C2_678FB75B7443",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 58)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "hfov": 13.97,
   "yaw": -124.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.97,
   "image": "this.AnimatedImageResource_496015A9_613B_5435_41D3_CDF87923EEE5",
   "pitch": -8.77,
   "yaw": -124.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_782F7965_611B_DC3D_41BA_B75187905AF9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid719140F5_6283_391D_41D8_958923C88457",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6651"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 12.99,
   "yaw": -109.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.99,
   "image": "this.AnimatedImageResource_4694D57A_613B_5417_41D1_A1AB3B6952C5",
   "pitch": -20.44,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_49AD35A8_52E0_72D0_41C8_9990891DA7DB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 65)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 166.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.83,
   "image": "this.AnimatedImageResource_496D45A9_613B_5435_41C5_1B5C6485BD6E",
   "pitch": -21.75,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_40F54487_613D_B4FD_4183_2D78C4A4C3A1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 12.7,
   "yaw": -82.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.7,
   "image": "this.AnimatedImageResource_46B8855B_613B_5415_41D5_B6C9AF423F26",
   "pitch": -13.09,
   "yaw": -82.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_303AE09F_264F_9579_41B9_8C196E8535F3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid719B7105_6283_38FD_41B1_47017805D39F",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6653"
 },
 "toolTipPaddingTop": 4
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid706450D6_6283_391F_41D2_83736BEA7A86",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6649"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "hfov": 16.8,
   "yaw": -116.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_49651599_613B_5415_41D6_2415B06509C2",
   "pitch": -10.6,
   "yaw": -116.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_70C02472_613B_7417_41D6_374D81B20327",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "hfov": 35.31,
   "yaw": 5.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.31,
   "image": "this.AnimatedImageResource_4A3FEE3A_6135_48B7_41AD_2A53DB314C80",
   "pitch": -9.8,
   "yaw": 5.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4AB3CC20_613F_C854_41B7_35FFE1E1084D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 13.75,
   "yaw": -96.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.75,
   "image": "this.AnimatedImageResource_4689257A_613B_5417_41AD_7C61EAC7A583",
   "pitch": -7.46,
   "yaw": -96.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BD665D4B_A8FC_B5B9_41E3_BE2B953C7C89",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Menuju Telaga Madiredo"
 },
 "maps": [
  {
   "hfov": 41.8,
   "yaw": -94.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_1_0_map.gif",
      "width": 115,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 41.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_1_0.png",
      "width": 705,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.22,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_484F763D_52E0_BE30_416D_40E5DE03E13E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4398722D_610F_AC0D_4194_EDC876FB26E3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_692DFB5F_627D_6F0D_41C6_8672D2798EE4, this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207, this.PlayList_71C32162_6283_3B34_41C8_CBCA82EB5AB1, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 12.76,
   "yaw": -14.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_2_0.png",
      "width": 215,
      "height": 192,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.12,
   "yaw": -14.45
  }
 ],
 "id": "overlay_47791082_574C_0879_41BE_236A3F40CEB0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 8.29,
   "yaw": -175.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.29,
   "image": "this.AnimatedImageResource_4690C58A_613B_54F7_41D3_044E0D794C98",
   "pitch": -35.35,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7070B844_52E3_B250_41D0_7D9E40F397AD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 57)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 15.8,
   "yaw": -142.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.8,
   "image": "this.AnimatedImageResource_496095A9_613B_5435_41AC_41E1D506CC09",
   "pitch": -22.98,
   "yaw": -142.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_76F34FB3_6114_F415_41BE_0CA933719B77",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 14.39,
   "yaw": -71.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.39,
   "image": "this.AnimatedImageResource_4687E55B_613B_5415_41D2_7E015359E6F4",
   "pitch": -11.51,
   "yaw": -71.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30CEFE46_2643_6DCB_41B5_FB0DC4EFB7F7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DA",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DAVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 8.07,
   "yaw": -133.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_469FB58A_613B_54F7_41C9_B73F151AD3FC",
   "pitch": -21.56,
   "yaw": -133.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_758CCABB_52A0_D630_41BE_862BFF128321",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid706450D6_6283_391F_41D2_83736BEA7A86",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid706450D6_6283_391F_41D2_83736BEA7A86VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "View Longsoran "
 },
 "maps": [
  {
   "hfov": 26.93,
   "yaw": -27.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_0_0_map.gif",
      "width": 79,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_0_0.png",
      "width": 494,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.06,
   "yaw": -27.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7209029A_610B_6C17_41BE_AFADAF522CCE",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.99,
   "yaw": -29.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_1_0.png",
      "width": 114,
      "height": 46,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.74,
   "yaw": -29.7
  }
 ],
 "id": "overlay_77408D90_610F_7413_41D1_353097C6ED72",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "hfov": 13.26,
   "yaw": 89.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.26,
   "image": "this.AnimatedImageResource_49631599_613B_5415_41C8_7A7358079E0F",
   "pitch": -12.75,
   "yaw": 89.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_78960C88_6114_D4F2_41CB_5A0172486DA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "hfov": 14.6,
   "yaw": -103.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.6,
   "image": "this.AnimatedImageResource_4685A56A_613B_5437_41BF_71B66F81CA8B",
   "pitch": -6.16,
   "yaw": -103.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_334D4FC5_2643_AAC9_41A1_F30013C576D9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 13.19,
   "yaw": -22.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.19,
   "image": "this.AnimatedImageResource_468AB57A_613B_5417_4130_7214CD0B7AC0",
   "pitch": -21.12,
   "yaw": -22.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3113F4F7_2640_9EC9_41AD_CEEBE159B050",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid707E40C6_6283_397F_41D2_66C1D961A086",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid707E40C6_6283_397F_41D2_66C1D961A086VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 13.53,
   "yaw": 4.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.53,
   "image": "this.AnimatedImageResource_469ED58A_613B_54F7_41D6_7D7FF47EB83B",
   "pitch": -12.61,
   "yaw": 4.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_772F3C32_52A1_D230_41CB_B617C4919A3D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 29.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.59,
   "image": "this.AnimatedImageResource_4AA99AD1_52E1_F670_41D2_975695D66AC3",
   "pitch": -14.81,
   "yaw": 29.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_304FC957_2640_97C9_4182_D295A892F188",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "hfov": 10.05,
   "yaw": -73.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.05,
   "image": "this.AnimatedImageResource_4AAACAD3_52E1_F670_41C4_D669E910D93F",
   "pitch": 3.51,
   "yaw": -73.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_402003AB_52A0_B6D0_41D3_47B74C6F3DAB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -35.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_4694457A_613B_5417_41CF_9E30C587CBF4",
   "pitch": -27.09,
   "yaw": -35.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4CC5A839_52E0_7230_41D4_6C7DA70AF7DD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -112.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_49662599_613B_5415_41CC_84209C94470D",
   "pitch": -15.36,
   "yaw": -112.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_791FF326_52A0_57D0_41CA_F910712CEA95",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Menuju Daerah Pujon"
 },
 "maps": [
  {
   "hfov": 37.2,
   "yaw": -110.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_1_0_map.gif",
      "width": 103,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_1_0.png",
      "width": 631,
      "height": 98,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.06,
   "yaw": -110.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7C62FC06_52AF_F1D0_41D2_389F7C6E396A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_47F96725_610B_785C_41D6_8458F5C7FCC2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4A627E7C_6135_48AC_41D6_ABA3857F99B5, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "hfov": 39.05,
   "yaw": -33.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.05,
   "image": "this.AnimatedImageResource_4A3E2E3A_6135_48B7_41C1_BF20636DAC33",
   "pitch": -7.65,
   "yaw": -33.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_449E8489_610C_B854_41CB_10A08022A925",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6650"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "hfov": 12.69,
   "yaw": 75.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.69,
   "image": "this.AnimatedImageResource_468D357A_613B_5417_41BC_8B1AE02AB25E",
   "pitch": -6.23,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_33DF8A4B_2640_95D9_41B6_707F519AB636",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid707910C6_6283_397F_41C2_9665641A22D3",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6646"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 14.48,
   "yaw": 176.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.48,
   "image": "this.AnimatedImageResource_469FE58A_613B_54F7_41B8_F4D79149CCF7",
   "pitch": -26.51,
   "yaw": 176.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_75E60840_52A0_7250_418B_CAED987999D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "maps": [
  {
   "hfov": 15.6,
   "yaw": 164.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.6,
   "image": "this.AnimatedImageResource_4690458A_613B_54F7_418C_456ADA7A488B",
   "pitch": -42.45,
   "yaw": 164.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7048D086_52E1_F2D0_41D3_6112D628B96A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 61)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 18.77,
   "yaw": 173.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.77,
   "image": "this.AnimatedImageResource_496E65A9_613B_5435_41D2_A96FB28D1A96",
   "pitch": -16.38,
   "yaw": 173.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_40D1A817_6134_DC1E_41A6_0D3BB94C1101",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 14.9,
   "yaw": -74.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.9,
   "image": "this.AnimatedImageResource_4684156A_613B_5437_41D3_8C16C62E15B2",
   "pitch": -16.18,
   "yaw": -74.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B2067059_A774_55EA_41D7_EBAC5FED98FC",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59E2D1DB_575C_0B8F_41C0_511201061795, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_6933BB5F_627D_6F0D_41C4_F60F28E04D49, this.video_59090B1B_575C_188F_41C2_7A164EA3B15E, this.PlayList_71C12162_6283_3B34_41CF_85D3E041458C, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 9.52,
   "yaw": 22.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_1_0.png",
      "width": 162,
      "height": 157,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.25,
   "yaw": 22.8
  }
 ],
 "id": "overlay_CA8D6605_C58A_E77F_41D1_75170DF406B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27668"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27663"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "hfov": 13.39,
   "yaw": 98.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.39,
   "image": "this.AnimatedImageResource_468B457A_613B_5417_41D3_AA71506FAE53",
   "pitch": -21.74,
   "yaw": 98.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3E99619A_2641_977B_41A2_A614DA7BE598",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid719140F5_6283_391D_41D8_958923C88457",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid719140F5_6283_391D_41D8_958923C88457VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 12.47,
   "yaw": -104.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.47,
   "image": "this.AnimatedImageResource_4687555B_613B_5415_41D4_9AB6AB044EEB",
   "pitch": 3.26,
   "yaw": -104.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3031B16D_2640_B7D9_41B4_800ECC77F6FC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 12.67,
   "yaw": 128.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.67,
   "image": "this.AnimatedImageResource_4698B599_613B_5415_41CE_8AF5FCC0FDDC",
   "pitch": -17.97,
   "yaw": 128.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_66884B64_52A3_F650_416F_8609194C6476",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59869DD9_5654_547E_41C5_EDF38103D19A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_69280B6F_627D_6F0D_41D6_EAB1116014FD, this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D, this.PlayList_71C5F162_6283_3B34_41D0_0746150D7A8D, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -6.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_1_0.png",
      "width": 173,
      "height": 173,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "yaw": -6.97
  }
 ],
 "id": "overlay_59C82CA5_5655_F4D6_41BE_28042750AE83",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_477997A1_611B_D855_41D3_039B056CADA3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_692ABB6F_627D_6F0D_41D1_476BE146F920, this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919, this.PlayList_71C6D162_6283_3B34_4181_78175018E0C6, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -15.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0_HS_0_0.png",
      "width": 173,
      "height": 173,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.25,
   "yaw": -15.82
  }
 ],
 "id": "overlay_46DAC53E_611B_58AC_41C8_3C2A8D17A049",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D820051_610D_AC15_41A6_B51E29AE0401_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -26.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.39,
   "image": "this.AnimatedImageResource_49674599_613B_5415_41D4_AA4F5515CEA8",
   "pitch": 0.24,
   "yaw": -26.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7F776ED2_52A1_AE70_4182_89A6D3D9C949",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_450ADD29_611C_B435_41C6_FFDBAE758CC1, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_692E3B6F_627D_6F0D_41D3_EE654D3D979B, this.video_446145B7_611C_F41D_416E_FA9CAC510D24, this.PlayList_71C40162_6283_3B34_41C8_1367A67A445F, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 13.02,
   "yaw": -27.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_1_HS_0_0.png",
      "width": 220,
      "height": 220,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.97,
   "yaw": -27.9
  }
 ],
 "id": "overlay_F267B298_E0D0_6A1F_41EA_DA90E7BA3085",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 14.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.76,
   "image": "this.AnimatedImageResource_4693858A_613B_54F7_41D6_556BE8F24843",
   "pitch": -11.86,
   "yaw": 14.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DB795F1_52E0_B230_41D0_382FA9EBF302",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 6.14,
   "yaw": 3.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_4696057A_613B_5417_41B6_1CA0948B6392",
   "pitch": -23.96,
   "yaw": 3.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_481CA6E5_52E1_BE50_41C5_8C5E9A237129",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -133.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_4686C55B_613B_5415_41C4_CCEDCDC66047",
   "pitch": -2.95,
   "yaw": -133.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3069220D_2640_B559_41AA_8B1F1D368008",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "maps": [
  {
   "hfov": 14.48,
   "yaw": 115.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.48,
   "image": "this.AnimatedImageResource_468CF57A_613B_5417_41D0_3D14ED5E0D5B",
   "pitch": -14.53,
   "yaw": 115.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3043F070_2641_F5C7_41A5_B22E2676E795",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27667"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27670"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27662"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27673"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9",
 "horizontalAlign": "center",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27665"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "hfov": 15.41,
   "yaw": 65.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.41,
   "image": "this.AnimatedImageResource_4AB88ADF_52E1_F670_41C8_E86093B72CA4",
   "pitch": -26.06,
   "yaw": 65.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31C05AFC_2641_AABF_41C3_29A229A1D827",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 81.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.96,
   "image": "this.AnimatedImageResource_4689A57A_613B_5417_41D5_7CE1E7B98379",
   "pitch": -15.91,
   "yaw": 81.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BD8BEB6F_A8FD_9C79_41B9_584962BAD5D7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -146.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.96,
   "image": "this.AnimatedImageResource_469A2599_613B_5415_41BD_5EE63E865E96",
   "pitch": -12.06,
   "yaw": -146.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_78699CE5_52A0_F250_41BE_8A4B5BBB260F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59C0B6DB_5654_D472_41CC_9481FD91F75A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_69291B6F_627D_6F0D_41C4_7D0FF982AF52, this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470, this.PlayList_71C46162_6283_3B34_41B5_69F3668E6589, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.12,
   "yaw": -9.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_1_0.png",
      "width": 173,
      "height": 173,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69,
   "yaw": -9.85
  }
 ],
 "id": "overlay_7E047D33_52A0_5230_41C0_092B49E7B675",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 13.02,
   "yaw": 8.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.02,
   "image": "this.AnimatedImageResource_469EB58A_613B_54F7_41D2_D81365619700",
   "pitch": -22.98,
   "yaw": 8.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_77FF7D94_52A3_D2F0_41AF_CFE3814548F3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 14.55,
   "yaw": -22.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.55,
   "image": "this.AnimatedImageResource_4693158A_613B_54F7_41C1_EB13816DD436",
   "pitch": -17.28,
   "yaw": -22.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_733F804B_52E0_5250_41D2_8DFC5C60F2CA",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4A6FAE73_6135_48B4_4184_2E4F52E9CE4D, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "hfov": 25.71,
   "yaw": -10.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.71,
   "image": "this.AnimatedImageResource_4692B58A_613B_54F7_41C1_1338BE0F8246",
   "pitch": 11.34,
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58591E3D_5654_5436_41BF_CFF64722AB19",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 13.24,
   "yaw": 173.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.24,
   "image": "this.AnimatedImageResource_469C358A_613B_54F7_41A3_08E89AC2ABD5",
   "pitch": -34.1,
   "yaw": 173.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_79F3D8E0_52A1_F251_41C6_97558F44FA88",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 9.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.59,
   "image": "this.AnimatedImageResource_4AAA0AD4_52E1_F670_41B6_2948CB8B8F69",
   "pitch": -14.81,
   "yaw": 9.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B5E49DAC_A754_4EAA_41C8_11D4EE6987B1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 27.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_0_0.png",
      "width": 472,
      "height": 91,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.93,
   "yaw": 31.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_747E146F_6114_B40D_41D3_121AAC1E44BD",
 "data": {
  "label": "Sisa Longsoran"
 },
 "maps": [
  {
   "hfov": 27.46,
   "yaw": 31.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_0_0_map.gif",
      "width": 82,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 13.48,
   "yaw": 114.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_1_0.png",
      "width": 241,
      "height": 132,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.68,
   "yaw": 114.89
  }
 ],
 "id": "overlay_77C7AFBF_6114_D40D_41D1_330724A58086",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_2_0.png",
      "width": 332,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.08,
   "yaw": 116.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_77AA545F_6115_B40E_41D2_0C6068B21E23",
 "data": {
  "label": "Kembali"
 },
 "maps": [
  {
   "hfov": 19.3,
   "yaw": 116.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_2_0_map.gif",
      "width": 53,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_46150353_611D_58F5_41CA_60C870685261, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_692B6B6F_627D_6F0D_41C7_E24E855735D6, this.video_49F84193_611D_D874_4196_5AFB6144F66B, this.PlayList_71C54162_6283_3B34_417B_13B081874C56, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.57,
   "yaw": 26.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0_HS_3_0.png",
      "width": 111,
      "height": 141,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.01,
   "yaw": 26.34
  }
 ],
 "id": "overlay_4717EF4D_611C_C8EC_41D1_D32FE3B2867B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid706280D6_6283_391F_41D0_6B8D9D59C209",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6648"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "hfov": 12.43,
   "yaw": 132.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_469F158A_613B_54F7_41B9_96220EABCF81",
   "pitch": -21.05,
   "yaw": 132.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71FE7A42_52A0_5650_41A2_68B9D2718181",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 59)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "hfov": 16.98,
   "yaw": -134.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.98,
   "image": "this.AnimatedImageResource_496FA5A9_613B_5435_41D5_FC5DCD24037C",
   "pitch": -8.36,
   "yaw": -134.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7A8A9C8E_610B_540E_41D6_1EC3CB4C92F7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 103.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.74,
   "image": "this.AnimatedImageResource_4692358A_613B_54F7_41C4_29111B1E1762",
   "pitch": -17.55,
   "yaw": 103.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4D27C4F8_52E1_D230_41CF_0491E0A7C63A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 13.48,
   "yaw": -19.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.48,
   "image": "this.AnimatedImageResource_46B9455B_613B_5415_41B6_7683EA473564",
   "pitch": -7.4,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33D25AB6_2641_B54B_41A8_A2D2953ED7CC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 54.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.96,
   "image": "this.AnimatedImageResource_469B5599_613B_5415_41AD_F74DEBABABB5",
   "pitch": -11.72,
   "yaw": 54.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_783B691C_52A0_53F0_41CC_9643779BD6A1",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50); this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 56.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.86,
   "image": "this.AnimatedImageResource_469AD599_613B_5415_41D4_FC6099F8EBEA",
   "pitch": -6.64,
   "yaw": 56.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7D8FA01C_52A0_51F0_41C4_F952A751B50F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid71823105_6283_38FD_41D5_AFA43BEB11DA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6654"
 },
 "toolTipPaddingTop": 4
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid707E40C6_6283_397F_41D2_66C1D961A086",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeight": 20,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 4,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "minWidth": 100,
 "data": {
  "name": "ViewerArea6647"
 },
 "toolTipPaddingTop": 4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 11.9,
   "yaw": -128.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.9,
   "image": "this.AnimatedImageResource_49669599_613B_5415_41AF_9832D24039BA",
   "pitch": -46.11,
   "yaw": -128.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7FAE9B42_52A0_B650_41D3_50B5CA89FDC1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 12.93,
   "yaw": -89.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.93,
   "image": "this.AnimatedImageResource_468DF57A_613B_5417_41C4_0C21ADDB044B",
   "pitch": -21.19,
   "yaw": -89.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_305902D7_2647_9AC9_4197_023287A02EF5",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "hfov": 15,
   "yaw": -135.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15,
   "image": "this.AnimatedImageResource_4AB6BADD_52E1_F670_41B2_23F0BCD61DA2",
   "pitch": -29.08,
   "yaw": -135.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F440FAE_2641_6B5B_4192_0E0CC65D0A04",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 11.74,
   "yaw": 1.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.74,
   "image": "this.AnimatedImageResource_4691B58A_613B_54F7_41D2_6F6CBBB3E905",
   "pitch": -10.69,
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_731F0257_52E0_B670_41CF_5B7203B93F34",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 64)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "hfov": 13.44,
   "yaw": -94.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.44,
   "image": "this.AnimatedImageResource_496E25A9_613B_5435_41D3_EDCDB47F451A",
   "pitch": -8.49,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43ED229E_613C_EC0E_41CA_4C6D8F229649",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 12.92,
   "yaw": -171.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.92,
   "image": "this.AnimatedImageResource_46B8755B_613B_5415_41C7_C7C74AE0929A",
   "pitch": -7.67,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30CFBA94_2641_954F_41B0_4FF48C7E5194",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "hfov": 17.96,
   "yaw": 162.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.96,
   "image": "this.AnimatedImageResource_49649599_613B_5415_415B_956363FA3938",
   "pitch": -20.02,
   "yaw": 162.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_70BB3131_6137_AC15_41C9_825F6226481B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid706670E5_6283_393C_41D0_8826D93D1FE0VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -64.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.82,
   "image": "this.AnimatedImageResource_4685156A_613B_5437_41D3_046B29086A25",
   "pitch": -4.65,
   "yaw": -64.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33F2FFA9_2641_AB59_41B9_3D0177BB016D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid719B7105_6283_38FD_41B1_47017805D39F",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "id": "viewer_uid719B7105_6283_38FD_41B1_47017805D39FVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 33.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.02,
   "image": "this.AnimatedImageResource_468A257A_613B_5417_41A6_5C39AD1AE4A4",
   "pitch": -10.35,
   "yaw": 33.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BB317AE2_A8FD_BC6B_41C2_0E31998D37E1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "height": 2440,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74",
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 40,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "rollOverIconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27664"
 }
},
{
 "class": "Container",
 "propagateClick": false,
 "layout": "vertical",
 "children": [
  "this.IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
  "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
  "this.IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA"
 ],
 "id": "Container_A69BFC48_A8C7_FBA7_41D2_176D4A3A27F7",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container27666"
 },
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": "100%",
 "gap": 4,
 "paddingBottom": 0,
 "minHeight": 20,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 20,
 "overflow": "hidden"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130",
 "horizontalAlign": "center",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 40,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "rollOverIconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130_rollover.png",
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 0,
 "data": {
  "name": "Button27671"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_F1046843_E59D_D80C_41C2_806B65205A57",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_F1045843_E59D_D80C_41CC_030384A88684",
  "this.Container_F107B843_E59D_D80C_41CF_33B317286720"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "top": "5%",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_F1071843_E59D_D80C_41C7_0901C9C99EEF",
 "left": "10%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "84.78%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "gap": 10,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_49A068EF_610F_C9AC_41D5_EF218B83BEDE",
 "left": "9.89%",
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "10.11%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_49B5487A_610F_C8B7_41B1_BD6281F4E826"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "top": "4.92%",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "bottom": "5.08%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_47064755_610F_58FC_41C5_1C0B6AB8E37C",
 "left": "10%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_47067755_610F_58FC_41AC_F79F5EAF9023"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "84.78%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "gap": 10,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Container X global"
 }
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468C557A_613B_5417_41AD_ECDAA44EE15F",
 "levels": [
  {
   "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496E95A9_613B_5435_419E_2554337B0F36",
 "levels": [
  {
   "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4697057A_613B_5417_41D1_959CBBD4243E",
 "levels": [
  {
   "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4696957A_613B_5417_41D1_098741FE5C64",
 "levels": [
  {
   "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_1_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49621599_613B_5415_41C7_A0B1C60D80DA",
 "levels": [
  {
   "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_3_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4695A57A_613B_5417_41CE_1D8CBB0AFDAF",
 "levels": [
  {
   "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496ED5A9_613B_5435_41C3_7A6F9E98A083",
 "levels": [
  {
   "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4686356A_613B_5437_41C0_425CB47232D9",
 "levels": [
  {
   "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4686A55B_613B_5415_41C8_2E3CBF79A05C",
 "levels": [
  {
   "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469C958A_613B_54F7_41BC_B4AB72004E82",
 "levels": [
  {
   "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469D958A_613B_54F7_41D8_1CD051746779",
 "levels": [
  {
   "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4697957A_613B_5417_41AB_054562B436A6",
 "levels": [
  {
   "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469E758A_613B_54F7_41CA_74409BFAB245",
 "levels": [
  {
   "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496D95A9_613B_5435_4178_A970F5E86AE2",
 "levels": [
  {
   "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4684956A_613B_5437_41D5_6EC00920EE02",
 "levels": [
  {
   "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496015A9_613B_5435_41D3_CDF87923EEE5",
 "levels": [
  {
   "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4694D57A_613B_5417_41D1_A1AB3B6952C5",
 "levels": [
  {
   "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496D45A9_613B_5435_41C5_1B5C6485BD6E",
 "levels": [
  {
   "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46B8855B_613B_5415_41D5_B6C9AF423F26",
 "levels": [
  {
   "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49651599_613B_5415_41D6_2415B06509C2",
 "levels": [
  {
   "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_1_HS_0_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4A3FEE3A_6135_48B7_41AD_2A53DB314C80",
 "levels": [
  {
   "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0_HS_1_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4689257A_613B_5417_41AD_7C61EAC7A583",
 "levels": [
  {
   "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4690C58A_613B_54F7_41D3_044E0D794C98",
 "levels": [
  {
   "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496095A9_613B_5435_41AC_41E1D506CC09",
 "levels": [
  {
   "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4687E55B_613B_5415_41D2_7E015359E6F4",
 "levels": [
  {
   "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469FB58A_613B_54F7_41C9_B73F151AD3FC",
 "levels": [
  {
   "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49631599_613B_5415_41C8_7A7358079E0F",
 "levels": [
  {
   "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_2_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4685A56A_613B_5437_41BF_71B66F81CA8B",
 "levels": [
  {
   "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468AB57A_613B_5417_4130_7214CD0B7AC0",
 "levels": [
  {
   "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469ED58A_613B_54F7_41D6_7D7FF47EB83B",
 "levels": [
  {
   "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4AA99AD1_52E1_F670_41D2_975695D66AC3",
 "levels": [
  {
   "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4AAACAD3_52E1_F670_41C4_D669E910D93F",
 "levels": [
  {
   "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_2_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4694457A_613B_5417_41CF_9E30C587CBF4",
 "levels": [
  {
   "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49662599_613B_5415_41CC_84209C94470D",
 "levels": [
  {
   "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4A3E2E3A_6135_48B7_41C1_BF20636DAC33",
 "levels": [
  {
   "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_2_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468D357A_613B_5417_41BC_8B1AE02AB25E",
 "levels": [
  {
   "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469FE58A_613B_54F7_41B8_F4D79149CCF7",
 "levels": [
  {
   "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4690458A_613B_54F7_418C_456ADA7A488B",
 "levels": [
  {
   "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496E65A9_613B_5435_41D2_A96FB28D1A96",
 "levels": [
  {
   "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4684156A_613B_5437_41D3_8C16C62E15B2",
 "levels": [
  {
   "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468B457A_613B_5417_41D3_AA71506FAE53",
 "levels": [
  {
   "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4687555B_613B_5415_41D4_9AB6AB044EEB",
 "levels": [
  {
   "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4698B599_613B_5415_41CE_8AF5FCC0FDDC",
 "levels": [
  {
   "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49674599_613B_5415_41D4_AA4F5515CEA8",
 "levels": [
  {
   "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4693858A_613B_54F7_41D6_556BE8F24843",
 "levels": [
  {
   "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4696057A_613B_5417_41B6_1CA0948B6392",
 "levels": [
  {
   "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4686C55B_613B_5415_41C4_CCEDCDC66047",
 "levels": [
  {
   "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468CF57A_613B_5417_41D0_3D14ED5E0D5B",
 "levels": [
  {
   "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4AB88ADF_52E1_F670_41C8_E86093B72CA4",
 "levels": [
  {
   "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4689A57A_613B_5417_41D5_7CE1E7B98379",
 "levels": [
  {
   "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469A2599_613B_5415_41BD_5EE63E865E96",
 "levels": [
  {
   "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_0_0.png",
   "width": 380,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469EB58A_613B_54F7_41D2_D81365619700",
 "levels": [
  {
   "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4693158A_613B_54F7_41C1_EB13816DD436",
 "levels": [
  {
   "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4692B58A_613B_54F7_41C1_1338BE0F8246",
 "levels": [
  {
   "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_1_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469C358A_613B_54F7_41A3_08E89AC2ABD5",
 "levels": [
  {
   "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4AAA0AD4_52E1_F670_41B6_2948CB8B8F69",
 "levels": [
  {
   "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469F158A_613B_54F7_41B9_96220EABCF81",
 "levels": [
  {
   "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496FA5A9_613B_5435_41D5_FC5DCD24037C",
 "levels": [
  {
   "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4692358A_613B_54F7_41C4_29111B1E1762",
 "levels": [
  {
   "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46B9455B_613B_5415_41B6_7683EA473564",
 "levels": [
  {
   "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469B5599_613B_5415_41AD_F74DEBABABB5",
 "levels": [
  {
   "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_469AD599_613B_5415_41D4_FC6099F8EBEA",
 "levels": [
  {
   "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49669599_613B_5415_41AF_9832D24039BA",
 "levels": [
  {
   "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468DF57A_613B_5417_41C4_0C21ADDB044B",
 "levels": [
  {
   "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4AB6BADD_52E1_F670_41B2_23F0BCD61DA2",
 "levels": [
  {
   "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_1_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4691B58A_613B_54F7_41D2_6F6CBBB3E905",
 "levels": [
  {
   "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_496E25A9_613B_5435_41D3_EDCDB47F451A",
 "levels": [
  {
   "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46B8755B_613B_5415_41C7_C7C74AE0929A",
 "levels": [
  {
   "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_49649599_613B_5415_415B_956363FA3938",
 "levels": [
  {
   "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_1_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4685156A_613B_5437_41D3_046B29086A25",
 "levels": [
  {
   "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_468A257A_613B_5417_41A6_5C39AD1AE4A4",
 "levels": [
  {
   "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_F1045843_E59D_D80C_41CC_030384A88684",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_6D8661D0_6283_7B13_41C3_2DDE27ECF08F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "50%",
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 10,
 "paddingBottom": 10,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 10,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 1,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_F107B843_E59D_D80C_41CF_33B317286720",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_F1079843_E59D_D80C_41CA_F6FEA2EDA83A",
  "this.Container_F1078843_E59D_D80C_41B7_9B2478572818",
  "this.Container_F1072843_E59D_D80C_41D7_9841AA239F9F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "50%",
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 400,
 "overflow": "visible"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5.jpg",
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "width": "25%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "pressedRollOverIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_pressed_rollover.jpg",
 "maxHeight": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_rollover.jpg",
 "paddingBottom": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 50,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_49B5487A_610F_C8B7_41B1_BD6281F4E826",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Image_6C6C7C47_628D_697C_41BB_9A71CBBC1494",
  "this.Container_49B4B87F_610F_C8AC_41C7_2AA728021AB6",
  "this.Container_49B6B889_610F_C855_41D6_65B12F17907A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "99.98%",
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 400,
 "overflow": "visible"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "IconButton_47067755_610F_58FC_41AC_F79F5EAF9023",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023.jpg",
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "width": "25%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "pressedRollOverIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_pressed_rollover.jpg",
 "maxHeight": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_rollover.jpg",
 "paddingBottom": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "minWidth": 50,
 "data": {
  "name": "X"
 }
},
{
 "propagateClick": false,
 "id": "Image_6D8661D0_6283_7B13_41C3_2DDE27ECF08F",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_6D8661D0_6283_7B13_41C3_2DDE27ECF08F.JPG",
 "paddingLeft": 0,
 "shadow": false,
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxWidth": 979,
 "maxHeight": 1224,
 "height": "100%",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "class": "Image",
 "minWidth": 1,
 "data": {
  "name": "Image4355"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_F1079843_E59D_D80C_41CA_F6FEA2EDA83A",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_F1078843_E59D_D80C_41B7_9B2478572818",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_F107F843_E59D_D80C_41E6_20AC38135C69",
  "this.Container_F107E843_E59D_D80C_41DD_2F32C2056DB7",
  "this.Container_F107D843_E59D_D80C_41E1_9BA4C9D3B20F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 0,
 "paddingBottom": 0,
 "minHeight": 200,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 100,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_F1072843_E59D_D80C_41D7_9841AA239F9F",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "propagateClick": false,
 "id": "Image_6C6C7C47_628D_697C_41BB_9A71CBBC1494",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_6C6C7C47_628D_697C_41BB_9A71CBBC1494.JPG",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxWidth": 1460,
 "maxHeight": 821,
 "height": 285.6,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "class": "Image",
 "minWidth": 1,
 "data": {
  "name": "Image3723"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_49B4B87F_610F_C8AC_41C7_2AA728021AB6",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_49B42880_610F_C854_41D2_CF8AD9DBB2FF",
  "this.Container_49B44880_610F_C854_41C3_560180BF58AA",
  "this.Container_49B78881_610F_C854_41C0_2895CC74BF56"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "82.832%",
 "gap": 0,
 "paddingBottom": 0,
 "minHeight": 200,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 100,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_49B6B889_610F_C855_41D6_65B12F17907A",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minWidth": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "class": "HTMLText",
 "propagateClick": false,
 "id": "HTMLText_F107F843_E59D_D80C_41E6_20AC38135C69",
 "scrollBarColor": "#99BB1B",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "21.411%",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b2d337;font-size:5.21vh;\"><B>Hallo!</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.33vh;\"><B>Selamat datang dalam perjalanan virtual Objek Wisata Brakseng</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_F107E843_E59D_D80C_41DD_2F32C2056DB7",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "96.354%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "height": "0.705%",
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 1,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_F107D843_E59D_D80C_41E1_9BA4C9D3B20F",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.HTMLText_F1073843_E59D_D80C_41E1_FB2C48C62FCF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "70%",
 "gap": 22,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 1,
 "overflow": "scroll"
},
{
 "class": "HTMLText",
 "propagateClick": false,
 "id": "HTMLText_49B42880_610F_C854_41D2_CF8AD9DBB2FF",
 "scrollBarColor": "#99BB1B",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "26.641%",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b2d337;font-size:5.21vh;\"><B>Pujon, Malang</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.33vh;\"><B>Di bawah bayang-bayang longsor</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_49B44880_610F_C854_41C3_560180BF58AA",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "96.354%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "height": "0.705%",
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 1,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_49B78881_610F_C854_41C0_2895CC74BF56",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.HTMLText_49B76888_610F_C853_41D2_8D1AB33A1078"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "70%",
 "gap": 22,
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "minWidth": 1,
 "overflow": "scroll"
},
{
 "class": "HTMLText",
 "propagateClick": false,
 "id": "HTMLText_F1073843_E59D_D80C_41E1_FB2C48C62FCF",
 "scrollBarColor": "#99BB1B",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Salah satu objek wisata di dataran tinggi Kota Batu, Jawa Timur menekankan pada aspek pertanian. Di sini, kita akan disuguhkan pemandangan alam perbukitan hijau yang memukau, perkebunan yang luas, dan udara segar khas pegunungan. Namun, di balik keindahan alam ini, Brakseng juga menjadi contoh penting dalam kajian isu lingkungan, khususnya terkait dengan degradasi lahan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Dalam virtual fieldtrip ini, kita tidak hanya menjelajahi pesona alam Brakseng, tetapi juga mendalami dampak aktivitas manusia terhadap lingkungan sekitar. Kawasan pertanian di Brakseng telah lama menjadi sumber penghidupan bagi masyarakat lokal, tetapi praktik pertanian yang tidak berkelanjutan juga memiliki risiko terhadap kualitas tanah dan kesehatan ekosistem.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Kita akan membahas bagaimana aktivitas pertanian intensif dapat memicu degradasi lahan mulai dari erosi tanah, penurunan kesuburan tanah, hingga perubahan pola aliran air. Namun, selain itu, kita juga akan melihat upaya-upaya lokal untuk mengatasi tantangan ini, seperti penerapan metode pertanian ramah lingkungan dan langkah-langkah konservasi tanah dan air.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Melalui perjalanan ini, Anda akan mendapatkan wawasan tidak hanya tentang keindahan alam Brakseng, tetapi juga pentingnya menjaga keseimbangan antara aktivitas manusia dan pelestarian lingkungan. Semoga melalui kajian ini, kita dapat semakin sadar akan peran kita dalam menjaga keberlanjutan alam untuk generasi mendatang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Selamat menikmati perjalanan virtual dan pembelajaran yang bermakna di Brakseng!</SPAN></SPAN></DIV></div>",
 "paddingTop": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "class": "HTMLText",
 "propagateClick": false,
 "id": "HTMLText_49B76888_610F_C853_41D2_8D1AB33A1078",
 "scrollBarColor": "#99BB1B",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Longsor yang terjadi di Pujon Kabupaten Malang, merupakan salah satu bencana alam yang sering terjadi terutama selama musim hujan. Pujon terletak di daerah pegunungan yang rawan terhadap tanah longsor karena kondisi geografisnya yang berbukit serta tanah yang mudah terkikis saat hujan lebat. Longsor di Pujon umumnya dipicu oleh beberapa faktor, antara lain:</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Curah Hujan Tinggi</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Selama musim hujan, curah hujan yang tinggi sering kali menyebabkan tanah menjadi jenuh dengan air, yang melemahkan struktur tanah dan memicu longsor. Air hujan yang meresap ke dalam tanah menyebabkan tanah yang tidak padat menjadi berat, sehingga tanah di lereng-lereng bukit mudah meluncur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Kondisi Geografis</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Pujon berada di wilayah yang memiliki banyak lereng curam. Tanah di daerah ini cenderung lebih mudah mengalami erosi, terutama jika vegetasi di atasnya kurang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Penggundulan Hutan</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Penebangan pohon atau perubahan penggunaan lahan dari hutan menjadi lahan pertanian atau permukiman dapat memperbesar risiko longsor. Akar-akar pohon berfungsi sebagai penahan tanah, dan ketika hutan digunduli, tanah menjadi lebih rentan longsor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Aktivitas Manusia</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Pembangunan yang tidak memperhatikan tata ruang dan sistem drainase yang baik di lereng-lereng bukit juga dapat memicu terjadinya longsor. Kegiatan seperti pertanian tanpa teknik konservasi tanah yang tepat atau pembuatan jalan di daerah perbukitan juga dapat meningkatkan risiko.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "minWidth": 20,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

(function(){
    var script = {
 "start": "this.playAudioList([this.audio_9D4C3537_81D9_B891_41B8_27951A5E001D]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_0687CB6F_100D_1BE2_4191_F85810CD8E6A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": [
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE"
 ],
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.55,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "items": [
  {
   "media": "this.video_92A262FC_81C8_F995_41C5_A299094CD9EB",
   "start": "this.viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_97753856_81CB_A895_41D9_7FA298D6AC19, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_97753856_81CB_A895_41D9_7FA298D6AC19, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377VideoPlayer)",
   "player": "this.viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_97753856_81CB_A895_41D9_7FA298D6AC19",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 119,
  "yaw": -149.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A04F9343_8148_98F3_41D3_884483B16841",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -172.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3247460_8148_98AD_41BA_9233F3BD9ABA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_6E1CCD25_7CCB_CDE9_41DE_20DA838CB2B5_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/zoomImage_6E1CCD25_7CCB_CDE9_41DE_20DA838CB2B5_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_6E1CCD25_7CCB_CDE9_41DE_20DA838CB2B5_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_6E1CCD25_7CCB_CDE9_41DE_20DA838CB2B5_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_65F5D151_7D5B_35A9_41D2_A235933C08EB",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -106.72,
  "class": "PanoramaCameraPosition",
  "pitch": -13.19
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -46.69,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_6AC69A02_6524_F596_41A8_CA0F37717BC2",
 "image": {
  "levels": [
   {
    "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 625
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.75,
 "hideEasing": "cubic_out",
 "hfov": 12.6
},
{
 "initialPosition": {
  "yaw": -96.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3129441_8148_98EF_41C3_1BD8BF1C9580",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 16.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0.62
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 128,
  "yaw": 69.63,
  "class": "PanoramaCameraPosition",
  "pitch": -7.52
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 69.63,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetHfov": 128,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -7.52
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9A6976_DD68_C33B_41EA_791527D2031C",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": -162.09,
  "class": "PanoramaCameraPosition",
  "pitch": -2.37
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 31.54,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_907165F8_814B_9B9D_41B9_88B797A473B7",
 "pitch": -6.98,
 "hideEasing": "cubic_out",
 "hfov": 22.46,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_930672DD_814B_B997_41DB_146430249F97.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 154.51,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_934FB022_815B_B8AC_41D4_50C6B90C946C",
 "image": {
  "levels": [
   {
    "url": "media/popup_934FB022_815B_B8AC_41D4_50C6B90C946C_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.99,
 "hideEasing": "cubic_out",
 "hfov": 26.57
},
{
 "label": "Sempu",
 "thumbnailUrl": "media/video_92A262FC_81C8_F995_41C5_A299094CD9EB_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_92A262FC_81C8_F995_41C5_A299094CD9EB",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_92A262FC_81C8_F995_41C5_A299094CD9EB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 139.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3543470_8148_98AD_41C5_A5835E9993F4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 96.23,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_939E9830_81C9_A8AC_41B7_1B71243B477C",
 "image": {
  "levels": [
   {
    "url": "media/popup_939E9830_81C9_A8AC_41B7_1B71243B477C_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.72,
 "hideEasing": "cubic_out",
 "hfov": 17.3
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -35.04,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_90A39A2C_814F_68B4_41D2_7C4040F716AD",
 "image": {
  "levels": [
   {
    "url": "media/popup_90A39A2C_814F_68B4_41D2_7C4040F716AD_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.44,
 "hideEasing": "cubic_out",
 "hfov": 25.6
},
{
 "initialPosition": {
  "yaw": 73.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3E0A431_8148_98AF_41D6_C930F7D8D692",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": 0.06,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 110.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3DED401_8148_986F_41D2_833709340B45",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "items": [
  {
   "media": "this.video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0F852A4_8148_99B5_41B6_52AB325D70F8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0F852A4_8148_99B5_41B6_52AB325D70F8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0F852A4_8148_99B5_41B6_52AB325D70F8",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 102.38,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_933BE0B3_81C8_9993_41BE_898977CCC9A0",
 "image": {
  "levels": [
   {
    "url": "media/popup_933BE0B3_81C8_9993_41BE_898977CCC9A0_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -35.12,
 "hideEasing": "cubic_out",
 "hfov": 20.98
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 89.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B",
 "image": {
  "levels": [
   {
    "url": "media/popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.99,
 "hideEasing": "cubic_out",
 "hfov": 19.3
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 23.5,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59",
 "image": {
  "levels": [
   {
    "url": "media/popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -19.17,
 "hideEasing": "cubic_out",
 "hfov": 21.38
},
{
 "levels": [
  {
   "url": "media/popup_933BE0B3_81C8_9993_41BE_898977CCC9A0_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_933BE0B3_81C8_9993_41BE_898977CCC9A0_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_933BE0B3_81C8_9993_41BE_898977CCC9A0_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_933BE0B3_81C8_9993_41BE_898977CCC9A0_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_972CE895_81CB_A997_41D0_593F8367FB88",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -148.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A05A9323_8148_98B3_41E0_2F0AF4C83124",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35",
   "start": "this.viewer_uidA0C0A295_8148_9997_41A4_071BA0083696VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9768F856_81CB_A895_41D7_BBB65EA28B2B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9768F856_81CB_A895_41D7_BBB65EA28B2B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0C0A295_8148_9997_41A4_071BA0083696VideoPlayer)",
   "player": "this.viewer_uidA0C0A295_8148_9997_41A4_071BA0083696VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_9768F856_81CB_A895_41D7_BBB65EA28B2B",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -118.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A38933E1_8148_9FAF_41B0_CD4FA604A6F3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_0.jpg",
   "width": 1284,
   "class": "ImageResourceLevel",
   "height": 784
  },
  {
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 625
  },
  {
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 312
  }
 ],
 "id": "ImageResource_756125E6_652F_DE9F_41B3_D985A9DA49E1",
 "class": "ImageResource"
},
{
 "label": "Pengantar CVC",
 "thumbnailUrl": "media/video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -98.34,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_921EAA72_81C8_A8AC_41D8_6B52F33BCF65",
 "pitch": 21.78,
 "hideEasing": "cubic_out",
 "hfov": 19.15,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_92A262FC_81C8_F995_41C5_A299094CD9EB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "duration": 1000,
 "id": "effect_6AF1446C_7D5B_DC78_41D0_8490F6BE28B3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -164.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3F08421_8148_98AF_41DF_201FDD57C39F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_6E69AB82_7CDF_34A8_41C7_35F58B954224_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/zoomImage_6E69AB82_7CDF_34A8_41C7_35F58B954224_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_6E69AB82_7CDF_34A8_41C7_35F58B954224_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_6E69AB82_7CDF_34A8_41C7_35F58B954224_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_65C84151_7D5B_35A9_41CA_FEF259701D61",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 11.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A06EF392_8148_986D_4183_7CA677466574",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A079D372_8148_98AD_41B8_AFAA493EB14F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0F872A4_8148_99B5_41CA_09FBD030007D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0F872A4_8148_99B5_41CA_09FBD030007D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0F872A4_8148_99B5_41CA_09FBD030007D",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A0534309_8148_987F_41DE_6B2487042B87",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD",
   "start": "this.viewer_uidA0C9429B_8148_999C_41E0_157193D34569VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_976B2856_81CB_A895_41DE_E164AB536E05, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_976B2856_81CB_A895_41DE_E164AB536E05, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0C9429B_8148_999C_41E0_157193D34569VideoPlayer)",
   "player": "this.viewer_uidA0C9429B_8148_999C_41E0_157193D34569VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_976B2856_81CB_A895_41DE_E164AB536E05",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_60B6B62C_7DC8_DFF8_41C8_B4B97C7A92F0",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 94.09,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249",
 "image": {
  "levels": [
   {
    "url": "media/popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.78,
 "hideEasing": "cubic_out",
 "hfov": 14.77
},
{
 "levels": [
  {
   "url": "media/popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_60B3762B_7DC8_DFF9_41D0_E2498B9305AC",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Rumah Bibit (*)",
 "hfovMin": "135%",
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
  "this.overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
  "this.overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
  "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0",
  "this.overlay_90A71450_80B9_78ED_41DF_CBBF50494669",
  "this.popup_90D82BE8_80B8_AFBC_41B1_BE2EBB3CB7E9",
  "this.overlay_90110274_80BF_B894_41DA_8C906DB2EC2C",
  "this.popup_90AEFDDF_80BF_EB93_41BF_E076102FD1D3"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CBBA60FD_DD68_4129_41E6_B040B26B6725"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -123.39,
   "yaw": -106.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -161.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3027451_8148_98EC_41AB_6D908521E631",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 162.42,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_90AEFDDF_80BF_EB93_41BF_E076102FD1D3",
 "pitch": -11.88,
 "hideEasing": "cubic_out",
 "hfov": 17.72,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_91F70028_80BF_B8BC_41D4_C07A0EE6658E.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -52.95,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_6BD561BE_7DD7_D4DB_41D8_C3212420BA9B",
 "pitch": -2.46,
 "hideEasing": "cubic_out",
 "hfov": 21.81,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -132.22,
  "class": "PanoramaCameraPosition",
  "pitch": -4.52
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "levels": [
  {
   "url": "media/popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_60B5D62B_7DC8_DFF9_41D2_ED4BAD8E0EB1",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0E742A4_8148_99B5_41DD_654971D6731A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0E742A4_8148_99B5_41DD_654971D6731A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0E742A4_8148_99B5_41DD_654971D6731A",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -53.43,
  "class": "PanoramaCameraPosition",
  "pitch": 2.17
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_8A642EC6_80B9_A9F5_41B2_917963B5819A",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04B"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window500"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "levels": [
  {
   "url": "media/popup_90A39A2C_814F_68B4_41D2_7C4040F716AD_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_90A39A2C_814F_68B4_41D2_7C4040F716AD_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_90A39A2C_814F_68B4_41D2_7C4040F716AD_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_90A39A2C_814F_68B4_41D2_7C4040F716AD_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97587886_81CB_A874_41D3_AECBA4246FF9",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -85.83,
  "class": "PanoramaCameraPosition",
  "pitch": -2.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_65F4D151_7D5B_35A9_41C6_239E88A35BB9",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 500,
 "id": "FadeOutEffect_65F51151_7D5B_35A9_41AC_36117EF77B2E",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -63.17,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_90D99FAB_8149_67BC_41C0_8B884534539C",
 "pitch": 3.95,
 "hideEasing": "cubic_out",
 "hfov": 21.07,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_939FDADD_8148_A997_41B4_04AC83CC79EB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -52.54,
  "class": "PanoramaCameraPosition",
  "pitch": -5.89
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_92533B97_81C8_AF94_41D8_561B75BE6FEC",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window28892"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Spot Foto Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
  "this.overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
  "this.overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
  "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0",
  "this.overlay_927061BD_81CB_FB97_41D5_1425954A33F7",
  "this.popup_933BE0B3_81C8_9993_41BE_898977CCC9A0",
  "this.overlay_90F2F537_81C9_9893_41A6_22536A379037",
  "this.popup_921EAA72_81C8_A8AC_41D8_6B52F33BCF65"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_9DDCF946_81D9_A8F5_41DE_E1A735170E41"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.91,
   "yaw": 151.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "hfov": 119,
  "yaw": 9.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3CF1411_8148_986F_41DA_199D7919D511",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_0.jpg",
   "width": 1340,
   "class": "ImageResourceLevel",
   "height": 855
  },
  {
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 653
  },
  {
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 326
  }
 ],
 "id": "ImageResource_7566D5E5_652F_DE92_41CB_38F7195FCFBD",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9F6242_DD68_415B_41D1_FBB643A309E1",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "items": [
  {
   "media": "this.video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0F802A4_8148_99B5_41B1_6FBE81AF94FC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0F802A4_8148_99B5_41B1_6FBE81AF94FC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0F802A4_8148_99B5_41B1_6FBE81AF94FC",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_8A637EC4_80B9_A9F5_41C6_BBBAF92CD2C5",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0C0A295_8148_9997_41A4_071BA0083696"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window499"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "items": [
  {
   "media": "this.video_930672DD_814B_B997_41DB_146430249F97",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0E722A4_8148_99B5_41BE_37C88AB27D0E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0E722A4_8148_99B5_41BE_37C88AB27D0E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0E722A4_8148_99B5_41BE_37C88AB27D0E",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97223886_81CB_A874_41C3_F4CF49B1CA24",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "FadeInEffect_65C85151_7D5B_35A9_41CE_2D21D1D8CB34",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "items": [
  {
   "media": "this.video_91F70028_80BF_B8BC_41D4_C07A0EE6658E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0F892A4_8148_99B5_41C5_F148D76DD598, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0F892A4_8148_99B5_41C5_F148D76DD598, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0F892A4_8148_99B5_41C5_F148D76DD598",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Trekking Mangrove",
 "hfovMin": "135%",
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
  "this.overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
  "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0",
  "this.overlay_6013710D_7DC9_75B8_41CB_26807795E8F2",
  "this.overlay_61621F1B_7DC9_4DD9_41C4_30F67161D7D0",
  "this.overlay_9208B30E_8148_B875_41DD_11112517ED9A",
  "this.popup_907165F8_814B_9B9D_41B9_88B797A473B7"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.81,
   "yaw": 109.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Pos Pantai Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E037F818_F8D2_E8B4_41D4_588904212997",
  "this.overlay_E134175C_F8D6_98AC_41EC_F5374660D843",
  "this.overlay_B398DC55_A42F_BBE0_41DA_173BE92B3CE1",
  "this.overlay_BC0A8603_A42F_9767_41D2_D9DAE13D0563",
  "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_tcap0",
  "this.overlay_61B5A03D_7DCF_53D8_41C7_6680774B5946",
  "this.overlay_90FF74D2_8157_99EC_41DB_8203D8039A2C",
  "this.overlay_93C9DDBE_8158_AB95_41D0_0C2831DE5E2F",
  "this.popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.9,
   "yaw": -135.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 16.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3465480_8148_986D_41D2_BE790E019DCE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.8,
  "class": "PanoramaCameraPosition",
  "pitch": -0.2
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -50.51,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5",
 "image": {
  "levels": [
   {
    "url": "media/popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.93,
 "hideEasing": "cubic_out",
 "hfov": 17.37
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 73.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97",
 "image": {
  "levels": [
   {
    "url": "media/popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.72,
 "hideEasing": "cubic_out",
 "hfov": 17.3
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": -171.27,
  "class": "PanoramaCameraPosition",
  "pitch": -5.03
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "POS 2 (*)",
 "hfovMin": "135%",
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
  "this.overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
  "this.overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
  "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0",
  "this.popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5",
  "this.overlay_6BC331EB_7DD9_D479_41D1_7BF7F38F583A",
  "this.popup_6A46848A_7DD9_5CBB_41C6_75C7A7CBCF86",
  "this.overlay_8FF5F54A_80B9_98FD_41D4_119622FA33E7"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CB9F6242_DD68_415B_41D1_FBB643A309E1"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.82,
   "yaw": 30.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C"
  },
  {
   "backwardYaw": 18.86,
   "yaw": -170.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 56.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3787490_8148_986D_41B4_300EBBE8C11C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -28.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A334545C_8148_9895_41D5_6A667F700660",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97250886_81CB_A874_41CC_3038898017C0",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Menuju Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
  "this.overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
  "this.overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
  "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0",
  "this.overlay_902DAABE_8159_A995_41BB_085F45B0A789"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.11,
   "yaw": -163.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335"
  },
  {
   "backwardYaw": -80.39,
   "yaw": 18.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_930672DD_814B_B997_41DB_146430249F97",
   "start": "this.viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_97754856_81CB_A895_41B8_61F78C8C9F65, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_97754856_81CB_A895_41B8_61F78C8C9F65, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595CVideoPlayer)",
   "player": "this.viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595CVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_97754856_81CB_A895_41B8_61F78C8C9F65",
 "class": "PlayList"
},
{
 "label": "Trekking Mangrove",
 "thumbnailUrl": "media/video_930672DD_814B_B997_41DB_146430249F97_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_930672DD_814B_B997_41DB_146430249F97",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_930672DD_814B_B997_41DB_146430249F97.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_939FDADD_8148_A997_41B4_04AC83CC79EB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0F8D2A4_8148_99B5_41DD_2181EBE40DD9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0F8D2A4_8148_99B5_41DD_2181EBE40DD9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0F8D2A4_8148_99B5_41DD_2181EBE40DD9",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -156.01,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_90F91779_8159_F89C_41D2_93F34B87B500",
 "image": {
  "levels": [
   {
    "url": "media/popup_90F91779_8159_F89C_41D2_93F34B87B500_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.86,
 "hideEasing": "cubic_out",
 "hfov": 21.1
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_9042FDA4_80B8_ABB5_41C5_D8330DAAAC89",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0C9429B_8148_999C_41E0_157193D34569"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window9365"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Pantai Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
  "this.overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
  "this.overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
  "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0",
  "this.overlay_631F536A_7DC9_3478_4145_220BA770D174",
  "this.overlay_90FF9342_81C8_98EC_4171_3CA301985633",
  "this.popup_939E9830_81C9_A8AC_41B7_1B71243B477C",
  "this.overlay_935C15E9_81C9_9BBF_41D4_B3E8DC46D3E5",
  "this.popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97",
  "this.overlay_9356CAA5_81CB_A9B7_41D8_6D14F014921F",
  "this.popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.86,
   "yaw": -80.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331"
  },
  {
   "backwardYaw": 151.6,
   "yaw": 7.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "levels": [
  {
   "url": "media/popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97569886_81CB_A874_41DE_61D43CC8B1A6",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 160.49,
  "class": "PanoramaCameraPosition",
  "pitch": -2.87
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Masuk Trekking Mangrove",
 "hfovMin": "135%",
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
  "this.overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
  "this.overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
  "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 109.91,
   "yaw": -95.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701"
  },
  {
   "backwardYaw": -161.54,
   "yaw": 61.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_939FDADD_8148_A997_41B4_04AC83CC79EB",
   "start": "this.viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9775F856_81CB_A895_41BE_8635CCF5D65C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9775F856_81CB_A895_41BE_8635CCF5D65C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6FVideoPlayer)",
   "player": "this.viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_9775F856_81CB_A895_41BE_8635CCF5D65C",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_935BC144_8149_78F5_41C3_5CC1EBEB444C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6F"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window15266"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "label": "Materi 9 - Rumah Bibit",
 "thumbnailUrl": "media/video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "hfov": 128,
  "yaw": -161.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A39163B2_8148_9FAD_41D5_BB07B5C80D29",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "*Persimpangan Clungup dan Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
  "this.overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
  "this.overlay_BE677039_A425_6BA0_41C7_94189E681072",
  "this.overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
  "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0",
  "this.overlay_666A9E30_7DF9_CFE7_41D8_4BDC9C234957",
  "this.overlay_63084EF7_7DFF_4C68_41C3_F7DE334274E8",
  "this.overlay_612424EA_7DF8_DC78_41C8_CAB462D021CD",
  "this.overlay_66F03493_7DF9_7CA8_41D0_E3906EDF52B9",
  "this.overlay_920202C0_81CF_99ED_4195_53CDEDE5A3AC",
  "this.popup_932E799C_81C8_AB94_41AF_1C5D39B8F7D8"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 61.93,
   "yaw": -161.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE"
  },
  {
   "backwardYaw": -146.11,
   "yaw": 83.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55"
  },
  {
   "backwardYaw": 130.02,
   "yaw": -69.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 90.57,
  "class": "PanoramaCameraPosition",
  "pitch": -3.88
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Jalan Menuju CMC",
 "hfovMin": "135%",
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FB7C1530_E908_B746_41EC_107D1228B6D8",
  "this.popup_6A76B567_6525_5F9E_41D9_156D317DC354",
  "this.popup_6AC69A02_6524_F596_41A8_CA0F37717BC2",
  "this.overlay_B2C3B96F_A424_BDA0_41D7_5D1FED98E3C2",
  "this.overlay_B2CA3761_A424_F5A0_41D1_6528FE8CAFC8",
  "this.overlay_B2E952D9_A43C_ECE0_41CA_99FA57CF46D5",
  "this.overlay_B3133B4D_A43C_BDE0_41D4_324C43909643",
  "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CB9A6976_DD68_C33B_41EA_791527D2031C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.91,
   "yaw": 15.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55"
  },
  {
   "backwardYaw": 30.24,
   "yaw": -168.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 500,
 "id": "FadeOutEffect_65F4E151_7D5B_35A9_41D2_56951C981D4B",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Pantai Clungup (Mulai Pasang)",
 "hfovMin": "135%",
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
  "this.overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
  "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0",
  "this.overlay_60EFB87E_7DCB_5458_41AE_127ADBB20217",
  "this.overlay_603EBD3C_7DC9_4DDF_41D2_0AF22456086B"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "levels": [
  {
   "url": "media/popup_90F91779_8159_F89C_41D2_93F34B87B500_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_90F91779_8159_F89C_41D2_93F34B87B500_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_90F91779_8159_F89C_41D2_93F34B87B500_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_90F91779_8159_F89C_41D2_93F34B87B500_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_9727A886_81CB_A874_41D3_4E0837440ADB",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Tugu CMC",
 "hfovMin": "135%",
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F8F0E502_E908_D74A_41DB_7C5A15A691FA",
  "this.overlay_B3024DB0_A43F_B4A0_4157_67F2AEDECA18",
  "this.overlay_B3C9ADD4_A43C_B4E0_41D2_88D851F5E39D",
  "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_tcap0",
  "this.overlay_615F3836_7DCB_53E8_41B0_CD92784E5F2C",
  "this.overlay_66DA5BBA_7DC8_D4DB_41D5_499257957079",
  "this.overlay_66C6AE38_7DF9_CFE7_41C8_BFE1676BEB3D",
  "this.overlay_8FFD56CF_80B8_99F3_41D6_109C06E3AFBF",
  "this.popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C",
  "this.overlay_937BA7EB_81C9_67B3_41D1_F91D08B41311",
  "this.popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 15.59,
   "yaw": 31.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C"
  },
  {
   "backwardYaw": -106.75,
   "yaw": -123.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376"
  },
  {
   "backwardYaw": 83.19,
   "yaw": -146.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "audio": {
  "oggUrl": "media/audio_93897403_81C9_986C_41D2_D31D65DFD079.ogg",
  "mp3Url": "media/audio_93897403_81C9_986C_41D2_D31D65DFD079.mp3",
  "class": "AudioResource"
 },
 "id": "audio_93897403_81C9_986C_41D2_D31D65DFD079",
 "data": {
  "label": "Medieval Music for Focus & Relaxation _ The Gray Wizard\u2019s Journey_[cut_394sec]"
 },
 "class": "MediaAudio"
},
{
 "initialPosition": {
  "yaw": -70.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A02D52E3_8148_99B3_41DC_1159AEAD4D61",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -108.14,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_932E799C_81C8_AB94_41AF_1C5D39B8F7D8",
 "pitch": 11.48,
 "hideEasing": "cubic_out",
 "hfov": 23.65,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "hfov": 119,
  "yaw": -33.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0.33
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -102.3,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_6A46848A_7DD9_5CBB_41C6_75C7A7CBCF86",
 "pitch": -2.45,
 "hideEasing": "cubic_out",
 "hfov": 11.89,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 3.15,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_90D82BE8_80B8_AFBC_41B1_BE2EBB3CB7E9",
 "pitch": -1.83,
 "hideEasing": "cubic_out",
 "hfov": 16.59,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -2.61,
  "class": "PanoramaCameraPosition",
  "pitch": -5.29
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_65F5F151_7D5B_35A9_41C2_57CE05F6BD8F",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "items": [
  {
   "media": "this.video_91F70028_80BF_B8BC_41D4_C07A0EE6658E",
   "start": "this.viewer_uidA0C8429C_8148_9994_41C6_D92724948C88VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_976A9856_81CB_A895_41DA_FA0205EAFA31, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_976A9856_81CB_A895_41DA_FA0205EAFA31, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0C8429C_8148_9994_41C6_D92724948C88VideoPlayer)",
   "player": "this.viewer_uidA0C8429C_8148_9994_41C6_D92724948C88VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_976A9856_81CB_A895_41DA_FA0205EAFA31",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonMoveDown": "this.IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A",
 "displayPlaybackBar": true,
 "buttonMoveUp": "this.IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
 "buttonZoomIn": "this.IconButton_06843B6F_100D_1BE2_4188_FA1587539796",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomOut": "this.IconButton_0684FB6E_100D_1BE2_4195_727B29955F55",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonPlayRight": "this.IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A",
 "buttonPlayLeft": "this.IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040"
},
{
 "items": [
  {
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 44.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3763490_8148_986D_41CC_F3B2FC96380D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "Rumah Bibit",
 "thumbnailUrl": "media/video_91F70028_80BF_B8BC_41D4_C07A0EE6658E_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_91F70028_80BF_B8BC_41D4_C07A0EE6658E",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_91F70028_80BF_B8BC_41D4_C07A0EE6658E.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_92A262FC_81C8_F995_41C5_A299094CD9EB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A0E762A4_8148_99B5_41DC_BE421B29F0E5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A0E762A4_8148_99B5_41DC_BE421B29F0E5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_A0E762A4_8148_99B5_41DC_BE421B29F0E5",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C",
   "start": "this.viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_976A1856_81CB_A895_41D4_211F3107BCC8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_976A1856_81CB_A895_41D4_211F3107BCC8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998VideoPlayer)",
   "player": "this.viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_976A1856_81CB_A895_41D4_211F3107BCC8",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 153.51,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9",
 "image": {
  "levels": [
   {
    "url": "media/popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -15.52,
 "hideEasing": "cubic_out",
 "hfov": 16.72
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_90192FB8_80BF_E79D_41DA_ECB66CA69188",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0C8429C_8148_9994_41C6_D92724948C88"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window10448"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "initialPosition": {
  "yaw": 33.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3BB13F1_8148_9FAF_41D8_93B69BCD9053",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Pantai Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
 "class": "Panorama",
 "overlays": [
  "this.overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
  "this.overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
  "this.overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
  "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0",
  "this.overlay_935A111C_8158_B894_41D2_3E3772B25661",
  "this.popup_90F91779_8159_F89C_41D2_93F34B87B500",
  "this.overlay_93273F19_8158_A89F_41BE_6D7112F76105",
  "this.overlay_95E4AF18_8158_A89D_41D6_3BA9FB21055B",
  "this.popup_934FB022_815B_B8AC_41D4_50C6B90C946C"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.8,
   "yaw": 31.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331"
  },
  {
   "backwardYaw": -135.93,
   "yaw": -40.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -148.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A0750353_8148_98EC_419B_D4480971FBD4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 17.58,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE",
 "image": {
  "levels": [
   {
    "url": "media/popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.03,
 "hideEasing": "cubic_out",
 "hfov": 14.77
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -91.72,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_6A76B567_6525_5F9E_41D9_156D317DC354",
 "image": {
  "levels": [
   {
    "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 653
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.18,
 "hideEasing": "cubic_out",
 "hfov": 16.66
},
{
 "levels": [
  {
   "url": "media/popup_934FB022_815B_B8AC_41D4_50C6B90C946C_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_934FB022_815B_B8AC_41D4_50C6B90C946C_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_934FB022_815B_B8AC_41D4_50C6B90C946C_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_934FB022_815B_B8AC_41D4_50C6B90C946C_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97261886_81CB_A874_41CD_491B9C55B925",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_9757F886_81CB_A874_41C5_72EB705C2A5D",
 "class": "ImageResource"
},
{
 "label": "Clungup",
 "thumbnailUrl": "media/video_939FDADD_8148_A997_41B4_04AC83CC79EB_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_939FDADD_8148_A997_41B4_04AC83CC79EB",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_939FDADD_8148_A997_41B4_04AC83CC79EB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 84.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A385C3D1_8148_9FEF_41DA_C4ADB35D0A27",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_90E3E7A9_814B_A7BF_41CE_98963D91E405",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595C"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window18188"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "duration": 500,
 "id": "FadeOutEffect_65C86151_7D5B_35A9_41B1_973A0AE25CB9",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "levels": [
  {
   "url": "media/popup_939E9830_81C9_A8AC_41B7_1B71243B477C_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_939E9830_81C9_A8AC_41B7_1B71243B477C_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_939E9830_81C9_A8AC_41B7_1B71243B477C_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_939E9830_81C9_A8AC_41B7_1B71243B477C_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97204886_81CB_A874_41D8_7FEC5C5CF1D7",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9DDCF946_81D9_A8F5_41DE_E1A735170E41.ogg",
  "mp3Url": "media/audio_9DDCF946_81D9_A8F5_41DE_E1A735170E41.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9DDCF946_81D9_A8F5_41DE_E1A735170E41",
 "data": {
  "label": "Medieval Music for Focus & Relaxation _ The Gray Wizard\u2019s Journey_[cut_394sec]"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": -49.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_A3AD5401_8148_986F_41B9_9DA423640C6B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "POS 2",
 "thumbnailUrl": "media/video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_97236886_81CB_A874_41BA_A66FD411AE8D",
 "class": "ImageResource"
},
{
 "label": "Dampak Ekonomi",
 "thumbnailUrl": "media/video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C_t.jpg",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132",
   "start": "this.viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_976B4856_81CB_A895_41BC_F586F6EE8251, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_976B4856_81CB_A895_41BC_F586F6EE8251, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04BVideoPlayer)",
   "player": "this.viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04BVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_976B4856_81CB_A895_41BC_F586F6EE8251",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "POS 1",
 "hfovMin": "130%",
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
  "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0",
  "this.overlay_7315C614_7CD8_DFAF_41C5_E4F8CA932CB2",
  "this.popup_6BD561BE_7DD7_D4DB_41D8_C3212420BA9B",
  "this.overlay_6B89584F_7DDB_33B9_41A3_B5D92B5ECD32",
  "this.popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249",
  "this.popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE",
  "this.overlay_8FF6947A_80B8_B89D_41B6_EC2709D3C9E8"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -170.33,
   "yaw": 18.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg",
 "hfovMax": 137
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Pantai Clungup (Surut)",
 "hfovMin": "135%",
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
  "this.overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
  "this.overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
  "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0",
  "this.overlay_905AFCB2_8149_E9AD_41DA_94E61EFA8ADA",
  "this.popup_90D99FAB_8149_67BC_41C0_8B884534539C",
  "this.overlay_907450C7_814F_F9F3_41CE_7BD5FE657800",
  "this.popup_90A39A2C_814F_68B4_41D2_7C4040F716AD"
 ],
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D"
  },
  {
   "backwardYaw": -69.82,
   "yaw": 130.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9D4C3537_81D9_B891_41B8_27951A5E001D.ogg",
  "mp3Url": "media/audio_9D4C3537_81D9_B891_41B8_27951A5E001D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9D4C3537_81D9_B891_41B8_27951A5E001D",
 "data": {
  "label": "Medieval Music for Focus & Relaxation _ The Gray Wizard\u2019s Journey_[cut_394sec]"
 },
 "class": "MediaAudio"
},
{
 "levels": [
  {
   "url": "media/zoomImage_6FC30319_7CD9_75D8_41C8_097FC8A9CB18_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/zoomImage_6FC30319_7CD9_75D8_41C8_097FC8A9CB18_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_6FC30319_7CD9_75D8_41C8_097FC8A9CB18_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_6FC30319_7CD9_75D8_41C8_097FC8A9CB18_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_65F4C151_7D5B_35A9_41CD_8FE78D1651BE",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 131.01,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C",
 "image": {
  "levels": [
   {
    "url": "media/popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.97,
 "hideEasing": "cubic_out",
 "hfov": 19.45
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBBA60FD_DD68_4129_41E6_B040B26B6725",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 },
 "class": "PanoramaAudio"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "window_92E21BF9_81C8_AF9F_41B7_9079E56E29AB",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "bodyBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377"
 ],
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "shadowHorizontalLength": 3,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window27434"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": 34,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "backgroundImageUrl": "skin/Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC.png",
 "gap": 10
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_0687CB6F_100D_1BE2_4191_F85810CD8E6A",
 "left": "34.12%",
 "children": [
  "this.IconButton_0684FB6E_100D_1BE2_4195_727B29955F55",
  "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
  "this.IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884",
  "this.IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E",
  "this.Container_0684BB6F_100D_1BE2_41AD_0DD61FF6A9D9",
  "this.IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074",
  "this.IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A",
  "this.IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE",
  "this.IconButton_06843B6F_100D_1BE2_4188_FA1587539796"
 ],
 "backgroundOpacity": 0,
 "overflow": "hidden",
 "width": "31.064%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "5.59%",
 "height": "21.722%",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container37498"
 },
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent38050"
 },
 "shadow": false,
 "visible": false
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage38051"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "pressedIconColor": "#888888",
 "data": {
  "name": "CloseButton38052"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37509"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377",
 "id": "viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377VideoPlayer",
 "class": "VideoPlayer"
},
{
 "oggUrl": "media/audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64.ogg",
 "mp3Url": "media/audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64.mp3",
 "id": "audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "class": "AudioResource"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0C0A295_8148_9997_41A4_071BA0083696",
 "id": "viewer_uidA0C0A295_8148_9997_41A4_071BA0083696VideoPlayer",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0C9429B_8148_999C_41E0_157193D34569",
 "id": "viewer_uidA0C9429B_8148_999C_41E0_157193D34569VideoPlayer",
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -106.75,
   "hfov": 11.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_A3787490_8148_986D_41B4_300EBBE8C11C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027394E2_100F_0EE2_41A5_561E100E96FD",
   "pitch": -17.67,
   "yaw": -106.75,
   "hfov": 11.28,
   "distance": 100
  }
 ],
 "id": "overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.23,
   "hfov": 55.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_1_0.png",
      "width": 1064,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.82,
   "yaw": -99.23,
   "hfov": 55.77,
   "distance": 50
  }
 ],
 "id": "overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_7_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 100.53,
   "hfov": 21.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.82
  }
 ],
 "areas": [
  {
   "click": "this.openLink('https://drive.google.com/file/d/1RCJcd8QI-TbL_bbA1XiRhQlNwfaHFh6h/view?usp=sharing', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 100.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_7_0.png",
      "width": 366,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.82,
   "hfov": 21.56
  }
 ],
 "id": "overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.15,
   "hfov": 16.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.83
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_90D82BE8_80B8_AFBC_41B1_BE2EBB3CB7E9, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_9042FDA4_80B8_ABB5_41C5_D8330DAAAC89, this.video_9014B4C5_80B8_99F7_41D9_4E3A31EA9ACD, this.PlayList_976B2856_81CB_A895_41DE_E164AB536E05, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_9_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 310
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "hfov": 16.59
  }
 ],
 "id": "overlay_90A71450_80B9_78ED_41DF_CBBF50494669",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 162.42,
   "hfov": 17.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.88
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_90AEFDDF_80BF_EB93_41BF_E076102FD1D3, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_90192FB8_80BF_E79D_41DA_ECB66CA69188, this.video_91F70028_80BF_B8BC_41D4_C07A0EE6658E, this.PlayList_976A9856_81CB_A895_41DA_FA0205EAFA31, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 162.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_10_0.png",
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 293
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.88,
   "hfov": 17.72
  }
 ],
 "id": "overlay_90110274_80BF_B894_41DA_8C906DB2EC2C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37500"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37505"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04B",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38043"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38046"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 151.6,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.98
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_A3247460_8148_98AD_41BA_9233F3BD9ABA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028664FE_100F_0EE2_41AF_12D6D98801C2",
   "pitch": -41.98,
   "yaw": 151.6,
   "hfov": 8.8,
   "distance": 100
  }
 ],
 "id": "overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_1_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 152,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_1_0.png",
      "width": 315,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.38,
   "yaw": 152,
   "hfov": 11.64,
   "distance": 50
  }
 ],
 "id": "overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.55,
   "hfov": 26.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.81
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.81,
   "yaw": 165.55,
   "hfov": 26.56,
   "distance": 50
  }
 ],
 "id": "overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 36,
 "angle": -3,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 102.38,
   "hfov": 20.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.12
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_933BE0B3_81C8_9993_41BE_898977CCC9A0, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_972CE895_81CB_A997_41D0_593F8367FB88, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 102.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_7_0.png",
      "width": 433,
      "class": "ImageResourceLevel",
      "height": 441
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.12,
   "hfov": 20.98
  }
 ],
 "id": "overlay_927061BD_81CB_FB97_41D5_1425954A33F7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -98.34,
   "hfov": 19.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.78
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_921EAA72_81C8_A8AC_41D8_6B52F33BCF65, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_92E21BF9_81C8_AF9F_41B7_9079E56E29AB, this.video_92A262FC_81C8_F995_41C5_A299094CD9EB, this.PlayList_97753856_81CB_A895_41D9_7FA298D6AC19, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -98.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_8_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.78,
   "hfov": 19.15
  }
 ],
 "id": "overlay_90F2F537_81C9_9893_41A6_22536A379037",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0C0A295_8148_9997_41A4_071BA0083696",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38042"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_1_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 109.91,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.8
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_A385C3D1_8148_9FEF_41DA_C4ADB35D0A27); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028934F0_100F_0EFE_419E_BA319BD7FA4E",
   "pitch": -23.8,
   "yaw": 109.91,
   "hfov": 9.19,
   "distance": 100
  }
 ],
 "id": "overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_1_HS_5_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 124.1,
   "hfov": 36.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.97
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_1_HS_5_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.97,
   "yaw": 124.1,
   "hfov": 36.44,
   "distance": 50
  }
 ],
 "id": "overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_7_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -64.06,
   "hfov": 16.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.05
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9490F846_81CB_A8F4_41C4_DAF6EE7B3A78",
   "pitch": -24.05,
   "yaw": -64.06,
   "hfov": 16.75,
   "distance": 100
  }
 ],
 "id": "overlay_6013710D_7DC9_75B8_41CB_26807795E8F2",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63.43,
   "hfov": 18.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_8_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.64,
   "yaw": -63.43,
   "hfov": 18.48,
   "distance": 50
  }
 ],
 "id": "overlay_61621F1B_7DC9_4DD9_41C4_30F67161D7D0",
 "data": {
  "label": "JALUR TREKKING MENUJU TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.54,
   "hfov": 22.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.98
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_907165F8_814B_9B9D_41B9_88B797A473B7, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_90E3E7A9_814B_A7BF_41CE_98963D91E405, this.video_930672DD_814B_B997_41DB_146430249F97, this.PlayList_97754856_81CB_A895_41B8_61F78C8C9F65, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_9_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 441
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "hfov": 22.46
  }
 ],
 "id": "overlay_9208B30E_8148_B875_41DD_11112517ED9A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.93,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_A3543470_8148_98AD_41C5_A5835E9993F4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028F54F4_100F_0EE6_41A1_C64B44DB8C24",
   "pitch": -25.58,
   "yaw": -135.93,
   "hfov": 10.68,
   "distance": 100
  }
 ],
 "id": "overlay_E037F818_F8D2_E8B4_41D4_588904212997",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.96,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.38
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028CF4F5_100F_0EE6_41AD_37AC6C50B2AF",
   "pitch": -13.38,
   "yaw": 101.96,
   "hfov": 11.52,
   "distance": 100
  }
 ],
 "id": "overlay_E134175C_F8D6_98AC_41EC_F5374660D843",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_5_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -34.79,
   "hfov": 9.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1, this.camera_3E26B7C5_2B23_925E_41BA_330501A468D9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028DA4F6_100F_0EE2_4195_86E4AA968998",
   "pitch": -13.25,
   "yaw": -34.79,
   "hfov": 9.78,
   "distance": 100
  }
 ],
 "id": "overlay_B398DC55_A42F_BBE0_41DA_173BE92B3CE1",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -20.85,
   "hfov": 39.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.42
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.42,
   "yaw": -20.85,
   "hfov": 39.99,
   "distance": 50
  }
 ],
 "id": "overlay_BC0A8603_A42F_9767_41D2_D9DAE13D0563",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 102.62,
   "hfov": 21.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_7_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.85,
   "yaw": 102.62,
   "hfov": 21.11,
   "distance": 50
  }
 ],
 "id": "overlay_61B5A03D_7DCF_53D8_41C7_6680774B5946",
 "data": {
  "label": "JALUR TREKKING MENUJU TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_8_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.79,
   "hfov": 20.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_8_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 161
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.86,
   "yaw": -135.79,
   "hfov": 20.61,
   "distance": 50
  }
 ],
 "id": "overlay_90FF74D2_8157_99EC_41DB_8203D8039A2C",
 "data": {
  "label": "PANTAI GATRA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 23.5,
   "hfov": 21.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.17
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_938C6FE5_8158_A7B7_41BF_6E6A17C97D59, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97250886_81CB_A874_41CC_3038898017C0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 23.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_9_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.17,
   "hfov": 21.38
  }
 ],
 "id": "overlay_93C9DDBE_8158_AB95_41D0_0C2831DE5E2F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.24,
   "hfov": 10.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.84
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_A06EF392_8148_986D_4183_7CA677466574); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0278A4D3_100F_0D25_41A2_27B33B335FF2",
   "pitch": -22.84,
   "yaw": 30.24,
   "hfov": 10.91,
   "distance": 100
  }
 ],
 "id": "overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.33,
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268, this.camera_A39163B2_8148_9FAD_41D5_BB07B5C80D29); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027824D8_100F_0D2E_41A6_E4D024A2E27E",
   "pitch": -12.37,
   "yaw": -170.33,
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_4_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -163.55,
   "hfov": 40.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.66
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66,
   "yaw": -163.55,
   "hfov": 40.2,
   "distance": 50
  }
 ],
 "id": "overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
 "data": {
  "label": "KEMBALI KE POS 1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.3,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.45
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A46848A_7DD9_5CBB_41C6_75C7A7CBCF86, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_8A642EC6_80B9_A9F5_41B2_917963B5819A, this.video_6A277DB1_7DD8_CCE8_41CE_0C48F883B132, this.PlayList_976B4856_81CB_A895_41BC_F586F6EE8251, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -102.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_7_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "hfov": 11.89
  }
 ],
 "id": "overlay_6BC331EB_7DD9_D479_41D1_7BF7F38F583A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_8_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -50.51,
   "hfov": 17.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.93
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6B054335_7DDF_35E8_41DF_2C184FD0F5A5, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_60B6B62C_7DC8_DFF8_41C8_B4B97C7A92F0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -50.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_8_0.png",
      "width": 294,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.93,
   "hfov": 17.37
  }
 ],
 "id": "overlay_8FF5F54A_80B9_98FD_41D4_119622FA33E7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 18.86,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_A079D372_8148_98AD_41B8_AFAA493EB14F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028294F9_100F_0EEE_4197_E2F87A4644F3",
   "pitch": -14.9,
   "yaw": 18.86,
   "hfov": 11.44,
   "distance": 100
  }
 ],
 "id": "overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -163.8,
   "hfov": 9.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_A0750353_8148_98EC_419B_D4480971FBD4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028384FB_100F_0EE2_419C_E7FF1C3B7BC3",
   "pitch": -45.16,
   "yaw": -163.8,
   "hfov": 9.74,
   "distance": 100
  }
 ],
 "id": "overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -148.97,
   "hfov": 25.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -54.08
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.08,
   "yaw": -148.97,
   "hfov": 25.2,
   "distance": 50
  }
 ],
 "id": "overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 21.48,
   "hfov": 20.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_6_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.86,
   "yaw": 21.48,
   "hfov": 20.36,
   "distance": 50
  }
 ],
 "id": "overlay_902DAABE_8159_A995_41BB_085F45B0A789",
 "data": {
  "label": "JALUR TREKKING MENUJU TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595C",
 "id": "viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595CVideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0C9429B_8148_999C_41E0_157193D34569",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38044"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.91,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE, this.camera_A334545C_8148_9895_41D5_6A667F700660); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028134FD_100F_0EE6_417E_F10B382381CE",
   "pitch": -8.3,
   "yaw": 7.91,
   "hfov": 11.72,
   "distance": 50
  }
 ],
 "id": "overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.34,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF, this.camera_658C0811_7DC8_D3A9_41DC_B80C8C337542)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028684FD_100F_0EE6_4183_482C65E31E8A",
   "pitch": -3.96,
   "yaw": -82.34,
   "hfov": 16.4,
   "distance": 100
  }
 ],
 "id": "overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
 "data": {
  "label": "Arrow 05c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_4_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -80.39,
   "hfov": 19.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.87
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_A3027451_8148_98EC_41AB_6D908521E631); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_4_0.png",
      "width": 343,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87,
   "yaw": -80.39,
   "hfov": 19.91,
   "distance": 50
  }
 ],
 "id": "overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_6_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 9.42,
   "hfov": 40.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_6_0.png",
      "width": 755,
      "class": "ImageResourceLevel",
      "height": 390
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8,
   "yaw": 9.42,
   "hfov": 40.91,
   "distance": 50
  }
 ],
 "id": "overlay_631F536A_7DC9_3478_4145_220BA770D174",
 "data": {
  "label": "SPOT FOTO BUKIT TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.23,
   "hfov": 17.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.72
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_939E9830_81C9_A8AC_41B7_1B71243B477C, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97204886_81CB_A874_41D8_7FEC5C5CF1D7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 96.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_7_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 297
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72,
   "hfov": 17.3
  }
 ],
 "id": "overlay_90FF9342_81C8_98EC_4171_3CA301985633",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 73.62,
   "hfov": 17.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.72
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9263C830_81C8_A8AD_41DB_FDCF702E5A97, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97236886_81CB_A874_41BA_A66FD411AE8D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 73.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_8_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 297
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72,
   "hfov": 17.3
  }
 ],
 "id": "overlay_935C15E9_81C9_9BBF_41D4_B3E8DC46D3E5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 153.51,
   "hfov": 16.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.52
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_93C3CEB2_81CB_E9AD_41B1_2899A80583B9, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97223886_81CB_A874_41C3_F4CF49B1CA24, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 153.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_9_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 297
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.52,
   "hfov": 16.72
  }
 ],
 "id": "overlay_9356CAA5_81CB_A9B7_41D8_6D14F014921F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -95.81,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701, this.camera_A02D52E3_8148_99B3_41DC_1159AEAD4D61); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028BE4EC_100F_0EE6_4196_1BF24A95F669",
   "pitch": -22.12,
   "yaw": -95.81,
   "hfov": 10.97,
   "distance": 100
  }
 ],
 "id": "overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 61.93,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_A0534309_8148_987F_41DE_6B2487042B87); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0288E4EE_100F_0EE2_419E_98A6602A73E5",
   "pitch": -17.15,
   "yaw": 61.93,
   "hfov": 11.52,
   "distance": 100
  }
 ],
 "id": "overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 76.87,
   "hfov": 38.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.45
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.45,
   "yaw": 76.87,
   "hfov": 38.12,
   "distance": 50
  }
 ],
 "id": "overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6F",
 "id": "viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6FVideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0F4129E_8148_9995_41D0_7057037CCD6F",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38047"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -69.82,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B, this.camera_A3AD5401_8148_986F_41B9_9DA423640C6B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027054E3_100F_0EE2_41A5_9471A7EBDCA2",
   "pitch": -14.9,
   "yaw": -69.82,
   "hfov": 11.44,
   "distance": 100
  }
 ],
 "id": "overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -161.54,
   "hfov": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.94
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_A38933E1_8148_9FAF_41B0_CD4FA604A6F3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_948A9846_81CB_A8F4_41B1_B0DDE702E8B1",
   "pitch": -17.94,
   "yaw": -161.54,
   "hfov": 11.27,
   "distance": 50
  }
 ],
 "id": "overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.19,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_A3BB13F1_8148_9FAF_41D8_93B69BCD9053); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027694E4_100F_0EE6_4198_FFADA87B0F06",
   "pitch": -10.34,
   "yaw": 83.19,
   "hfov": 9.21,
   "distance": 100
  }
 ],
 "id": "overlay_BE677039_A425_6BA0_41C7_94189E681072",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_5_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.55,
   "hfov": 50,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.16
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_5_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16,
   "yaw": 87.55,
   "hfov": 50,
   "distance": 50
  }
 ],
 "id": "overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_7_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63.56,
   "hfov": 29.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.2
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_7_0.png",
      "width": 572,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2,
   "yaw": -63.56,
   "hfov": 29.6,
   "distance": 50
  }
 ],
 "id": "overlay_666A9E30_7DF9_CFE7_41D8_4BDC9C234957",
 "data": {
  "label": "PANTAI CLUNGUP"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_8_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -157.14,
   "hfov": 35.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_8_0.png",
      "width": 695,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.71,
   "yaw": -157.14,
   "hfov": 35.42,
   "distance": 50
  }
 ],
 "id": "overlay_63084EF7_7DFF_4C68_41C3_F7DE334274E8",
 "data": {
  "label": "TREKKING MANGROVE\u000d"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_9_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -117.61,
   "hfov": 17.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.52
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9495B846_81CB_A8F4_41AB_425997080514",
   "pitch": -16.52,
   "yaw": -117.61,
   "hfov": 17.02,
   "distance": 50
  }
 ],
 "id": "overlay_612424EA_7DF8_DC78_41C8_CAB462D021CD",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_10_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -117.7,
   "hfov": 21.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_10_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.96,
   "yaw": -117.7,
   "hfov": 21.77,
   "distance": 50
  }
 ],
 "id": "overlay_66F03493_7DF9_7CA8_41D0_E3906EDF52B9",
 "data": {
  "label": "PANTAI GATRA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.14,
   "hfov": 23.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.48
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_932E799C_81C8_AB94_41AF_1C5D39B8F7D8, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_92533B97_81C8_AF94_41D8_561B75BE6FEC, this.video_923A91F0_81C8_FBAC_41A2_FC2A1DB63B4C, this.PlayList_976A1856_81CB_A895_41D4_211F3107BCC8, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_11_0.png",
      "width": 407,
      "class": "ImageResourceLevel",
      "height": 386
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.48,
   "hfov": 23.65
  }
 ],
 "id": "overlay_920202C0_81CF_99ED_4195_53CDEDE5A3AC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.59,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.19
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_A05A9323_8148_98B3_41E0_2F0AF4C83124); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027EB4DB_100F_0D22_4160_80BF9F4BD009",
   "pitch": -23.19,
   "yaw": 15.59,
   "hfov": 10.89,
   "distance": 100
  }
 ],
 "id": "overlay_FB7C1530_E908_B746_41EC_107D1228B6D8",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.72,
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.18
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6A76B567_6525_5F9E_41D9_156D317DC354, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7566D5E5_652F_DE92_41CB_38F7195FCFBD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -91.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_3_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.18,
   "hfov": 16.66
  }
 ],
 "id": "overlay_B2C3B96F_A424_BDA0_41D7_5D1FED98E3C2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -46.69,
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.75
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6AC69A02_6524_F596_41A8_CA0F37717BC2, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_756125E6_652F_DE9F_41B3_D985A9DA49E1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -46.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_4_0.png",
      "width": 214,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.75,
   "hfov": 12.6
  }
 ],
 "id": "overlay_B2CA3761_A424_F5A0_41D1_6528FE8CAFC8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_5_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -161.79,
   "hfov": 37.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.46
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_5_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.46,
   "yaw": -161.79,
   "hfov": 37.03,
   "distance": 50
  }
 ],
 "id": "overlay_B2E952D9_A43C_ECE0_41CA_99FA57CF46D5",
 "data": {
  "label": "KEMBALI KE POS 2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_6_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -168.82,
   "hfov": 13.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_A04F9343_8148_98F3_41D3_884483B16841); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027E44DC_100F_0D26_41A4_CF5A5F2374CC",
   "pitch": -19.66,
   "yaw": -168.82,
   "hfov": 13.96,
   "distance": 100
  }
 ],
 "id": "overlay_B3133B4D_A43C_BDE0_41D4_324C43909643",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.35,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.14
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027484E7_100F_0EE2_41A2_9902680656ED",
   "pitch": -13.14,
   "yaw": 17.35,
   "hfov": 11.53,
   "distance": 100
  }
 ],
 "id": "overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.46,
   "hfov": 35.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_1_0.png",
      "width": 644,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04,
   "yaw": 17.46,
   "hfov": 35.39,
   "distance": 50
  }
 ],
 "id": "overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_6_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.06,
   "hfov": 14.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94965846_81CB_A8F4_41D6_56528ED489BD",
   "pitch": -13.25,
   "yaw": 90.06,
   "hfov": 14.67,
   "distance": 50
  }
 ],
 "id": "overlay_60EFB87E_7DCB_5458_41AE_127ADBB20217",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.3,
   "hfov": 21.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_7_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.59,
   "yaw": 88.3,
   "hfov": 21.63,
   "distance": 50
  }
 ],
 "id": "overlay_603EBD3C_7DC9_4DDF_41D2_0AF22456086B",
 "data": {
  "label": "JALUR TREKKING MENUJU TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -146.11,
   "hfov": 15.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.65
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_A3129441_8148_98EF_41C3_1BD8BF1C9580); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_948E8846_81CB_A8F4_41D9_06ED8D0B11A1",
   "pitch": -12.65,
   "yaw": -146.11,
   "hfov": 15.23,
   "distance": 100
  }
 ],
 "id": "overlay_F8F0E502_E908_D74A_41DB_7C5A15A691FA",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 47.23,
   "hfov": 40.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.66
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66,
   "yaw": 47.23,
   "hfov": 40.2,
   "distance": 50
  }
 ],
 "id": "overlay_B3024DB0_A43F_B4A0_4157_67F2AEDECA18",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_7_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.91,
   "hfov": 12.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_A3F08421_8148_98AF_41DF_201FDD57C39F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027CC4DD_100F_0D26_4199_E256969BBC4C",
   "pitch": -12,
   "yaw": 31.91,
   "hfov": 12.53,
   "distance": 100
  }
 ],
 "id": "overlay_B3C9ADD4_A43C_B4E0_41D2_88D851F5E39D",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_8_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -123.39,
   "hfov": 17.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.99
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376, this.camera_A3E0A431_8148_98AF_41D6_C930F7D8D692); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_948E2846_81CB_A8F4_41DA_E141DBB17BFC",
   "pitch": -10.99,
   "yaw": -123.39,
   "hfov": 17.92,
   "distance": 50
  }
 ],
 "id": "overlay_615F3836_7DCB_53E8_41B0_CD92784E5F2C",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_9_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -142.57,
   "hfov": 45.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.32
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_9_0.png",
      "width": 865,
      "class": "ImageResourceLevel",
      "height": 381
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.32,
   "yaw": -142.57,
   "hfov": 45.94,
   "distance": 50
  }
 ],
 "id": "overlay_66DA5BBA_7DC8_D4DB_41D5_499257957079",
 "data": {
  "label": "PANTAI GATRA\u000dPANTAI CLUNGUP\u000dTREKKING MANGROVE"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -117.45,
   "hfov": 22.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_10_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.33,
   "yaw": -117.45,
   "hfov": 22.11,
   "distance": 50
  }
 ],
 "id": "overlay_66C6AE38_7DF9_CFE7_41C8_BFE1676BEB3D",
 "data": {
  "label": "RUMAH BIBIT"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_11_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.01,
   "hfov": 19.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_90CF3AF4_8149_A995_41DB_58DFAC695E5C, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_9757F886_81CB_A874_41C5_72EB705C2A5D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 131.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_11_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 280
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97,
   "hfov": 19.45
  }
 ],
 "id": "overlay_8FFD56CF_80B8_99F3_41D6_109C06E3AFBF",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_12_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.06,
   "hfov": 19.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.99
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_93A08D9D_81C8_AB97_41C3_07BB5359D05B, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97569886_81CB_A874_41DE_61D43CC8B1A6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 89.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_12_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 280
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99,
   "hfov": 19.3
  }
 ],
 "id": "overlay_937BA7EB_81C9_67B3_41D1_F91D08B41311",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0C8429C_8148_9994_41C6_D92724948C88",
 "id": "viewer_uidA0C8429C_8148_9994_41C6_D92724948C88VideoPlayer",
 "class": "VideoPlayer"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37506"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37504"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06843B6F_100D_1BE2_4188_FA1587539796",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06843B6F_100D_1BE2_4188_FA1587539796_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06843B6F_100D_1BE2_4188_FA1587539796_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06843B6F_100D_1BE2_4188_FA1587539796.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37510"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37502"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_0684FB6E_100D_1BE2_4195_727B29955F55",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_0684FB6E_100D_1BE2_4195_727B29955F55_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0684FB6E_100D_1BE2_4195_727B29955F55_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0684FB6E_100D_1BE2_4195_727B29955F55.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37499"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37508"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37501"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button37507"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998",
 "id": "viewer_uidA0F6E29D_8148_9994_41CA_AF5904657998VideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0C8429C_8148_9994_41C6_D92724948C88",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38045"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.11,
   "hfov": 19.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.48
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_A3465480_8148_986D_41D2_BE790E019DCE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028C84F7_100F_0EE2_41A3_71645C74D0C9",
   "pitch": -8.48,
   "yaw": 31.11,
   "hfov": 19.55,
   "distance": 50
  }
 ],
 "id": "overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.9,
   "hfov": 12.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE, this.camera_A3763490_8148_986D_41CC_F3B2FC96380D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_028D34F8_100F_0EEE_4182_24609B7A48CC",
   "pitch": -5.46,
   "yaw": -40.9,
   "hfov": 12.86,
   "distance": 100
  }
 ],
 "id": "overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -26.88,
   "hfov": 41.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.62
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62,
   "yaw": -26.88,
   "hfov": 41.92,
   "distance": 50
  }
 ],
 "id": "overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -156.01,
   "hfov": 21.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.86
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_90F91779_8159_F89C_41D2_93F34B87B500, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_9727A886_81CB_A874_41D3_4E0837440ADB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -156.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_8_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86,
   "hfov": 21.1
  }
 ],
 "id": "overlay_935A111C_8158_B894_41D2_3E3772B25661",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 32.28,
   "hfov": 22.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.56
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_9_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.56,
   "yaw": 32.28,
   "hfov": 22.66,
   "distance": 50
  }
 ],
 "id": "overlay_93273F19_8158_A89F_41BE_6D7112F76105",
 "data": {
  "label": "JALUR TREKKING MENUJU TIGA WARNA"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 154.51,
   "hfov": 26.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.99
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_934FB022_815B_B8AC_41D4_50C6B90C946C, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97261886_81CB_A874_41CD_491B9C55B925, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 154.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_10_0.png",
      "width": 454,
      "class": "ImageResourceLevel",
      "height": 475
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.99,
   "hfov": 26.57
  }
 ],
 "id": "overlay_95E4AF18_8158_A89D_41D6_3BA9FB21055B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0F1C2A0_8148_99AD_41C3_07FD2DC9595C",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38048"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04B",
 "id": "viewer_uidA0CEC297_8148_9993_41DF_615B61A0E04BVideoPlayer",
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 18.86,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_A3CF1411_8148_986F_41DA_199D7919D511); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0261A4C3_100F_0D22_41A9_885DD28004FC",
   "pitch": -18.42,
   "yaw": 18.86,
   "hfov": 11.24,
   "distance": 50
  }
 ],
 "id": "overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.95,
   "hfov": 21.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.46
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6BD561BE_7DD7_D4DB_41D8_C3212420BA9B, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_8A637EC4_80B9_A9F5_41C6_BBBAF92CD2C5, this.video_6B9AF61C_7DD7_3FDF_41BA_70F3CE9A3B35, this.PlayList_9768F856_81CB_A895_41D7_BBB65EA28B2B, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -52.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_5_0.png",
      "width": 368,
      "class": "ImageResourceLevel",
      "height": 380
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.46,
   "hfov": 21.81
  }
 ],
 "id": "overlay_7315C614_7CD8_DFAF_41C5_E4F8CA932CB2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 94.09,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.78
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6A4139EB_7DDB_3478_41D9_1BF20F4B5249, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_60B3762B_7DC8_DFF9_41D0_E2498B9305AC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 94.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_6_0.png",
      "width": 252,
      "class": "ImageResourceLevel",
      "height": 271
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.78,
   "hfov": 14.77
  }
 ],
 "id": "overlay_6B89584F_7DDB_33B9_41A3_B5D92B5ECD32",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_8_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.58,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.03
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6AD3D2E6_7DDB_746B_41D9_D794B6D371BE, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_60B5D62B_7DC8_DFF9_41D2_ED4BAD8E0EB1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 17.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_8_0.png",
      "width": 249,
      "class": "ImageResourceLevel",
      "height": 263
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.03,
   "hfov": 14.77
  }
 ],
 "id": "overlay_8FF6947A_80B8_B89D_41B6_EC2709D3C9E8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -45.7,
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.8
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027644E5_100F_0EE6_41A5_EC5313501185",
   "pitch": -23.8,
   "yaw": -45.7,
   "hfov": 10.83,
   "distance": 100
  }
 ],
 "id": "overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 130.02,
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.94
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_A3DED401_8148_986F_41D2_833709340B45); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_027724E6_100F_0EE2_4191_57E0A96F541A",
   "pitch": -17.94,
   "yaw": 130.02,
   "hfov": 9.49,
   "distance": 100
  }
 ],
 "id": "overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
 "data": {
  "label": "Arrow 05a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.96,
   "hfov": 37.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.95
  }
 ],
 "areas": [
  {
   "toolTip": "KEM",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.95,
   "yaw": 145.96,
   "hfov": 37.95,
   "distance": 50
  }
 ],
 "id": "overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
 "data": {
  "label": "KEMBALI"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 54,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63.17,
   "hfov": 21.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.95
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_90D99FAB_8149_67BC_41C0_8B884534539C, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_935BC144_8149_78F5_41C3_5CC1EBEB444C, this.video_939FDADD_8148_A997_41B4_04AC83CC79EB, this.PlayList_9775F856_81CB_A895_41BE_8635CCF5D65C, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -63.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_6_0.png",
      "width": 356,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95,
   "hfov": 21.07
  }
 ],
 "id": "overlay_905AFCB2_8149_E9AD_41DA_94E61EFA8ADA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.04,
   "hfov": 25.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.44
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_90A39A2C_814F_68B4_41D2_7C4040F716AD, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_97587886_81CB_A874_41D3_AECBA4246FF9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -35.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_7_0.png",
      "width": 433,
      "class": "ImageResourceLevel",
      "height": 335
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.44,
   "hfov": 25.6
  }
 ],
 "id": "overlay_907450C7_814F_F9F3_41CE_7BD5FE657800",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "viewer_uidA0F982A4_8148_99B5_41C1_42828B4E9377",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea38049"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 40,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 40,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 40,
 "paddingBottom": 40,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_7DB20382_7065_343F_4186_6E0B0B3AFF36.png"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 550,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 138,
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 8,
 "shadowSpread": 1,
 "backgroundImageUrl": "skin/Container_22BBC2F4_3075_D173_41B4_71F7A3560C34.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "backgroundImageUrl": "skin/Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255.png"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_0684BB6F_100D_1BE2_41AD_0DD61FF6A9D9",
 "backgroundOpacity": 0,
 "width": 40,
 "overflow": "hidden",
 "children": [
  "this.IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
  "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
  "this.IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container37503"
 },
 "shadow": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027394E2_100F_0EE2_41A5_561E100E96FD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028664FE_100F_0EE2_41AF_12D6D98801C2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028934F0_100F_0EFE_419E_BA319BD7FA4E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_9490F846_81CB_A8F4_41C4_DAF6EE7B3A78",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028F54F4_100F_0EE6_41A1_C64B44DB8C24",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028CF4F5_100F_0EE6_41AD_37AC6C50B2AF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028DA4F6_100F_0EE2_4195_86E4AA968998",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_0278A4D3_100F_0D25_41A2_27B33B335FF2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027824D8_100F_0D2E_41A6_E4D024A2E27E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028294F9_100F_0EEE_4197_E2F87A4644F3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028384FB_100F_0EE2_419C_E7FF1C3B7BC3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028134FD_100F_0EE6_417E_F10B382381CE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_028684FD_100F_0EE6_4183_482C65E31E8A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028BE4EC_100F_0EE6_4196_1BF24A95F669",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_0288E4EE_100F_0EE2_419E_98A6602A73E5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027054E3_100F_0EE2_41A5_9471A7EBDCA2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_948A9846_81CB_A8F4_41B1_B0DDE702E8B1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027694E4_100F_0EE6_4198_FFADA87B0F06",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_9_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_9495B846_81CB_A8F4_41AB_425997080514",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027EB4DB_100F_0D22_4160_80BF9F4BD009",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027E44DC_100F_0D26_41A4_CF5A5F2374CC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027484E7_100F_0EE2_41A2_9902680656ED",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_6_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_94965846_81CB_A8F4_41D6_56528ED489BD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_948E8846_81CB_A8F4_41D9_06ED8D0B11A1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027CC4DD_100F_0D26_4199_E256969BBC4C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_8_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_948E2846_81CB_A8F4_41DA_E141DBB17BFC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028C84F7_100F_0EE2_41A3_71645C74D0C9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_028D34F8_100F_0EEE_4182_24609B7A48CC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 33,
 "levels": [
  {
   "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_0261A4C3_100F_0D22_41A9_885DD28004FC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027644E5_100F_0EE6_41A5_EC5313501185",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027724E6_100F_0EE2_4191_57E0A96F541A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "maxHeight": 80,
 "maxWidth": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "paddingLeft": 0,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minHeight": 30,
 "propagateClick": true,
 "top": "8.46%",
 "paddingRight": 0,
 "height": "14.873%",
 "verticalAlign": "top",
 "minWidth": 40,
 "borderSize": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_B54F32A4_A43D_6CA1_41D7_557DD7B8E37F",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_B44D5A58_A4B7_3D91_41B7_5ECF2F9904C9",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_68C15F96_7B3C_1F67_41C8_493E39833CD6",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_F79C9FC6_E412_CBE9_41B1_E65B02E0E5B3"
 ],
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "26.316%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "maxWidth": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://https://www.youtube.com/@GeoTalkMedia', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "paddingLeft": 50,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "paddingLeft": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 70,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontFamily": "Oswald"
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "paddingLeft": 60,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "3.619%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "5.843%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.showPopupImage(this.ImageResource_65C84151_7D5B_35A9_41CA_FEF259701D61, null, '90%', '90%', this.FadeInEffect_65C85151_7D5B_35A9_41CE_2D21D1D8CB34, this.FadeOutEffect_65C86151_7D5B_35A9_41B1_973A0AE25CB9, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, this.effect_6AF1446C_7D5B_DC78_41D0_8490F6BE28B3, 'showEffect', false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Deskripsi Virtual Field Trip",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_B54F32A4_A43D_6CA1_41D7_557DD7B8E37F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.showPopupImage(this.ImageResource_65F4C151_7D5B_35A9_41CD_8FE78D1651BE, null, '90%', '90%', this.FadeInEffect_65F4D151_7D5B_35A9_41C6_239E88A35BB9, this.FadeOutEffect_65F4E151_7D5B_35A9_41D2_56951C981D4B, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Petunjuk Penggunaan VFT",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_B44D5A58_A4B7_3D91_41B7_5ECF2F9904C9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.showPopupImage(this.ImageResource_65F5D151_7D5B_35A9_41D2_A235933C08EB, null, '90%', '90%', this.FadeInEffect_65F5F151_7D5B_35A9_41C2_57CE05F6BD8F, this.FadeOutEffect_65F51151_7D5B_35A9_41AC_36117EF77B2E, {'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Tujuan Pembelajaran",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_68C15F96_7B3C_1F67_41C8_493E39833CD6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.openLink('http://maps.app.goo.gl/t1LbSEbz8XJYLMMx5', '_blank')",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Lokasi CMC",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "List Panorama",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Berikan Feedback !",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_F79C9FC6_E412_CBE9_41B1_E65B02E0E5B3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false); this.openLink('https://forms.gle/CBFW6DpqJj1tMPLE8', '_blank')",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Berikan Feedback!",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 127,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Ilham Adenan Hidayatullah</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Geotalk Media</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:14px;font-family:'Oswald Regular';\"><I>Clungup Virtual Conservation</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Universitas Negeri Malang</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Jl. Semarang 5 Malang, 65145 Telp. (0341) 551312 Malang, Indonesia.</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "paddingLeft": 0,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "maxWidth": 80,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "paddingLeft": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "paddingLeft": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 30,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "paddingLeft": 0,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "paddingLeft": 0,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 50,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "46%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "paddingLeft": 0,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "maxWidth": 200,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
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

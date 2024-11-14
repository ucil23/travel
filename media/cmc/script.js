(function(){
    var script = {
 "start": "this.playAudioList([this.audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
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
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": [
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.55,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Persimpangan Gatra dan Trekking Mangrove",
 "hfovMin": "135%",
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
 "overlays": [
  "this.overlay_EEE0C026_F8D3_989C_41E4_9DD48E09ECDD",
  "this.overlay_E0F3449D_F8D2_B9AC_41E8_DED63BA6B6E3",
  "this.popup_74C9FA19_6565_75B5_41BE_C983C7B72568",
  "this.overlay_B2DE916A_A427_ADA0_41E1_17BF6F25BC88",
  "this.overlay_BCD933D4_A42B_ACE0_41D2_963CC4F7AD69",
  "this.overlay_BC2FC2A5_A42B_ECA3_41D1_336C80B070B7",
  "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 163.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.23,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  },
  {
   "yaw": -46.9,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.93,
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "distance": 1
  },
  {
   "yaw": 16.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.65,
   "panorama": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA4878E0_DD78_4156_41E0_3CC60E85C441"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_B6B79604_A464_F761_41E2_02467D04CD8D",
   "start": "this.viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C167EB0_2B2F_B235_41B8_63F894460C6C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C167EB0_2B2F_B235_41B8_63F894460C6C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520DVideoPlayer)",
   "player": "this.viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520DVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C167EB0_2B2F_B235_41B8_63F894460C6C",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0DAE8C_2B2F_B2EE_41C0_46119CF2F725, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0DAE8C_2B2F_B2EE_41C0_46119CF2F725, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0DAE8C_2B2F_B2EE_41C0_46119CF2F725",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 43.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38328228_2B2F_ADD6_41AC_089A1CED3DF8",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 134.69,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_7564B672_652B_5A76_41AA_3F30A482C74E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 575
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 21.13,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.07
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
 "autoplay": true,
 "rotationX": 0,
 "yaw": -6.28,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_02087B57_1005_3B22_41AB_F57576A477AA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 32.32,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.57,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
   "start": "this.viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6A6EB0_2B2F_B235_41C5_3359FAC97DDC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6A6EB0_2B2F_B235_41C5_3359FAC97DDC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0VideoPlayer)",
   "player": "this.viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6A6EB0_2B2F_B235_41C5_3359FAC97DDC",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -148.08,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 24.05,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.83,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -46.69,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6AC69A02_6524_F596_41A8_CA0F37717BC2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
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
 "hfov": 12.6,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -7.75
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pos Pantai Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
 "overlays": [
  "this.overlay_E037F818_F8D2_E8B4_41D4_588904212997",
  "this.overlay_E134175C_F8D6_98AC_41EC_F5374660D843",
  "this.overlay_E14310DA_F8D7_79B4_41D9_8C5DA3330FEF",
  "this.popup_77F649E5_657D_569D_4191_6B176FB1A434",
  "this.overlay_B2F19271_A425_AFA0_41D0_6FF5C4F904D5",
  "this.overlay_B398DC55_A42F_BBE0_41DA_173BE92B3CE1",
  "this.overlay_BC0A8603_A42F_9767_41D2_D9DAE13D0563",
  "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -135.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.9,
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -34.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -141.55,
   "panorama": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 105.07,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0299A0E1_100D_051E_41A4_8AF1A4353F18",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0299A0E1_100D_051E_41A4_8AF1A4353F18_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 32.65,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 8.79
},
{
 "initialPosition": {
  "yaw": -148.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CFCAF63_2B2F_B25A_41BB_44F0E670D3A9",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_00A8EAD3_1005_0522_41A6_EE22C43131F3_t.jpg",
 "id": "video_00A8EAD3_1005_0522_41A6_EE22C43131F3",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "ASESSMENT 1",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_00A8EAD3_1005_0522_41A6_EE22C43131F3.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -50.91,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_69F2C327_78BE_DB25_41A2_719A00122678",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 17.18,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 11.16
},
{
 "initialPosition": {
  "yaw": -70.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_321CF164_2B2F_AE5D_41C3_91EA0606B32E",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B19940AC_A425_ACA0_41D3_253F3C44386A",
   "start": "this.viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6A1EB0_2B2F_B235_41C4_3F226B59DF20, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6A1EB0_2B2F_B235_41C4_3F226B59DF20, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83VideoPlayer)",
   "player": "this.viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6A1EB0_2B2F_B235_41C4_3F226B59DF20",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA4878E0_DD78_4156_41E0_3CC60E85C441",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -54.95,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 32.84,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.28,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 40.98,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B2D15DEB_A42C_B4A0_41B2_AED58724AA97",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 16.79,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 17.7,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD",
   "start": "this.viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6B6EB0_2B2F_B235_41C1_E60DBCC4C32A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6B6EB0_2B2F_B235_41C1_E60DBCC4C32A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5VideoPlayer)",
   "player": "this.viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6B6EB0_2B2F_B235_41C1_E60DBCC4C32A",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307_t.jpg",
 "id": "video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "TREKING MANGROVE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 43.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33A2C070_2B2F_AE36_41A9_C4D4972834B6",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B6B79604_A464_F761_41E2_02467D04CD8D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0D6E8E_2B2F_B2EA_41C2_660C3F3D7B67, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0D6E8E_2B2F_B2EA_41C2_660C3F3D7B67, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0D6E8E_2B2F_B2EA_41C2_660C3F3D7B67",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_1ED376F6_1005_0AE2_41A5_B02D00406D05",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0E4E94_2B2F_B2FE_41C3_16F50A71EAFC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0E4E94_2B2F_B2FE_41C3_16F50A71EAFC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0E4E94_2B2F_B2FE_41C3_16F50A71EAFC",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 175.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_322F9123_2B2F_AFDB_4196_507B7D92566F",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_B789DF94_A465_B560_41C2_6C889275F933_t.jpg",
 "id": "video_B789DF94_A465_B560_41C2_6C889275F933",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PANTAI GATRA",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B789DF94_A465_B560_41C2_6C889275F933.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2041D423_2B23_F5DB_41C3_70D9781B95A0",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window561"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -161.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3308EFD8_2B2F_B276_41AA_15714FA5ADAE",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
   "start": "this.viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C17DEB0_2B2F_B235_41B9_6881823FFA92, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C17DEB0_2B2F_B235_41B9_6881823FFA92, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5FVideoPlayer)",
   "player": "this.viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C17DEB0_2B2F_B235_41B9_6881823FFA92",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -85.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_332B7FAA_2B2F_B22A_41BC_EF474E67609A",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
   "start": "this.viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6D3EB0_2B2F_B235_41B8_FEA3224B017D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6D3EB0_2B2F_B235_41B8_FEA3224B017D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1VideoPlayer)",
   "player": "this.viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6D3EB0_2B2F_B235_41B8_FEA3224B017D",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBBA60FD_DD68_4129_41E6_B040B26B6725",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "items": [
  {
   "media": "this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
   "start": "this.viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C174EB0_2B2F_B235_41A7_C115402116AD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C174EB0_2B2F_B235_41A7_C115402116AD, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6VideoPlayer)",
   "player": "this.viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C174EB0_2B2F_B235_41A7_C115402116AD",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_6A438AA9_7B14_26AD_41DA_E6208E933B4A",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_1ED360E0_1005_051E_4195_1E20BDE7C535",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0EAE94_2B2F_B2FE_41C1_0C13213DE3F3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0EAE94_2B2F_B2FE_41C1_0C13213DE3F3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0EAE94_2B2F_B2FE_41C1_0C13213DE3F3",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D_t.jpg",
 "id": "video_B6B79604_A464_F761_41E2_02467D04CD8D",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "RUMAH BIBIT",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 110.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_333B6FC5_2B2F_B25F_4194_CC79F652A62B",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0D0E8E_2B2F_B2EA_4190_B995010960EB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0D0E8E_2B2F_B2EA_4190_B995010960EB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0D0E8E_2B2F_B2EA_4190_B995010960EB",
 "class": "PlayList"
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
 "levels": [
  {
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_0.png",
   "width": 1974,
   "class": "ImageResourceLevel",
   "height": 1110
  },
  {
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 575
  },
  {
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_76502AD4_653D_2AB2_41C1_3C74DB1F1773",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -2.24,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_01B140E6_1005_06E2_41A3_D10E7AADB234",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_01B140E6_1005_06E2_41A3_D10E7AADB234_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 22.12,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.32
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 38.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_381D0271_2B2F_9236_41C5_7D48DF491392",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_786293C3_761D_05AA_41D6_B99F42FFBE46",
 "class": "ImageResource"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_20785413_2B23_F5FA_4182_61E8A6363AF5",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window554"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Rumah Bibit (*)",
 "hfovMin": "135%",
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
 "overlays": [
  "this.overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
  "this.overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
  "this.overlay_B708E68C_A42F_F760_41D0_BC1FB6FC95E1",
  "this.overlay_B6CC5258_A46B_6FE0_41DF_8AFBFEFDA40C",
  "this.popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A",
  "this.overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
  "this.popup_01E4D89C_1007_0526_4198_5E2BEB0258DE",
  "this.overlay_026AC0F2_1005_06FD_417C_1AE9EBCBEC61",
  "this.popup_01B140E6_1005_06E2_41A3_D10E7AADB234",
  "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBBA60FD_DD68_4129_41E6_B040B26B6725"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 110.67,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 575
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 22.63,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.18
},
{
 "thumbnailUrl": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D_t.jpg",
 "id": "video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PENANAMAN BIBIT (RUMAH BIBIT)",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -56.89,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B7512692_A46C_B760_41D9_D1C6B3C2594B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 27.87,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 17.14,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD_t.jpg",
 "id": "video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "Pertanyaan Trekking",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_B789DF94_A465_B560_41C2_6C889275F933",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0C9E8E_2B2F_B2EA_41A0_2E2B72693CC0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0C9E8E_2B2F_B2EA_41A0_2E2B72693CC0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0C9E8E_2B2F_B2EA_41A0_2E2B72693CC0",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 85.17,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_77BD0C0B_652D_2D95_41C9_4355D5292F53",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 39.39,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.57
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Trekking Mangrove",
 "hfovMin": "135%",
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
 "overlays": [
  "this.popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13",
  "this.popup_76336174_656B_767C_41CF_C00C6053746E",
  "this.overlay_B2C58137_A424_ADAF_41D8_68DB870EA77C",
  "this.overlay_B36D457C_A424_B5A0_41D8_468D4501D926",
  "this.overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
  "this.overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
  "this.overlay_03B58A2D_1007_0567_418F_AC9B2E60D4C8",
  "this.popup_03480AA4_1007_0565_4119_39B3C030EF40",
  "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 109.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.81,
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2049A42C_2B23_F62E_41BD_BAFA17CD2631",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996AC"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window569"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB_t.jpg",
 "id": "video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "SUASANA CMC ",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_20448423_2B23_F5DB_41AE_197889746ED4",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window566"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0C1E8E_2B2F_B2EA_41C3_9F27A8BDD053, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0C1E8E_2B2F_B2EA_41C3_9F27A8BDD053, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0C1E8E_2B2F_B2EA_41C3_9F27A8BDD053",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_0.png",
   "width": 1974,
   "class": "ImageResourceLevel",
   "height": 1110
  },
  {
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 575
  },
  {
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_775E6888_6565_D693_41D7_716EB1DA683A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_786133C9_761D_05A6_41D2_39454E67EB31",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -148.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33E050C6_2B2F_AE5A_419A_5EA1D56AF98E",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_0.png",
   "width": 1974,
   "class": "ImageResourceLevel",
   "height": 1110
  },
  {
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 575
  },
  {
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_7863C3C6_761D_05AA_41A6_EFA7A29DC9F4",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "POS 2 (*)",
 "hfovMin": "135%",
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
 "overlays": [
  "this.overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
  "this.overlay_B2F91229_A42B_AFA0_41DE_E91D0DF1F9B2",
  "this.overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
  "this.overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
  "this.overlay_1F7F97DC_0C8E_7620_41AA_F2AE0D75FCB4",
  "this.popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE",
  "this.popup_000E1F80_1004_FB1E_41AE_C0FDD5EF103C",
  "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -170.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.86,
   "panorama": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "distance": 1
  },
  {
   "yaw": 30.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.82,
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CB9F6242_DD68_415B_41D1_FBB643A309E1"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 43.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3808723F_2B2F_922B_4185_E158F50F6C78",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -39.92,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_01E4D89C_1007_0526_4198_5E2BEB0258DE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 22.06,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -7.58,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_00A8EAD3_1005_0522_41A6_EE22C43131F3.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Menuju Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
 "overlays": [
  "this.overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
  "this.overlay_B70CE923_A45B_7DA0_41D0_9C5F088CAC6B",
  "this.popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19",
  "this.overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
  "this.overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
  "this.overlay_033F51DE_100D_0722_4194_185233A3F486",
  "this.popup_0299A0E1_100D_051E_41A4_8AF1A4353F18",
  "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -163.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.11,
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "distance": 1
  },
  {
   "yaw": 18.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 51.63,
   "panorama": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -161.14,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3316BFFD_2B2F_B22E_41C3_D40FFDD45B9F",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_1ED376F6_1005_0AE2_41A5_B02D00406D05",
   "start": "this.viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C691EB0_2B2F_B235_41A3_298E1E155818, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C691EB0_2B2F_B235_41A3_298E1E155818, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346VideoPlayer)",
   "player": "this.viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C691EB0_2B2F_B235_41A3_298E1E155818",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 30.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33746029_2B2F_ADD7_4183_70EA636D70B1",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715_t.jpg",
 "id": "video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "ASESSMENT 2",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -28.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C851F33_2B2F_B23B_41BA_8DDCF178B839",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 155.26,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 575
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27.79,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.2
},
{
 "thumbnailUrl": "media/video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B_t.jpg",
 "id": "video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PANTAI GATRA",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -67.44,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_03480AA4_1007_0565_4119_39B3C030EF40",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 22.45,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.21,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 75.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_776477FF_78B2_DB26_41DB_617F38CA7FB9",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 24.52,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.41
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Menuju Rumah Bibit",
 "hfovMin": "135%",
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
 "overlays": [
  "this.overlay_EB867347_F852_989C_41ED_ECCFAF091C32",
  "this.overlay_B67E7717_A46F_9560_41E1_5E419BB36AFB",
  "this.popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1",
  "this.overlay_BEDBE532_A424_F5A0_41D9_A07158411CD1",
  "this.overlay_BC08300E_A424_AB60_4191_8475722E34C5",
  "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -136.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.07,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBBFCBB5_DD68_4738_41E5_54543E0BA85F"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0D2E8E_2B2F_B2EA_41BF_B9C50D6EB334, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0D2E8E_2B2F_B2EA_41BF_B9C50D6EB334, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0D2E8E_2B2F_B2EA_41BF_B9C50D6EB334",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 109.7,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 10.06,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.67,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_00A8EAD3_1005_0522_41A6_EE22C43131F3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0F3E8E_2B2F_B2EA_4189_AD19DD2DAC2C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0F3E8E_2B2F_B2EA_4189_AD19DD2DAC2C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0F3E8E_2B2F_B2EA_4189_AD19DD2DAC2C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -118.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3344E041_2B2F_AE56_41B8_76877493D3E1",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA6DD2B3_DD78_C139_41D6_103E1B265B1A",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": 109.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C9ECF44_2B2F_B25E_41A5_B3673151F91B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33DF710B_2B2F_AFEB_419F_39C7488DE7BE",
 "class": "PanoramaCamera"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_21E6233C_2B23_F22D_41A9_0B2F2A43A97A",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window520"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera"
  },
  {
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera"
  },
  {
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera"
  },
  {
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera"
  },
  {
   "media": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera"
  },
  {
   "media": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera"
  },
  {
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera"
  },
  {
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera"
  },
  {
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera"
  },
  {
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera"
  },
  {
   "media": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera"
  },
  {
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera"
  },
  {
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera"
  },
  {
   "media": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera"
  },
  {
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera"
  },
  {
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera"
  },
  {
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera"
  },
  {
   "media": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera"
  },
  {
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera"
  },
  {
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_01B140E6_1005_06E2_41A3_D10E7AADB234_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_01B140E6_1005_06E2_41A3_D10E7AADB234_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_01B140E6_1005_06E2_41A3_D10E7AADB234_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_1D546FFF_1041_9D54_4198_5C84E993251E",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
   "start": "this.viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C682EB0_2B2F_B235_41BA_109D2FDE71C5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C682EB0_2B2F_B235_41BA_109D2FDE71C5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47AVideoPlayer)",
   "player": "this.viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C682EB0_2B2F_B235_41BA_109D2FDE71C5",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_B19940AC_A425_ACA0_41D3_253F3C44386A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0CCE8E_2B2F_B2EA_41C3_D1E0B8B72974, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0CCE8E_2B2F_B2EA_41C3_D1E0B8B72974, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0CCE8E_2B2F_B2EA_41C3_D1E0B8B72974",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Masuk Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
 "overlays": [
  "this.overlay_E0CCFD3E_F8DE_A8EC_41D3_7CEDA9AEB9FC",
  "this.overlay_B7555626_A46C_F7A0_41E2_99ACB983D166",
  "this.popup_B7512692_A46C_B760_41D9_D1C6B3C2594B",
  "this.overlay_BC04747C_A42C_EBA0_41E2_FD62EFE9B4B2",
  "this.overlay_BC8292FB_A42C_ACA0_41E0_20753CFF3D3C",
  "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 70.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 16.94,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  },
  {
   "yaw": -141.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -34.79,
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA6DD2B3_DD78_C139_41D6_103E1B265B1A"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 113.94,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_02581664_103B_0DE6_41A7_0C0737926D1A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 29.88,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.84,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_008B9799_1005_0B2E_41AD_FB4E7C6928D0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pantai Clungup (Surut)",
 "hfovMin": "135%",
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
 "overlays": [
  "this.overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
  "this.popup_74A27224_652B_D593_41D2_80E0F3EBDD8B",
  "this.overlay_B2A74151_A427_ADE0_41D7_AC4B3E6480C5",
  "this.overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
  "this.overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
  "this.overlay_03245C71_103D_3DFE_41AF_C0F414B57869",
  "this.popup_02D7D2FC_103D_0AE6_41A6_2BECB41175BF",
  "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 130.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -69.82,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  },
  {
   "panorama": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
   "start": "this.viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6AEEB0_2B2F_B235_41C5_0DFF271173E8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6AEEB0_2B2F_B235_41C5_0DFF271173E8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894VideoPlayer)",
   "player": "this.viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6AEEB0_2B2F_B235_41C5_0DFF271173E8",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0_t.jpg",
 "id": "video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PULAU SEMPU",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_20402423_2B23_F5DB_41C4_1C980CBE23BA",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47A"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window563"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -163.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3380909C_2B2F_AEEE_41B7_8B6E19DD6ADF",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_1ED360E0_1005_051E_4195_1E20BDE7C535_t.jpg",
 "id": "video_1ED360E0_1005_051E_4195_1E20BDE7C535",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "ASESSMENT 5",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED360E0_1005_051E_4195_1E20BDE7C535.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -90.05,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_74A27224_652B_D593_41D2_80E0F3EBDD8B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 575
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.77,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 17.78
},
{
 "thumbnailUrl": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D_t.jpg",
 "id": "video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "AKSES JALAN KAKI",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -10.16,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_02D7D2FC_103D_0AE6_41A6_2BECB41175BF",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 16.74,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 18.03,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED376F6_1005_0AE2_41A5_B02D00406D05.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F_t.jpg",
 "id": "video_B4873789_A42C_9560_41C9_ABCDD641B19F",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PENGANTAR",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -164.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33B2F07C_2B2F_AE2D_41B1_E4855C86EB53",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_755352E0_61E8_492D_41C3_ADBCC350A60E",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 133.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_326A517A_2B2F_AE2A_41C3_B42F93554F63",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_B4873789_A42C_9560_41C9_ABCDD641B19F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0DEE8C_2B2F_B2EE_419C_D8DA2179B561, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0DEE8C_2B2F_B2EE_419C_D8DA2179B561, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0DEE8C_2B2F_B2EE_419C_D8DA2179B561",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -117.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30.36,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.57
},
{
 "items": [
  {
   "media": "this.video_1ED4D38F_1005_0B22_4198_8ED1220F5C60",
   "start": "this.viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C143EB0_2B2F_B235_41C1_5382AF0689C2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C143EB0_2B2F_B235_41C1_5382AF0689C2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0VideoPlayer)",
   "player": "this.viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C143EB0_2B2F_B235_41C1_5382AF0689C2",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBBFCBB5_DD68_4738_41E5_54543E0BA85F",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_3560965A_25D9_4F80_41B3_A88F6AB9AD22",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": -109.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3355105A_2B2F_AE75_41B3_1632C71E358F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Menuju CMC",
 "hfovMin": "135%",
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
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
 "adjacentPanoramas": [
  {
   "yaw": 15.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.91,
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "distance": 1
  },
  {
   "yaw": -168.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 30.24,
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CB9A6976_DD68_C33B_41EA_791527D2031C"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pos Pantai Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
 "overlays": [
  "this.overlay_E44716C9_F8F3_9994_41E7_AF03A9F517E0",
  "this.overlay_B30FBE6C_A425_97A0_41DC_B3F60E050225",
  "this.popup_B22937C5_A425_F4E0_41CF_9D103D5812DB",
  "this.overlay_BD6E543E_A42C_ABA0_41E3_03A5887E6442",
  "this.overlay_BC37A4BD_A42C_94A0_41C8_578B02A492A6",
  "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 51.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.86,
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "distance": 1
  },
  {
   "yaw": -70.53,
   "class": "AdjacentPanorama",
   "backwardYaw": -82.34,
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA0BAF9A_DD79_BFEB_41E7_9F7D72804A5A"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Spot Foto Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
 "overlays": [
  "this.overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
  "this.overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
  "this.overlay_B6313F3D_A425_95A0_41E4_3187489BAE86",
  "this.overlay_B237C7DE_A424_94E0_41E0_3727C9190848",
  "this.popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7",
  "this.overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
  "this.popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44",
  "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 151.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.91,
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA0BAF9A_DD79_BFEB_41E7_9F7D72804A5A",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "items": [
  {
   "media": "this.video_00A8EAD3_1005_0522_41A6_EE22C43131F3",
   "start": "this.viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C16CEB0_2B2F_B235_41C3_436D7CD59B79, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C16CEB0_2B2F_B235_41C3_436D7CD59B79, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030VideoPlayer)",
   "player": "this.viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C16CEB0_2B2F_B235_41C3_436D7CD59B79",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_B4873789_A42C_9560_41C9_ABCDD641B19F",
   "start": "this.viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C158EB0_2B2F_B235_41BF_BD1EC056A899, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C158EB0_2B2F_B235_41BF_BD1EC056A899, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204VideoPlayer)",
   "player": "this.viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C158EB0_2B2F_B235_41BF_BD1EC056A899",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 84.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CDACF90_2B2F_B2F6_41B4_39815DBECD88",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A_t.jpg",
 "id": "video_B19940AC_A425_ACA0_41D3_253F3C44386A",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PANTAI TIGA WARNA",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C_t.jpg",
 "id": "video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PANTAI CLUNGUP",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Masuk Trekking Mangrove",
 "hfovMin": "135%",
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
 "overlays": [
  "this.overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
  "this.overlay_B685ACD2_A467_94E0_41D7_5C819ED05F38",
  "this.popup_B7441B0B_A464_9D60_41B6_C28282228370",
  "this.overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
  "this.overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
  "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -95.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.91,
   "panorama": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "distance": 1
  },
  {
   "yaw": 61.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.9,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -172.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_380FC24F_2B2F_926A_418D_12F1CD4F21BF",
 "class": "PanoramaCamera"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_207CA417_2B23_F5FA_41BC_A5B89076004C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520D"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window558"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_02C7D54A_100F_0F22_41AF_E89ABC1F89DE",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 139.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3804F259_2B2F_9276_41BB_1ED8115637BA",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pantai Tiga Warna",
 "hfovMin": "135%",
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
 "overlays": [
  "this.overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
  "this.popup_77BD0C0B_652D_2D95_41C9_4355D5292F53",
  "this.overlay_B2DEEC61_A424_BBA0_41C1_A97E43C30EF7",
  "this.overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
  "this.overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
  "this.overlay_03748302_100B_0B22_4176_5C897719CD4A",
  "this.popup_0287FC0C_100B_1D25_418A_1D009D266A68",
  "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 7.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.6,
   "panorama": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "distance": 1
  },
  {
   "yaw": -82.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.53,
   "panorama": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Tugu CMC",
 "hfovMin": "135%",
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
 "overlays": [
  "this.overlay_F8F0E502_E908_D74A_41DB_7C5A15A691FA",
  "this.popup_7564B672_652B_5A76_41AA_3F30A482C74E",
  "this.popup_776477FF_78B2_DB26_41DB_617F38CA7FB9",
  "this.overlay_B2C2C86D_A425_7BA0_41C7_978BC373C353",
  "this.overlay_B2A1659A_A425_9560_41D2_25539FB6AF0D",
  "this.overlay_B3024DB0_A43F_B4A0_4157_67F2AEDECA18",
  "this.overlay_B3C9ADD4_A43C_B4E0_41D2_88D851F5E39D",
  "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -136.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -136.45,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  },
  {
   "yaw": 31.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 15.59,
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -76.36,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_74C9FA19_6565_75B5_41BE_C983C7B72568",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 24.67,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -7.61
},
{
 "levels": [
  {
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_6A7E1AAB_7B14_26AD_41D0_30F19C1F0A21",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/video_1ED4D38F_1005_0B22_4198_8ED1220F5C60_t.jpg",
 "id": "video_1ED4D38F_1005_0B22_4198_8ED1220F5C60",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "mengapa pos 2",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED4D38F_1005_0B22_4198_8ED1220F5C60.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -138.41,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_76336174_656B_767C_41CF_C00C6053746E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 19.26,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -25.7
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_207E7415_2B23_F5FE_41B7_8D81A2B342AB",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window556"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
   "start": "this.viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6BCEB0_2B2F_B235_41B7_CD774F2DC15C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6BCEB0_2B2F_B235_41B7_CD774F2DC15C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00EVideoPlayer)",
   "player": "this.viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00EVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6BCEB0_2B2F_B235_41B7_CD774F2DC15C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -149.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33FE20DD_2B2F_AE6E_41B8_4968E197A777",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 44.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_320D214F_2B2F_AE6B_41BD_14A12A7A3AE8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -167.68,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 17.94,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.93,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -115.55,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 32.3,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.08,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_77589886_6565_D69F_41BC_14158ABEE1A2",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2042C423_2B23_F5DB_4185_871E8A543CE4",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window560"
 },
 "titleFontFamily": "Arial"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 18.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 33.78,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 16.26
},
{
 "initialPosition": {
  "yaw": 11.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3366D012_2B2F_ADFA_41C5_429CDC547CDB",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -67.82,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B22937C5_A425_F4E0_41CF_9D103D5812DB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 28.53,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 24.8,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "*Persimpangan Clungup dan Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
 "overlays": [
  "this.overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
  "this.overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
  "this.overlay_B6B7953C_A47D_B5A0_41DB_38EB004F6C19",
  "this.popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D",
  "this.overlay_BE677039_A425_6BA0_41C7_94189E681072",
  "this.overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
  "this.overlay_1F332214_0C87_CE20_41A3_712072BB8136",
  "this.popup_02087B57_1005_3B22_41AB_F57576A477AA",
  "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -69.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.02,
   "panorama": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "distance": 1
  },
  {
   "yaw": -149.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.55,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  },
  {
   "yaw": 83.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -4.25,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9F6242_DD68_415B_41D1_FBB643A309E1",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "items": [
  {
   "media": "this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0FAE8E_2B2F_B2EA_419A_A4C187A128D4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0FAE8E_2B2F_B2EA_419A_A4C187A128D4, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0FAE8E_2B2F_B2EA_419A_A4C187A128D4",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0E3E94_2B2F_B2FE_41A6_011ABDF536A2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0E3E94_2B2F_B2FE_41A6_011ABDF536A2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0E3E94_2B2F_B2FE_41A6_011ABDF536A2",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
   "start": "this.viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C69FEB0_2B2F_B235_41A6_290019803CBE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C69FEB0_2B2F_B235_41A6_290019803CBE, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296EVideoPlayer)",
   "player": "this.viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296EVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C69FEB0_2B2F_B235_41A6_290019803CBE",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2040C423_2B23_F5DB_41B6_19EA113C3329",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window562"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": 9.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CEF2F53_2B2F_B27A_41C3_7506D418F043",
 "class": "PanoramaCamera"
},
{
 "duration": 500,
 "id": "FadeOutEffect_3560665A_25D9_4F80_41A3_2F6C9422F3EE",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "items": [
  {
   "media": "this.video_1ED4D38F_1005_0B22_4198_8ED1220F5C60",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0E6E94_2B2F_B2FE_41A0_4B41DC819430, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0E6E94_2B2F_B2FE_41A0_4B41DC819430, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0E6E94_2B2F_B2FE_41A0_4B41DC819430",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97.ogg",
  "mp3Url": "media/audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97.mp3",
  "class": "AudioResource"
 },
 "id": "audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9A6976_DD68_C33B_41EA_791527D2031C",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "items": [
  {
   "media": "this.video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0EEE94_2B2F_B2FE_4190_58AAB6AF68B8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0EEE94_2B2F_B2FE_4190_58AAB6AF68B8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0EEE94_2B2F_B2FE_4190_58AAB6AF68B8",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeInEffect_30DEE3B0_25D9_4480_41BF_7653826DC9BC",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -31.89,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_0287FC0C_100B_1D25_418A_1D009D266A68",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 38.82,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 10.35,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED360E0_1005_051E_4195_1E20BDE7C535.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_008B9799_1005_0B2E_41AD_FB4E7C6928D0",
   "start": "this.viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C68AEB0_2B2F_B235_41C2_1690BC64C951, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C68AEB0_2B2F_B235_41C2_1690BC64C951, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409VideoPlayer)",
   "player": "this.viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C68AEB0_2B2F_B235_41C2_1690BC64C951",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBA896A2_DD68_C1DB_41CD_1915339ED097",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": 145.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3390A0B2_2B2F_AE3A_41C0_3589728F1F65",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_1ED376F6_1005_0AE2_41A5_B02D00406D05_t.jpg",
 "id": "video_1ED376F6_1005_0AE2_41A5_B02D00406D05",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "Pertanyaan Clungup Surut",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED376F6_1005_0AE2_41A5_B02D00406D05.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_204BF423_2B23_F5DB_41C0_FB8109E797ED",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window567"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 500,
 "id": "FadeInEffect_355F665E_25D9_4F80_41C1_73EECF5D11BC",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": -49.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33CE10EF_2B2F_AE2B_41B0_A8F52755384B",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -63.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.36,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.26
},
{
 "thumbnailUrl": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD_t.jpg",
 "id": "video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "PANTAI GATRA (AWAL)",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_207D6415_2B23_F5FE_419E_4F53C52D6462",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window557"
 },
 "titleFontFamily": "Arial"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -91.72,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6A76B567_6525_5F9E_41D9_156D317DC354",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
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
 "hfov": 16.66,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -8.18
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Persimpangan Rumah Bibit dan Clungup Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
 "overlays": [
  "this.overlay_FB05D263_E908_ADCA_41E5_1BD89DC5C896",
  "this.overlay_ED294DE5_F873_AB9F_41E9_7871CBE0520A",
  "this.popup_69F2C327_78BE_DB25_41A2_719A00122678",
  "this.popup_B2D15DEB_A42C_B4A0_41B2_AED58724AA97",
  "this.overlay_B378122D_A42C_AFA0_41C8_371854F6E874",
  "this.overlay_B2D43449_A425_6BE0_41E3_A5048C1E8951",
  "this.overlay_BD4C927D_A43D_AFA0_41B2_1CC9AF53FFBD",
  "this.overlay_BDA3E416_A43D_6B60_41E3_391B2FE54DA1",
  "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -4.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 83.19,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  },
  {
   "yaw": -136.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -136.06,
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "distance": 1
  },
  {
   "yaw": 94.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -136.29,
   "panorama": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBA896A2_DD68_C1DB_41CD_1915339ED097"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0CAE8E_2B2F_B2EA_41C4_9783C2B171FA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0CAE8E_2B2F_B2EA_41C4_9783C2B171FA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0CAE8E_2B2F_B2EA_41C4_9783C2B171FA",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E_0_0.png",
   "width": 2640,
   "class": "ImageResourceLevel",
   "height": 1485
  },
  {
   "url": "media/popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_1D5EC010_1041_82AC_41A3_8236259808DE",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 92.05,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 14.34,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.99
},
{
 "levels": [
  {
   "url": "media/zoomImage_2A69F47F_25DF_4C7F_41C0_65455F8FC98E_0_0.png",
   "width": 2160,
   "class": "ImageResourceLevel",
   "height": 1215
  },
  {
   "url": "media/zoomImage_2A69F47F_25DF_4C7F_41C0_65455F8FC98E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_2A69F47F_25DF_4C7F_41C0_65455F8FC98E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_2A69F47F_25DF_4C7F_41C0_65455F8FC98E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_3560A65A_25D9_4F80_41BA_9938F6AEBAB5",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -88.29,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 23.53,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 17.26,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0C4E8E_2B2F_B2EA_41C0_47625C3C1A7E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0C4E8E_2B2F_B2EA_41C0_47625C3C1A7E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0C4E8E_2B2F_B2EA_41C0_47625C3C1A7E",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_207F5413_2B23_F5FA_41BD_BB369843D330",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5F"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window555"
 },
 "titleFontFamily": "Arial"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2048442C_2B23_F62E_41A5_AEC8980D892C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window570"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0F8E8E_2B2F_B2EA_416E_B81AB779E8A0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0F8E8E_2B2F_B2EA_416E_B81AB779E8A0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0F8E8E_2B2F_B2EA_416E_B81AB779E8A0",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": 97.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33190FEB_2B2F_B22B_417F_69C9F0D8E327",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "POS 1",
 "hfovMin": "121%",
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
 "overlays": [
  "this.overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
  "this.overlay_75476C85_6198_F9F4_41C7_78D9B05B0517",
  "this.popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C",
  "this.popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644",
  "this.overlay_B4CCB425_A43C_EBA0_41E0_5F3E29718DAC",
  "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 18.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.33,
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg",
 "hfovMax": 137,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0FEE8E_2B2F_B2EA_41B7_5E5A5065530D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0FEE8E_2B2F_B2EA_41B7_5E5A5065530D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0FEE8E_2B2F_B2EA_41B7_5E5A5065530D",
 "class": "PlayList"
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetHfov": 128,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0
  }
 ]
},
{
 "levels": [
  {
   "url": "media/popup_0299A0E1_100D_051E_41A4_8AF1A4353F18_0_0.png",
   "width": 2640,
   "class": "ImageResourceLevel",
   "height": 1485
  },
  {
   "url": "media/popup_0299A0E1_100D_051E_41A4_8AF1A4353F18_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0299A0E1_100D_051E_41A4_8AF1A4353F18_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0299A0E1_100D_051E_41A4_8AF1A4353F18_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_1D60B012_1041_82AC_417B_D4FF84FACCF2",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -60.03,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B7441B0B_A464_9D60_41B6_C28282228370",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 29.16,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 16.51,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 162.9,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 14.27,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.27,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_30DED3B0_25D9_4480_41C2_1AE2D78A692F",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonMoveRight": "this.IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "buttonMoveUp": "this.IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveDown": "this.IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveLeft": "this.IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonPlayRight": "this.IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A",
 "buttonPlayLeft": "this.IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonZoomIn": "this.IconButton_06843B6F_100D_1BE2_4188_FA1587539796",
 "buttonZoomOut": "this.IconButton_0684FB6E_100D_1BE2_4195_727B29955F55"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_204AF428_2B23_F5D6_4193_50F0F6F75B0C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window568"
 },
 "titleFontFamily": "Arial"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 47.37,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_77F649E5_657D_569D_4191_6B176FB1A434",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 26.22,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 21.28
},
{
 "thumbnailUrl": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45_t.jpg",
 "id": "video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "BERBAGI CERITA",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pantai Gatra",
 "hfovMin": "135%",
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
 "overlays": [
  "this.overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
  "this.popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B",
  "this.overlay_B35E209A_A424_AB60_41CA_4EFE3713F6FA",
  "this.overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
  "this.overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
  "this.popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E",
  "this.overlay_037B62FE_1005_0AE2_41AA_1640971FAD8C",
  "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 31.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -163.8,
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "distance": 1
  },
  {
   "yaw": -40.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -135.93,
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -128.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CCD3F83_2B2F_B2DB_4193_E9106FEF5CDE",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "levels": [
  {
   "url": "media/zoomImage_35FB9FC8_25D9_5C80_4197_01D384056B5F_0_0.png",
   "width": 2160,
   "class": "ImageResourceLevel",
   "height": 1215
  },
  {
   "url": "media/zoomImage_35FB9FC8_25D9_5C80_4197_01D384056B5F_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_35FB9FC8_25D9_5C80_4197_01D384056B5F_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_35FB9FC8_25D9_5C80_4197_01D384056B5F_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_30DF03B0_25D9_4480_41AA_185A99EBE798",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pantai Clungup (Mulai Pasang)",
 "hfovMin": "135%",
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
 "overlays": [
  "this.overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
  "this.overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
  "this.overlay_B67764B4_A42D_74A0_41E0_2FDF87F7838D",
  "this.overlay_B6F8328A_A47B_AF60_41DA_A89DA44D3A2A",
  "this.popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB",
  "this.popup_02581664_103B_0DE6_41A7_0C0737926D1A",
  "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_20471423_2B23_F5DB_41BB_C3B400EF9454",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00E"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window564"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "items": [
  {
   "media": "this.video_1ED360E0_1005_051E_4195_1E20BDE7C535",
   "start": "this.viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996ACVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C6DAEB0_2B2F_B235_41C3_5650FA222001, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C6DAEB0_2B2F_B235_41C3_5650FA222001, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996ACVideoPlayer)",
   "player": "this.viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996ACVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C6DAEB0_2B2F_B235_41C3_5650FA222001",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeOutEffect_355F565E_25D9_4F80_419E_28198A1AB27E",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "levels": [
  {
   "url": "media/popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44_0_0.png",
   "width": 2640,
   "class": "ImageResourceLevel",
   "height": 1485
  },
  {
   "url": "media/popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_1D645017_1041_82D4_41A2_A5F44F706F83",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_0.png",
   "width": 2400,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_786243C5_761D_05AE_41B1_A0AFD37EACCB",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A",
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -45.5,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_000E1F80_1004_FB1E_41AE_C0FDD5EF103C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 14.6,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.89,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_1ED4D38F_1005_0B22_4198_8ED1220F5C60.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -96.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_383C5212_2B2F_ADFA_41A0_6BE5ADE34A90",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_008B9799_1005_0B2E_41AD_FB4E7C6928D0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3C0F4E8E_2B2F_B2EA_41BE_C15DE665BAF8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3C0F4E8E_2B2F_B2EA_41BE_C15DE665BAF8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_3C0F4E8E_2B2F_B2EA_41BE_C15DE665BAF8",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_20434417_2B23_F5FA_41C3_7EB448D770E4",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296E"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window559"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 16.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_323D2138_2B2F_AE36_41AC_4E11A8867DF2",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_0.png",
   "width": 1974,
   "class": "ImageResourceLevel",
   "height": 1110
  },
  {
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 575
  },
  {
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_7745A885_6565_D692_41D9_4DFC388CBEA4",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_008B9799_1005_0B2E_41AD_FB4E7C6928D0_t.jpg",
 "id": "video_008B9799_1005_0B2E_41AD_FB4E7C6928D0",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "ASESMENT 3",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_008B9799_1005_0B2E_41AD_FB4E7C6928D0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/zoomImage_2A55F187_25D9_C480_41A8_3A123FD79B12_0_0.png",
   "width": 2160,
   "class": "ImageResourceLevel",
   "height": 1215
  },
  {
   "url": "media/zoomImage_2A55F187_25D9_C480_41A8_3A123FD79B12_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/zoomImage_2A55F187_25D9_C480_41A8_3A123FD79B12_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_2A55F187_25D9_C480_41A8_3A123FD79B12_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_355F765E_25D9_4F80_41A1_F5E204187EDE",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera"
  },
  {
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera"
  },
  {
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera"
  },
  {
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera"
  },
  {
   "media": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera"
  },
  {
   "media": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera"
  },
  {
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera"
  },
  {
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera"
  },
  {
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera"
  },
  {
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera"
  },
  {
   "media": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera"
  },
  {
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera"
  },
  {
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera"
  },
  {
   "media": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera"
  },
  {
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera"
  },
  {
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera"
  },
  {
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera"
  },
  {
   "media": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera"
  },
  {
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera"
  },
  {
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2045C423_2B23_F5DB_41AC_44CA7177CDB3",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "titlePaddingRight": 5,
 "headerPaddingLeft": 10,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "headerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
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
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5"
 ],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
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
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyPaddingRight": 0,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window565"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715",
   "start": "this.viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3C699EB0_2B2F_B235_41BA_BA2C97800897, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3C699EB0_2B2F_B235_41BA_BA2C97800897, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5VideoPlayer)",
   "player": "this.viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_3C699EB0_2B2F_B235_41BA_BA2C97800897",
 "class": "PlayList"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
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
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
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
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 34,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "layout": "absolute",
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
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
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
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
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
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
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
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
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
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
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
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "backgroundImageUrl": "skin/Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC.png",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
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
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "hidden",
 "width": "31.064%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "bottom": "5.59%",
 "height": "21.722%",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "horizontal",
 "scrollBarWidth": 10,
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
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent4695"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage4696"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "paddingRight": 5,
 "paddingLeft": 5,
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
 "pressedIconColor": "#888888",
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
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton4697"
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
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "click": "if(this.getGlobalAudio(this.audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A); } else { var src = this.playGlobalAudio(this.audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06841B6F_100D_1BE2_4197_932B4BC932FE",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
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
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.18,
   "yaw": 16.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1, this.camera_3355105A_2B2F_AE75_41B3_1632C71E358F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027574E9_100F_0EEE_41AD_0B72C36E5AFC",
   "pitch": -19.21,
   "hfov": 11.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 16.94
  }
 ],
 "id": "overlay_EEE0C026_F8D3_989C_41E4_9DD48E09ECDD",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.26,
   "yaw": -46.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_3344E041_2B2F_AE56_41B8_76877493D3E1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028AA4EA_100F_0EE2_41A2_5793A12016D5",
   "pitch": -17.97,
   "hfov": 11.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -46.9
  }
 ],
 "id": "overlay_E0F3449D_F8D2_B9AC_41E8_DED63BA6B6E3",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.67,
   "yaw": -76.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_74C9FA19_6565_75B5_41BE_C983C7B72568, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_77589886_6565_D69F_41BC_14158ABEE1A2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_3_0.png",
      "width": 420,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.61,
   "yaw": -76.36
  }
 ],
 "id": "overlay_B2DE916A_A427_ADA0_41E1_17BF6F25BC88",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.89,
   "yaw": 163.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_33746029_2B2F_ADD7_4183_70EA636D70B1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028A04EB_100F_0EE2_419F_D93095247CB4",
   "pitch": -34.61,
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 163.55
  }
 ],
 "id": "overlay_BCD933D4_A42B_ACE0_41D2_963CC4F7AD69",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.66,
   "yaw": 177.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_5_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_5_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.52,
   "hfov": 31.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 177.11
  }
 ],
 "id": "overlay_BC2FC2A5_A42B_ECA3_41D1_336C80B070B7",
 "data": {
  "label": "KEMBALI "
 }
},
{
 "inertia": false,
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520D",
 "id": "viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520DVideoPlayer"
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0",
 "id": "viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0VideoPlayer"
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B.ogg",
 "mp3Url": "media/audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B.mp3",
 "id": "audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.68,
   "yaw": -135.93,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -25.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_3804F259_2B2F_9276_41BB_1ED8115637BA); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028F54F4_100F_0EE6_41A1_C64B44DB8C24",
   "pitch": -25.58,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -135.93
  }
 ],
 "id": "overlay_E037F818_F8D2_E8B4_41D4_588904212997",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 101.96,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028CF4F5_100F_0EE6_41AD_37AC6C50B2AF",
   "pitch": -13.38,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 101.96
  }
 ],
 "id": "overlay_E134175C_F8D6_98AC_41EC_F5374660D843",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 50.75,
   "yaw": 102.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_2_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_2_0.png",
      "width": 1022,
      "class": "ImageResourceLevel",
      "height": 422
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.12,
   "hfov": 50.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 102.05
  }
 ],
 "id": "overlay_E14310DA_F8D7_79B4_41D9_8C5DA3330FEF",
 "data": {
  "label": "PANTAI 3 WARNA VIA JALAN KAKI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.22,
   "yaw": 47.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_77F649E5_657D_569D_4191_6B176FB1A434, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_786243C5_761D_05AE_41B1_A0AFD37EACCB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_4_0.png",
      "width": 475,
      "class": "ImageResourceLevel",
      "height": 335
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.28,
   "yaw": 47.37
  }
 ],
 "id": "overlay_B2F19271_A425_AFA0_41D0_6FF5C4F904D5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.78,
   "yaw": -34.79,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1, this.camera_381D0271_2B2F_9236_41C5_7D48DF491392); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028DA4F6_100F_0EE2_4195_86E4AA968998",
   "pitch": -13.25,
   "hfov": 9.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -34.79
  }
 ],
 "id": "overlay_B398DC55_A42F_BBE0_41DA_173BE92B3CE1",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.99,
   "yaw": -20.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_1_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.42,
   "hfov": 39.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -20.85
  }
 ],
 "id": "overlay_BC0A8603_A42F_9767_41D2_D9DAE13D0563",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83",
 "id": "viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83VideoPlayer"
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5",
 "id": "viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4685"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5F",
 "id": "viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5FVideoPlayer"
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1",
 "id": "viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1VideoPlayer"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
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
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6",
 "id": "viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4678"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 11.28,
   "yaw": -106.75,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -17.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027394E2_100F_0EE2_41A5_561E100E96FD",
   "pitch": -17.67,
   "hfov": 11.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -106.75
  }
 ],
 "id": "overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 55.77,
   "yaw": -99.23,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -27.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
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
   "hfov": 55.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -99.23
  }
 ],
 "id": "overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.06,
   "yaw": -39.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_01E4D89C_1007_0526_4198_5E2BEB0258DE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_207D6415_2B23_F5FE_419E_4F53C52D6462, this.video_00A8EAD3_1005_0522_41A6_EE22C43131F3, this.PlayList_3C16CEB0_2B2F_B235_41C3_436D7CD59B79, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_5_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 342
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.58,
   "yaw": -39.92
  }
 ],
 "id": "overlay_B708E68C_A42F_F760_41D0_BC1FB6FC95E1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.94,
   "yaw": -167.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_207CA417_2B23_F5FA_41BC_A5B89076004C, this.video_B6B79604_A464_F761_41E2_02467D04CD8D, this.PlayList_3C167EB0_2B2F_B235_41B8_63F894460C6C, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_6_0.png",
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.93,
   "yaw": -167.68
  }
 ],
 "id": "overlay_B6CC5258_A46B_6FE0_41DF_8AFBFEFDA40C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": 132.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_7_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_1_HS_7_0.png",
      "width": 366,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.35,
   "yaw": 132.45
  }
 ],
 "id": "overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.12,
   "yaw": -2.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_01B140E6_1005_06E2_41A3_D10E7AADB234, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1D546FFF_1041_9D54_4198_5C84E993251E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_8_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 342
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.32,
   "yaw": -2.24
  }
 ],
 "id": "overlay_026AC0F2_1005_06FD_417C_1AE9EBCBEC61",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.63,
   "yaw": 110.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_775E6888_6565_D693_41D7_716EB1DA683A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_3_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 284
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.18,
   "yaw": 110.67
  }
 ],
 "id": "overlay_B2C58137_A424_ADAF_41D8_68DB870EA77C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.26,
   "yaw": -138.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_76336174_656B_767C_41CF_C00C6053746E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_786293C3_761D_05AA_41D6_B99F42FFBE46, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_2_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 335
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.7,
   "yaw": -138.41
  }
 ],
 "id": "overlay_B36D457C_A424_B5A0_41D8_468D4501D926",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.19,
   "yaw": 109.91,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_3CDACF90_2B2F_B2F6_41B4_39815DBECD88); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028934F0_100F_0EFE_419E_BA319BD7FA4E",
   "pitch": -23.8,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 109.91
  }
 ],
 "id": "overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.44,
   "yaw": 124.1,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -31.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 36.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 124.1
  }
 ],
 "id": "overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.45,
   "yaw": -67.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_6_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_03480AA4_1007_0565_4119_39B3C030EF40, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2045C423_2B23_F5DB_41AC_44CA7177CDB3, this.video_1ED4A9CE_1005_0722_41AA_A190E21EC0AD, this.PlayList_3C6B6EB0_2B2F_B235_41C1_E60DBCC4C32A, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_6_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 284
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.21,
   "yaw": -67.44
  }
 ],
 "id": "overlay_03B58A2D_1007_0567_418F_AC9B2E60D4C8",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996AC",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4693"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4690"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 10.91,
   "yaw": 30.24,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -22.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_3366D012_2B2F_ADFA_41C5_429CDC547CDB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0278A4D3_100F_0D25_41A2_27B33B335FF2",
   "pitch": -22.84,
   "hfov": 10.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 30.24
  }
 ],
 "id": "overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.36,
   "yaw": -63.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_1F2B4F76_0C8D_D6E0_41AF_0DC0537051DE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_02C7D54A_100F_0F22_41AF_E89ABC1F89DE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_2_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 263
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.26,
   "yaw": -63.22
  }
 ],
 "id": "overlay_B2F91229_A42B_AFA0_41DE_E91D0DF1F9B2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.46,
   "yaw": -170.33,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -12.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268, this.camera_3316BFFD_2B2F_B22E_41C3_D40FFDD45B9F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027824D8_100F_0D2E_41A6_E4D024A2E27E",
   "pitch": -12.37,
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -170.33
  }
 ],
 "id": "overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.2,
   "yaw": -163.55,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 40.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -163.55
  }
 ],
 "id": "overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
 "data": {
  "label": "KEMBALI KE POS 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.6,
   "yaw": -45.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_000E1F80_1004_FB1E_41AE_C0FDD5EF103C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_20785413_2B23_F5FA_4182_61E8A6363AF5, this.video_1ED4D38F_1005_0B22_4198_8ED1220F5C60, this.PlayList_3C143EB0_2B2F_B235_41C1_5382AF0689C2, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_1_HS_5_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 241
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.89,
   "yaw": -45.5
  }
 ],
 "id": "overlay_1F7F97DC_0C8E_7620_41AA_F2AE0D75FCB4",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.44,
   "yaw": 18.86,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -14.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF, this.camera_3CCD3F83_2B2F_B2DB_4193_E9106FEF5CDE); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028294F9_100F_0EEE_4197_E2F87A4644F3",
   "pitch": -14.9,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 18.86
  }
 ],
 "id": "overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.84,
   "yaw": -54.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_204BF423_2B23_F5DB_41C0_FB8109E797ED, this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D, this.PlayList_3C6A6EB0_2B2F_B235_41C5_3359FAC97DDC, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 32.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_2_0.png",
      "width": 557,
      "class": "ImageResourceLevel",
      "height": 468
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28,
   "yaw": -54.95
  }
 ],
 "id": "overlay_B70CE923_A45B_7DA0_41D0_9C5F088CAC6B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.74,
   "yaw": -163.8,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -45.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_3CFCAF63_2B2F_B25A_41BB_44F0E670D3A9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028384FB_100F_0EE2_419C_E7FF1C3B7BC3",
   "pitch": -45.16,
   "hfov": 9.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -163.8
  }
 ],
 "id": "overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.2,
   "yaw": -148.97,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -54.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 25.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -148.97
  }
 ],
 "id": "overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.65,
   "yaw": 105.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0299A0E1_100D_051E_41A4_8AF1A4353F18, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1D60B012_1041_82AC_417B_D4FF84FACCF2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 32.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_5_0.png",
      "width": 557,
      "class": "ImageResourceLevel",
      "height": 468
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.79,
   "yaw": 105.07
  }
 ],
 "id": "overlay_033F51DE_100D_0722_4194_185233A3F486",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346",
 "id": "viewer_uid3C383E70_2B2F_B236_41B9_5EA829081346VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.57,
   "yaw": 66.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0273B4E0_100F_0D1E_419A_2C95FA3DBFFE",
   "pitch": -12.21,
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 66.75
  }
 ],
 "id": "overlay_EB867347_F852_989C_41ED_ECCFAF091C32",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.27,
   "yaw": 162.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_207E7415_2B23_F5FE_41B7_8D81A2B342AB, this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D, this.PlayList_3C174EB0_2B2F_B235_41A7_C115402116AD, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_2_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.27,
   "yaw": 162.9
  }
 ],
 "id": "overlay_B67E7717_A46F_9560_41E1_5E419BB36AFB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.62,
   "yaw": -136.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_332B7FAA_2B2F_B22A_41BC_EF474E67609A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027224E1_100F_0D1E_41A3_2DECC0463003",
   "pitch": -16.77,
   "hfov": 9.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -136.29
  }
 ],
 "id": "overlay_BEDBE532_A424_F5A0_41D9_A07158411CD1",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.34,
   "yaw": -121.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.68,
   "hfov": 39.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -121.09
  }
 ],
 "id": "overlay_BC08300E_A424_AB60_4191_8475722E34C5",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4677"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47A",
 "id": "viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47AVideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.28,
   "yaw": -141.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE, this.camera_3390A0B2_2B2F_AE3A_41C0_3589728F1F65); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028E94F1_100F_0EFE_4179_0A3EF2C7965B",
   "pitch": -17.75,
   "hfov": 11.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -141.55
  }
 ],
 "id": "overlay_E0CCFD3E_F8DE_A8EC_41D3_7CEDA9AEB9FC",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.87,
   "yaw": -56.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7512692_A46C_B760_41D9_D1C6B3C2594B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_20448423_2B23_F5DB_41AE_197889746ED4, this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD, this.PlayList_3C6AEEB0_2B2F_B235_41C5_0DFF271173E8, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_2_0.png",
      "width": 492,
      "class": "ImageResourceLevel",
      "height": 356
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.14,
   "yaw": -56.89
  }
 ],
 "id": "overlay_B7555626_A46C_F7A0_41E2_99ACB983D166",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.83,
   "yaw": 70.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_3380909C_2B2F_AEEE_41B7_8B6E19DD6ADF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028F84F2_100F_0EE2_41A7_C74B38B4A909",
   "pitch": -15.76,
   "hfov": 15.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 70.65
  }
 ],
 "id": "overlay_BC04747C_A42C_EBA0_41E2_FD62EFE9B4B2",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.03,
   "yaw": 85.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.68,
   "hfov": 39.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 85.92
  }
 ],
 "id": "overlay_BC8292FB_A42C_ACA0_41E0_20753CFF3D3C",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.83,
   "yaw": -45.7,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027644E5_100F_0EE6_41A5_EC5313501185",
   "pitch": -23.8,
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -45.7
  }
 ],
 "id": "overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.77,
   "yaw": -90.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_74A27224_652B_D593_41D2_80E0F3EBDD8B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7745A885_6565_D692_41D9_4DFC388CBEA4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_2_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.78,
   "yaw": -90.05
  }
 ],
 "id": "overlay_B2A74151_A427_ADE0_41D7_AC4B3E6480C5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.49,
   "yaw": 130.02,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -17.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_333B6FC5_2B2F_B25F_4194_CC79F652A62B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027724E6_100F_0EE2_4191_57E0A96F541A",
   "pitch": -17.94,
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 130.02
  }
 ],
 "id": "overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.95,
   "yaw": 145.96,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -27.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 37.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 145.96
  }
 ],
 "id": "overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.74,
   "yaw": -10.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_02D7D2FC_103D_0AE6_41A6_2BECB41175BF, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2041D423_2B23_F5DB_41C3_70D9781B95A0, this.video_1ED376F6_1005_0AE2_41A5_B02D00406D05, this.PlayList_3C691EB0_2B2F_B235_41A3_298E1E155818, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_5_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.03,
   "yaw": -10.16
  }
 ],
 "id": "overlay_03245C71_103D_3DFE_41AF_C0F414B57869",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894",
 "id": "viewer_uid3C31AE80_2B2F_B2D6_41B4_A7A4BCE1A894VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C3A5E76_2B2F_B23A_41C5_504BBCACA47A",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4687"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0",
 "id": "viewer_uid3C2CFE50_2B2F_B276_4197_CEB29F8585E0VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": 15.59,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -23.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_33E050C6_2B2F_AE5A_419A_5EA1D56AF98E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027EB4DB_100F_0D22_4160_80BF9F4BD009",
   "pitch": -23.19,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 15.59
  }
 ],
 "id": "overlay_FB7C1530_E908_B746_41EC_107D1228B6D8",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.66,
   "yaw": -91.72,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -8.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6A76B567_6525_5F9E_41D9_156D317DC354, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7566D5E5_652F_DE92_41CB_38F7195FCFBD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.66,
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
   "yaw": -91.72
  }
 ],
 "id": "overlay_B2C3B96F_A424_BDA0_41D7_5D1FED98E3C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.6,
   "yaw": -46.69,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -7.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6AC69A02_6524_F596_41A8_CA0F37717BC2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_756125E6_652F_DE9F_41B3_D985A9DA49E1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.6,
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
   "yaw": -46.69
  }
 ],
 "id": "overlay_B2CA3761_A424_F5A0_41D1_6528FE8CAFC8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.03,
   "yaw": -161.79,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -30.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 37.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -161.79
  }
 ],
 "id": "overlay_B2E952D9_A43C_ECE0_41CA_99FA57CF46D5",
 "data": {
  "label": "KEMBALI KE POS 2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.96,
   "yaw": -168.82,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -19.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_33FE20DD_2B2F_AE6E_41B8_4968E197A777); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027E44DC_100F_0D26_41A4_CF5A5F2374CC",
   "pitch": -19.66,
   "hfov": 13.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -168.82
  }
 ],
 "id": "overlay_B3133B4D_A43C_BDE0_41D4_324C43909643",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.93,
   "yaw": -70.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_33190FEB_2B2F_B22B_417F_69C9F0D8E327); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028364FB_100F_0EE2_41AE_49F14CD8D753",
   "pitch": -22.65,
   "hfov": 10.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -70.53
  }
 ],
 "id": "overlay_E44716C9_F8F3_9994_41E7_AF03A9F517E0",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.53,
   "yaw": -67.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 24.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B22937C5_A425_F4E0_41CF_9D103D5812DB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_204AF428_2B23_F5D6_4193_50F0F6F75B0C, this.video_B19940AC_A425_ACA0_41D3_253F3C44386A, this.PlayList_3C6A1EB0_2B2F_B235_41C4_3F226B59DF20, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_2_0.png",
      "width": 530,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 24.8,
   "yaw": -67.82
  }
 ],
 "id": "overlay_B30FBE6C_A425_97A0_41DC_B3F60E050225",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.76,
   "yaw": 51.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_3308EFD8_2B2F_B276_41AA_15714FA5ADAE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028044FC_100F_0EE6_4186_03DA494CFCD4",
   "pitch": -13.75,
   "hfov": 9.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 51.63
  }
 ],
 "id": "overlay_BD6E543E_A42C_ABA0_41E3_03A5887E6442",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.95,
   "yaw": 67.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.93,
   "hfov": 38.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 67.33
  }
 ],
 "id": "overlay_BC37A4BD_A42C_94A0_41C8_578B02A492A6",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 151.6,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -41.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_380FC24F_2B2F_926A_418D_12F1CD4F21BF); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028664FE_100F_0EE2_41AF_12D6D98801C2",
   "pitch": -41.98,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 151.6
  }
 ],
 "id": "overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.64,
   "yaw": 152,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -51.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
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
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 152
  }
 ],
 "id": "overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.78,
   "yaw": 18.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_4_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_03667EE2_100B_3D1D_41A9_C8841F0D9D44, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1D645017_1041_82D4_41A2_A5F44F706F83, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 33.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_4_0.png",
      "width": 594,
      "class": "ImageResourceLevel",
      "height": 369
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.26,
   "yaw": 18.22
  }
 ],
 "id": "overlay_B6313F3D_A425_95A0_41E4_3187489BAE86",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.53,
   "yaw": -88.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2048442C_2B23_F62E_41A5_AEC8980D892C, this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0, this.PlayList_3C6D3EB0_2B2F_B235_41B8_FEA3224B017D, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_1_HS_5_0.png",
      "width": 416,
      "class": "ImageResourceLevel",
      "height": 386
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.26,
   "yaw": -88.29
  }
 ],
 "id": "overlay_B237C7DE_A424_94E0_41E0_3727C9190848",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.56,
   "yaw": 165.55,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -51.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 26.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 165.55
  }
 ],
 "id": "overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030",
 "id": "viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030VideoPlayer"
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204",
 "id": "viewer_uid3C297E50_2B2F_B276_41BD_8368EEB15204VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.97,
   "yaw": -95.81,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -22.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701, this.camera_321CF164_2B2F_AE5D_41C3_91EA0606B32E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028BE4EC_100F_0EE6_4196_1BF24A95F669",
   "pitch": -22.12,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -95.81
  }
 ],
 "id": "overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.16,
   "yaw": -60.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7441B0B_A464_9D60_41B6_C28282228370, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_20471423_2B23_F5DB_41BB_C3B400EF9454, this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307, this.PlayList_3C6BCEB0_2B2F_B235_41B7_CD774F2DC15C, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 29.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_1_HS_2_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 369
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.51,
   "yaw": -60.03
  }
 ],
 "id": "overlay_B685ACD2_A467_94E0_41D7_5C819ED05F38",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 61.93,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -17.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_326A517A_2B2F_AE2A_41C3_B42F93554F63); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0288E4EE_100F_0EE2_419E_98A6602A73E5",
   "pitch": -17.15,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 61.93
  }
 ],
 "id": "overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.12,
   "yaw": 76.87,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -27.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 38.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 76.87
  }
 ],
 "id": "overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C251E6D_2B2F_B22F_41B1_997776C0520D",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4682"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 11.72,
   "yaw": 7.91,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -8.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE, this.camera_3C851F33_2B2F_B23B_41BA_8DDCF178B839); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028134FD_100F_0EE6_417E_F10B382381CE",
   "pitch": -8.3,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 7.91
  }
 ],
 "id": "overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.39,
   "yaw": 85.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_77BD0C0B_652D_2D95_41C9_4355D5292F53, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_786133C9_761D_05A6_41D2_39454E67EB31, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 39.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_2_0.png",
      "width": 666,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57,
   "yaw": 85.17
  }
 ],
 "id": "overlay_B2DEEC61_A424_BBA0_41C1_A97E43C30EF7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.4,
   "yaw": -82.34,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF, this.camera_3C9ECF44_2B2F_B25E_41A5_B3673151F91B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028684FD_100F_0EE6_4183_482C65E31E8A",
   "pitch": -3.96,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -82.34
  }
 ],
 "id": "overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 42.04,
   "yaw": -69.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_1_HS_4_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87,
   "hfov": 42.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -69.09
  }
 ],
 "id": "overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.82,
   "yaw": -31.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_0287FC0C_100B_1D25_418A_1D009D266A68, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2049A42C_2B23_F62E_41BD_BAFA17CD2631, this.video_1ED360E0_1005_051E_4195_1E20BDE7C535, this.PlayList_3C6DAEB0_2B2F_B235_41C3_5650FA222001, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 38.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_5_0.png",
      "width": 666,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.35,
   "yaw": -31.89
  }
 ],
 "id": "overlay_03748302_100B_0B22_4176_5C897719CD4A",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.52,
   "yaw": -136.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_33A2C070_2B2F_AE36_41A9_C4D4972834B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027FD4DC_100F_0D26_41AE_33523B328227",
   "pitch": -29.99,
   "hfov": 13.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -136.06
  }
 ],
 "id": "overlay_F8F0E502_E908_D74A_41DB_7C5A15A691FA",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.52,
   "yaw": 75.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_776477FF_78B2_DB26_41DB_617F38CA7FB9, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6A438AA9_7B14_26AD_41DA_E6208E933B4A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_4_0.png",
      "width": 414,
      "class": "ImageResourceLevel",
      "height": 270
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41,
   "yaw": 75.7
  }
 ],
 "id": "overlay_B2C2C86D_A425_7BA0_41C7_978BC373C353",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.13,
   "yaw": 134.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_5_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7564B672_652B_5A76_41AA_3F30A482C74E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_76502AD4_653D_2AB2_41C1_3C74DB1F1773, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_5_0.png",
      "width": 358,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.07,
   "yaw": 134.69
  }
 ],
 "id": "overlay_B2A1659A_A425_9560_41D2_25539FB6AF0D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.2,
   "yaw": 47.23,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "hfov": 40.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 47.23
  }
 ],
 "id": "overlay_B3024DB0_A43F_B4A0_4157_67F2AEDECA18",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.53,
   "yaw": 31.91,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_33B2F07C_2B2F_AE2D_41B1_E4855C86EB53); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027CC4DD_100F_0D26_4199_E256969BBC4C",
   "pitch": -12,
   "hfov": 12.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 31.91
  }
 ],
 "id": "overlay_B3C9ADD4_A43C_B4E0_41D2_88D851F5E39D",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "inertia": false,
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C235E65_2B2F_B25F_41BE_028786CBE6D6",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4680"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00E",
 "id": "viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00EVideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4684"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 11.44,
   "yaw": -69.82,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -14.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B, this.camera_33CE10EF_2B2F_AE2B_41B0_A8F52755384B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027054E3_100F_0EE2_41A5_9471A7EBDCA2",
   "pitch": -14.9,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -69.82
  }
 ],
 "id": "overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.59,
   "yaw": -149.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_33DF710B_2B2F_AFEB_419F_39C7488DE7BE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027194E3_100F_0EE2_41A6_653CB29135DA",
   "pitch": -11.91,
   "hfov": 11.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -149.23
  }
 ],
 "id": "overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.3,
   "yaw": -115.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_20434417_2B23_F5FA_41C3_7EB448D770E4, this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45, this.PlayList_3C69FEB0_2B2F_B235_41A6_290019803CBE, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 32.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_3_0.png",
      "width": 547,
      "class": "ImageResourceLevel",
      "height": 399
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.08,
   "yaw": -115.55
  }
 ],
 "id": "overlay_B6B7953C_A47D_B5A0_41DB_38EB004F6C19",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.21,
   "yaw": 83.19,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -10.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_322F9123_2B2F_AFDB_4196_507B7D92566F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027694E4_100F_0EE6_4198_FFADA87B0F06",
   "pitch": -10.34,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 83.19
  }
 ],
 "id": "overlay_BE677039_A425_6BA0_41C7_94189E681072",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 50,
   "yaw": 87.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_5_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_5_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16,
   "hfov": 50,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 87.55
  }
 ],
 "id": "overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.32,
   "yaw": -6.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_6_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_02087B57_1005_3B22_41AB_F57576A477AA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2042C423_2B23_F5DB_4185_871E8A543CE4, this.video_1EDF2DB5_1005_7F67_41A6_DDDDD7DCE715, this.PlayList_3C699EB0_2B2F_B235_41BA_BA2C97800897, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 32.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_6_0.png",
      "width": 547,
      "class": "ImageResourceLevel",
      "height": 399
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.57,
   "yaw": -6.28
  }
 ],
 "id": "overlay_1F332214_0C87_CE20_41A3_712072BB8136",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296E",
 "id": "viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296EVideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4686"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409",
 "id": "viewer_uid3C3ACE76_2B2F_B23A_418A_932BE6FB6409VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C353E82_2B2F_B2DA_4191_7AE99D73A8C0",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4691"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C25BE6B_2B2F_B22B_41B9_FE84F1964030",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4681"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 11.55,
   "yaw": 94.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431, this.camera_3808723F_2B2F_922B_4185_E158F50F6C78); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027C64DE_100F_0D22_41A7_1FD49A404B7B",
   "pitch": -12.86,
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 94.07
  }
 ],
 "id": "overlay_FB05D263_E908_ADCA_41E5_1BD89DC5C896",
 "data": {
  "label": "Arrow 05c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.4,
   "yaw": -4.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_383C5212_2B2F_ADFA_41A0_6BE5ADE34A90); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_027D94DF_100F_0D22_41A8_83D7EC4BA4A0",
   "pitch": -15.66,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -4.25
  }
 ],
 "id": "overlay_ED294DE5_F873_AB9F_41E9_7871CBE0520A",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.79,
   "yaw": 40.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B2D15DEB_A42C_B4A0_41B2_AED58724AA97, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_207F5413_2B23_F5FA_41BD_BB369843D330, this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB, this.PlayList_3C17DEB0_2B2F_B235_41B9_6881823FFA92, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_4_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 353
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.7,
   "yaw": 40.98
  }
 ],
 "id": "overlay_B378122D_A42C_AFA0_41C8_371854F6E874",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.18,
   "yaw": -50.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_69F2C327_78BE_DB25_41A2_719A00122678, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6A7E1AAB_7B14_26AD_41D0_30F19C1F0A21, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_5_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 338
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.16,
   "yaw": -50.91
  }
 ],
 "id": "overlay_B2D43449_A425_6BE0_41E3_A5048C1E8951",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.49,
   "yaw": -136.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_6_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_38328228_2B2F_ADD6_41AC_089A1CED3DF8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0272D4E0_100F_0D1E_41AD_923B5CCB4935",
   "pitch": -11.49,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -136.45
  }
 ],
 "id": "overlay_BD4C927D_A43D_AFA0_41B2_1CC9AF53FFBD",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.2,
   "yaw": -122.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_7_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_7_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66,
   "hfov": 40.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -122.09
  }
 ],
 "id": "overlay_BDA3E416_A43D_6B60_41E3_391B2FE54DA1",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C20BE65_2B2F_B25F_41B7_692465E07A5F",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4679"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C0AEE8C_2B2F_B2EE_41C3_1AF648A1A5A1",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4694"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 11.24,
   "yaw": 18.86,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -18.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_3CEF2F53_2B2F_B27A_41C3_7506D418F043); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0261A4C3_100F_0D22_41A9_885DD28004FC",
   "pitch": -18.42,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 18.86
  }
 ],
 "id": "overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 92.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_755352E0_61E8_492D_41C3_ADBCC350A60E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_2_0.png",
      "width": 242,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99,
   "yaw": 92.05
  }
 ],
 "id": "overlay_75476C85_6198_F9F4_41C7_78D9B05B0517",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 109.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_21E6233C_2B23_F22D_41A9_0B2F2A43A97A, this.video_B4873789_A42C_9560_41C9_ABCDD641B19F, this.PlayList_3C158EB0_2B2F_B235_41BF_BD1EC056A899, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_1_HS_4_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67,
   "yaw": 109.7
  }
 ],
 "id": "overlay_B4CCB425_A43C_EBA0_41E0_5F3E29718DAC",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06847B6F_100D_1BE2_41A1_CB2DE0DBA074_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_0684AB6F_100D_1BE2_4197_B24C06AADF6E_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06840B6F_100D_1BE2_41B0_0C156E8C769A_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06849B6F_100D_1BE2_41A7_5D13CBC47884_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
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
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06843B6F_100D_1BE2_4188_FA1587539796",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_06843B6F_100D_1BE2_4188_FA1587539796_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "id": "IconButton_0684FB6E_100D_1BE2_4195_727B29955F55",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_0684FB6E_100D_1BE2_4195_727B29955F55_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
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
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C36FE84_2B2F_B2DE_41BF_38731FF5BD83",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4692"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
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
   "hfov": 19.55,
   "yaw": 31.11,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -8.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_323D2138_2B2F_AE36_41AC_4E11A8867DF2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028C84F7_100F_0EE2_41A3_71645C74D0C9",
   "pitch": -8.48,
   "hfov": 19.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 31.11
  }
 ],
 "id": "overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.79,
   "yaw": 155.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7863C3C6_761D_05AA_41A6_EFA7A29DC9F4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_4_0.png",
      "width": 471,
      "class": "ImageResourceLevel",
      "height": 369
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.2,
   "yaw": 155.26
  }
 ],
 "id": "overlay_B35E209A_A424_AB60_41CA_4EFE3713F6FA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.86,
   "yaw": -40.9,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -5.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE, this.camera_320D214F_2B2F_AE6B_41BD_14A12A7A3AE8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_028D34F8_100F_0EEE_4182_24609B7A48CC",
   "pitch": -5.46,
   "hfov": 12.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -40.9
  }
 ],
 "id": "overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 41.92,
   "yaw": -26.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_6_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_1_HS_6_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62,
   "hfov": 41.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -26.88
  }
 ],
 "id": "overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
 "data": {
  "label": "KEMBALI"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.36,
   "yaw": -117.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_7_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_035AD1D0_1005_073E_41AC_ED8DC5F6878E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1D5EC010_1041_82AC_41A3_8236259808DE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_7_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 373
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57,
   "yaw": -117.81
  }
 ],
 "id": "overlay_037B62FE_1005_0AE2_41AA_1640971FAD8C",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.53,
   "yaw": 17.35,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_027484E7_100F_0EE2_41A2_9902680656ED",
   "pitch": -13.14,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 17.35
  }
 ],
 "id": "overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 47.76,
   "yaw": 17.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_1_0.png",
      "width": 878,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.3,
   "hfov": 47.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 17.84
  }
 ],
 "id": "overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.88,
   "yaw": 113.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_02581664_103B_0DE6_41A7_0C0737926D1A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2040C423_2B23_F5DB_41B6_19EA113C3329, this.video_008B9799_1005_0B2E_41AD_FB4E7C6928D0, this.PlayList_3C68AEB0_2B2F_B235_41C2_1690BC64C951, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 29.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_4_0.png",
      "width": 509,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.84,
   "yaw": 113.94
  }
 ],
 "id": "overlay_B67764B4_A42D_74A0_41E0_2FDF87F7838D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.05,
   "yaw": -148.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_20402423_2B23_F5DB_41C4_1C980CBE23BA, this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C, this.PlayList_3C682EB0_2B2F_B235_41BA_109D2FDE71C5, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_1_HS_5_0.png",
      "width": 407,
      "class": "ImageResourceLevel",
      "height": 407
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.83,
   "yaw": -148.08
  }
 ],
 "id": "overlay_B6F8328A_A47B_AF60_41DA_A89DA44D3A2A",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 54,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C3FBE78_2B2F_B236_41C5_671DC25DC00E",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4688"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996AC",
 "id": "viewer_uid3C08AE8A_2B2F_B2EA_41B0_0562C66996ACVideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C271E6D_2B2F_B22F_41A2_674B9C9F296E",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4683"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3C3F1E7A_2B2F_B22A_41BA_042D6E98FFE5",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
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
  "name": "ViewerArea4689"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_06848B6F_100D_1BE2_419A_2E5E1CAAF040",
 "buttonPause": "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
 "viewerArea": "this.viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5",
 "id": "viewer_uid3C261E6F_2B2F_B22B_41BB_7908D2E218F5VideoPlayer"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
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
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
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
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
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
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
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
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 550,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 138,
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
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
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
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
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
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
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
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
 "id": "Container_0684BB6F_100D_1BE2_41AD_0DD61FF6A9D9",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_06844B6F_100D_1BE2_41AD_EDFFF501B431",
  "this.IconButton_06845B6F_100D_1BE2_41AE_F1CD2353A824",
  "this.IconButton_06846B6F_100D_1BE2_41AF_8FAA7F3C405A"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
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
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027574E9_100F_0EEE_41AD_0B72C36E5AFC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028AA4EA_100F_0EE2_41A2_5793A12016D5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028A04EB_100F_0EE2_419F_D93095247CB4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_0273B4E0_100F_0D1E_419A_2C95FA3DBFFE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027224E1_100F_0D1E_41A3_2DECC0463003",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028E94F1_100F_0EFE_4179_0A3EF2C7965B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_028F84F2_100F_0EE2_41A7_C74B38B4A909",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028364FB_100F_0EE2_41AE_49F14CD8D753",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_028044FC_100F_0EE6_4186_03DA494CFCD4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027FD4DC_100F_0D26_41AE_33523B328227",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027194E3_100F_0EE2_41A6_653CB29135DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_027C64DE_100F_0D22_41A7_1FD49A404B7B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_027D94DF_100F_0D22_41A8_83D7EC4BA4A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_1_HS_6_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_0272D4E0_100F_0D1E_41AD_923B5CCB4935",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
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
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "27.69%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
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
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
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
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "26.316%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
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
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://https://www.youtube.com/@GeoTalkMedia', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
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
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
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
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemLabelGap": 7,
 "borderRadius": 5,
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
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
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
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
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
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
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
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
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
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
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
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "3.619%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "height": "5.843%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.showPopupImage(this.ImageResource_3560A65A_25D9_4F80_41BA_9938F6AEBAB5, null, '90%', '90%', this.FadeInEffect_3560965A_25D9_4F80_41B3_A88F6AB9AD22, this.FadeOutEffect_3560665A_25D9_4F80_41A3_2F6C9422F3EE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Deskripsi Virtual Field Trip",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
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
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_B54F32A4_A43D_6CA1_41D7_557DD7B8E37F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.showPopupImage(this.ImageResource_30DF03B0_25D9_4480_41AA_185A99EBE798, null, '90%', '90%', this.FadeInEffect_30DEE3B0_25D9_4480_41BF_7653826DC9BC, this.FadeOutEffect_30DED3B0_25D9_4480_41C2_1AE2D78A692F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Petunjuk Penggunaan VFT",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
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
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_B44D5A58_A4B7_3D91_41B7_5ECF2F9904C9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.showPopupImage(this.ImageResource_355F765E_25D9_4F80_41A1_F5E204187EDE, null, '90%', '90%', this.FadeInEffect_355F665E_25D9_4F80_41C1_73EECF5D11BC, this.FadeOutEffect_355F565E_25D9_4F80_419E_28198A1AB27E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Tujuan Pembelajaran",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
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
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_68C15F96_7B3C_1F67_41C8_493E39833CD6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('http://maps.app.goo.gl/t1LbSEbz8XJYLMMx5', '_blank')",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lokasi CMC",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
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
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "List Panorama",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
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
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Berikan Feedback !",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
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
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Button_F79C9FC6_E412_CBE9_41B1_E65B02E0E5B3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false); this.openLink('https://docs.google.com/forms/d/e/1FAIpQLSds9-ZgYEBB7D8DPmgovsXCxHETcctYJg1Tg17AO6YYUob-tg/viewform?usp=sf_link', '_blank')",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Berikan Feedback!",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
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
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
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
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 127,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Ilham Adenan Hidayatullah</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Geotalk Media</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Universitas Negeri Malang</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Jl. Semarang 5 Malang, 65145 Telp. (0341) 551312 Malang, Indonesia.</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
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
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 30,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
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
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
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
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
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
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
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
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
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
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 50,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
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
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "46%",
 "minWidth": 1,
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
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
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
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
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
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.22vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
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

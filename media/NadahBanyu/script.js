(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
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
  "this.Container_D133549D_C285_D67D_41D2_76542E45C8A8",
  "this.Container_DA8F13E3_C284_D1C6_41E4_A0E7657A6F2A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_DEF2901D_C287_6E7D_41D7_97CB55D967DE]); this.init(); this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_C62ACB86_D692_68CB_41D9_81DB138E88FD.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0,
   "targetStereographicFactor": 0
  }
 ],
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_tcap0",
  "this.overlay_33798DF0_236C_7893_41C1_75620570115D",
  "this.overlay_3A8576A4_2397_A8B3_41B1_346A57F4EF08",
  "this.overlay_3A25A70B_2394_A975_41BA_DD767576331B"
 ],
 "hfovMin": "150%",
 "label": "1783771039617",
 "id": "panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_t.jpg"
},
{
 "class": "MediaAudio",
 "data": {
  "label": "YTDown.com_YouTube_Kidung-Hanacaraka-Sindy-Purbawati-Offici_Media_0FGUxAG_piU_009_128k"
 },
 "id": "audio_DEF2901D_C287_6E7D_41D7_97CB55D967DE",
 "audio": {
  "mp3Url": "media/audio_DEF2901D_C287_6E7D_41D7_97CB55D967DE.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_DEF2901D_C287_6E7D_41D7_97CB55D967DE.ogg"
 },
 "autoplay": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D989AF55_D692_684D_41D4_45D4DF417E08",
 "initialPosition": {
  "yaw": -11.02,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 }
},
{
 "rotationY": 0,
 "yaw": -108.62,
 "hfov": 10.07,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_AF0639AB_BFC1_BECE_41BC_74903649A9DD",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -12.11,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AF24BAFA_BFC6_924E_41E7_B27F0325096D.mp4"
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "items": [
  {
   "media": "this.video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B",
   "start": "this.viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB26E549_D696_B842_41E7_F81087E2B8B9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB26E549_D696_B842_41E7_F81087E2B8B9, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4VideoPlayer)",
   "player": "this.viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4VideoPlayer"
  }
 ],
 "id": "PlayList_DB26E549_D696_B842_41E7_F81087E2B8B9",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C74D0CDC_D692_6842_41E2_57E0D16C96CC",
 "initialPosition": {
  "yaw": 13.96,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_tcap0",
  "this.overlay_335166F1_2374_6895_41C0_57C317286FD3",
  "this.overlay_3C632DB4_298C_13B2_41B2_5E883BA76F2C",
  "this.overlay_3FA5EEEC_298C_11A6_41A9_98754DBCA8F2",
  "this.overlay_AA9EB3C1_BFDF_F2BD_41C1_49CFB1160A5F",
  "this.overlay_A99EA89F_BFC1_BEC6_41E4_7298059916CE",
  "this.popup_ABD53239_BFC2_EDCA_41AA_88CB415707C1"
 ],
 "hfovMin": "150%",
 "label": "1783771038633",
 "id": "panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_08159459_298C_125A_41BE_16075C374136",
   "x": 361.33,
   "class": "PanoramaMapLocation",
   "y": 634.56,
   "angle": 94.18
  }
 ],
 "thumbnailUrl": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9A19F81_D692_68C2_41E8_CF21A77FAA4E",
 "initialPosition": {
  "yaw": -9.55,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DD128C85_D692_A8C2_41E7_C590CEC72A2F",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window482"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F_tcap0",
  "this.overlay_336C44A7_2373_A8BD_416A_E649A53BAC84",
  "this.overlay_01A5D9E9_249F_B8B5_41A3_B97087FDE003",
  "this.overlay_38B8ECD6_2984_103E_410C_958ACF82FBC0",
  "this.overlay_3A223B74_298C_10F2_41BE_D69C307B1BE3",
  "this.overlay_3BD60DDD_298C_3032_41A8_561277862CBE",
  "this.overlay_AB63EB3F_BFC2_73C6_41E4_328C4063BD11",
  "this.popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4",
  "this.overlay_AB73E20B_BFC3_EDCD_41CC_E32023A579DA"
 ],
 "hfovMin": "150%",
 "label": "Diluar Candi",
 "id": "panorama_5A43487E_5137_84AB_41D0_571CB86B405F",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3_tcap0",
  "this.overlay_333AD6A7_236D_A8BD_41BF_837D840A94BA",
  "this.overlay_305AFB66_23BC_B9BF_41B6_90AA369CAF24",
  "this.overlay_389293BE_2E0D_987C_41AD_0F0947B1D97D",
  "this.popup_AE4BA02E_BFC6_ADC6_41D9_EDF21BF03983",
  "this.overlay_A8BBA5D7_BFC6_9645_41D7_849C5564C84F",
  "this.overlay_A30BB23C_BFC3_ADCA_41D4_40B4A11E5684",
  "this.popup_A2C32553_BFC3_965E_41B5_F65183A66399"
 ],
 "hfovMin": "150%",
 "label": "Gapura Perempatan",
 "id": "panorama_5A51081C_5136_846F_419E_1CACC7803CC3",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_08159459_298C_125A_41BE_16075C374136",
   "x": 615.26,
   "class": "PanoramaMapLocation",
   "y": 93.39,
   "angle": 41.31
  }
 ],
 "thumbnailUrl": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C76B1D0E_D692_69DE_41E2_E2C1FA2C9338",
 "initialPosition": {
  "yaw": 173.39,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 }
},
{
 "levels": [
  {
   "url": "media/zoomImage_D1BB1F7A_C29D_F2C7_41E5_AB0B057563AF_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/zoomImage_D1BB1F7A_C29D_F2C7_41E5_AB0B057563AF_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_D1BB1F7A_C29D_F2C7_41E5_AB0B057563AF_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_DA12E675_C28B_D2CD_41DA_89D83AB8AAE4"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.29,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688",
 "yaw": -101.89,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -2.29,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8125E13_D692_6BC6_41E4_F05E9D78C6EB",
 "initialPosition": {
  "yaw": 162.37,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_tcap0",
  "this.overlay_33594B50_2375_D993_41BC_DF2D5F0603CA",
  "this.overlay_315D14A1_29BC_11E1_4160_AC58BF7CC3AE",
  "this.overlay_3174DB03_2984_70C9_4190_8CCDC841B4F6"
 ],
 "hfovMin": "150%",
 "label": "1783771038345",
 "id": "panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8175E29_D692_6BC2_41BA_4F94B9AAEA15",
 "initialPosition": {
  "yaw": 27.18,
  "class": "PanoramaCameraPosition",
  "pitch": -38.94
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9F26EE9_D692_6842_41DB_2A164C7FFE9C",
 "initialPosition": {
  "yaw": 160.16,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_08159459_298C_125A_41BE_16075C374136",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_C62B0B8B_D692_68C6_41DF_25E3D04426E8",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8610DD6_D692_684E_41D0_B887776A72BC",
 "initialPosition": {
  "yaw": 2.2,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 }
},
{
 "viewerArea": "this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3",
 "class": "VideoPlayer",
 "id": "ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48_t.jpg",
 "width": 1920,
 "label": "Tujuan Media",
 "loop": false,
 "id": "video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D959DFAC_D692_68C2_41E1_43206074768E",
 "initialPosition": {
  "yaw": -92.57,
  "class": "PanoramaCameraPosition",
  "pitch": -8.82
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_tcap0",
  "this.overlay_335A0731_2373_E995_4189_810BE07D7246",
  "this.overlay_3D85BCE6_299C_101E_41C1_F663F6EE6ACD",
  "this.overlay_3A797CDB_2984_7024_41B4_4E223A53E9BB",
  "this.overlay_ACAF85A1_BFC7_96FA_41E5_F9B8DAFA05BF",
  "this.overlay_ACC55867_BFC6_9E46_41E2_D0A0A2681905",
  "this.overlay_AA8C394E_BFC6_9E46_41E4_5FF459918705",
  "this.overlay_A98666D9_BFC1_924A_41DB_BC73BF57940A",
  "this.popup_ABD5F887_BFC1_9EC6_41C0_B8BCB2DB7857",
  "this.popup_AA709B9F_BFC3_B2C6_4196_354F610AE468",
  "this.overlay_AA87A499_BF41_96CD_41D2_93148D3933E2",
  "this.overlay_A3EEDC6F_BF42_9645_41E4_249563E51A85",
  "this.popup_A337F7ED_BF42_924A_419C_AD82A047D64D"
 ],
 "hfovMin": "150%",
 "label": "Dalam Candi 2",
 "id": "panorama_5A43841A_5137_8C6B_41BE_E80827876DCA",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C798FC38_D692_6FC2_41A1_A6764E0C8A3A",
 "initialPosition": {
  "yaw": 31.59,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 }
},
{
 "items": [
  {
   "camera": "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_camera",
   "media": "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A438990_5137_8477_41C8_673E3413256C_camera",
   "media": "this.panorama_5A438990_5137_8477_41C8_673E3413256C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  "this.PanoramaPlayListItem_C62CFB8E_D692_68DE_41E6_2DAE9539A3DF",
  {
   "camera": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_camera",
   "media": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A52C218_5136_8468_41C0_43396E48DA5B_camera",
   "media": "this.panorama_5A52C218_5136_8468_41C0_43396E48DA5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57_camera",
   "media": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_camera",
   "media": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_camera",
   "media": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_camera",
   "media": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_camera",
   "media": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F_camera",
   "media": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_camera",
   "media": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_camera",
   "media": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_camera",
   "media": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  "this.PanoramaPlayListItem_C7D2AB99_D692_68C2_41C0_8E0DFB2A5AE9",
  {
   "camera": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_camera",
   "media": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_camera",
   "media": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_camera",
   "media": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_camera",
   "media": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_camera",
   "media": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  "this.PanoramaPlayListItem_C7D5ABA1_D692_68C2_41DA_B3C1DA61C4BA",
  {
   "media": "this.video_AF24BAFA_BFC6_924E_41E7_B27F0325096D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_ACE577D8_BFDE_924A_41D1_BA33F428DE12",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 22)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_ADCECF05_BFC6_73BA_41DA_56D134F27189",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 23, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 23)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_AD1F551C_BFC7_B7CA_41D0_83766E949668",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 24, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 24)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 25)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_AAA76873_BFC2_BE5E_41E1_184655FD59A8",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 26, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 26)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 27, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 27)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 28)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_DA87D7DC_C287_51C3_41DF_1115D5664D5B",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AF24BAFA_BFC6_924E_41E7_B27F0325096D_t.jpg",
 "width": 1920,
 "label": "Sumber Banyu Biru",
 "loop": false,
 "id": "video_AF24BAFA_BFC6_924E_41E7_B27F0325096D",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AF24BAFA_BFC6_924E_41E7_B27F0325096D.mp4"
 }
},
{
 "items": [
  {
   "camera": "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_camera",
   "media": "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A438990_5137_8477_41C8_673E3413256C_camera",
   "media": "this.panorama_5A438990_5137_8477_41C8_673E3413256C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_camera",
   "media": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_camera",
   "media": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A52C218_5136_8468_41C0_43396E48DA5B_camera",
   "media": "this.panorama_5A52C218_5136_8468_41C0_43396E48DA5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57_camera",
   "media": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_camera",
   "media": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_camera",
   "media": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_camera",
   "media": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_camera",
   "media": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F_camera",
   "media": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_camera",
   "media": "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_camera",
   "media": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_camera",
   "media": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_camera",
   "media": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_camera",
   "media": "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_camera",
   "media": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_camera",
   "media": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_camera",
   "media": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_camera",
   "media": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3_camera",
   "media": "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.video_AF24BAFA_BFC6_924E_41E7_B27F0325096D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_ACE577D8_BFDE_924A_41D1_BA33F428DE12",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_ADCECF05_BFC6_73BA_41DA_56D134F27189",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_AD1F551C_BFC7_B7CA_41D0_83766E949668",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_AAA76873_BFC2_BE5E_41E1_184655FD59A8",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_DA87D7DC_C287_51C3_41DF_1115D5664D5B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "yaw": -104.89,
 "hfov": 5.62,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_ABD5F887_BFC1_9EC6_41C0_B8BCB2DB7857",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -4.28,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_ACE577D8_BFDE_924A_41D1_BA33F428DE12.mp4"
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B_t.jpg",
 "width": 1920,
 "label": "Resik Dandang",
 "loop": false,
 "id": "video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D91CE01A_D692_57C6_41E4_5EA9CC760299",
 "initialPosition": {
  "yaw": -5.14,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A52C218_5136_8468_41C0_43396E48DA5B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_DA87D7DC_C287_51C3_41DF_1115D5664D5B_t.jpg",
 "width": 1920,
 "label": "Kondisi Geografi",
 "loop": false,
 "id": "video_DA87D7DC_C287_51C3_41DF_1115D5664D5B",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_DA87D7DC_C287_51C3_41DF_1115D5664D5B.mp4"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_tcap0",
  "this.overlay_3375F09B_236C_6895_41B7_9E991439AD28",
  "this.overlay_3EF4ACE8_2393_B8B3_41B0_FC33DE7E5ECC",
  "this.overlay_3DA4C2DE_2394_E88F_4176_3DC9D784F554"
 ],
 "hfovMin": "150%",
 "label": "1783771039873",
 "id": "panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_t.jpg"
},
{
 "overlays": [
  "this.overlay_0865765F_299C_3E78_41B2_1C54C375B719",
  "this.overlay_0BC6ECAD_299C_32D5_419F_A8BCB3D0C908",
  "this.overlay_0BCBAF51_299C_0E4E_41B9_EA133A2AD95F"
 ],
 "fieldOfViewOverlayOutsideOpacity": 0,
 "id": "map_08159459_298C_125A_41BE_16075C374136",
 "width": 1356,
 "label": "Screenshot 2026-08-22 210407",
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_08159459_298C_125A_41BE_16075C374136.png",
    "width": 1356,
    "class": "ImageResourceLevel",
    "height": 903
   },
   {
    "url": "media/map_08159459_298C_125A_41BE_16075C374136_lq.png",
    "width": 313,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 209
   }
  ]
 },
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.05,
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "scaleMode": "fit_outside",
 "thumbnailUrl": "media/map_08159459_298C_125A_41BE_16075C374136_t.png",
 "minimumZoomFactor": 1,
 "fieldOfViewOverlayInsideOpacity": 0,
 "height": 903
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DD11DC84_D692_A8C2_41E4_0BBBFD5DDBEB",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window481"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0",
  "this.overlay_334CDC9B_236C_F895_41A8_04ECC3E00B31",
  "this.overlay_35E557EA_23AC_68B7_41BA_0DDFE9A6F417",
  "this.overlay_000244D4_2394_6893_4182_3A61915E28C0",
  "this.overlay_3C0CBAFA_2E73_A807_41C1_B3A946D29EC4",
  "this.popup_AF0639AB_BFC1_BECE_41BC_74903649A9DD",
  "this.overlay_ACC0F678_BFC3_B24A_41D4_9A64AA133A72",
  "this.overlay_ABD02FAF_BFC2_92C6_41D3_9CA90A96EBA9",
  "this.popup_A75C90D6_BFC6_AE46_41C0_FDCD4287D5B2"
 ],
 "hfovMin": "150%",
 "label": "1783771039437",
 "id": "panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A438990_5137_8477_41C8_673E3413256C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_tcap0",
  "this.overlay_3308121D_236C_6B8D_41AF_0C1E4AF6B964",
  "this.overlay_3779F94A_23BC_59F7_41A9_06C807C82845",
  "this.overlay_36377E2D_23B4_FB8D_418E_E83E64895BE4"
 ],
 "hfovMin": "150%",
 "label": "1783771040068",
 "id": "panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_t.jpg"
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DDEC7C79_D692_A844_41E9_A7F8D7E6E7F2",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BB"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window476"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.video_AD1F551C_BFC7_B7CA_41D0_83766E949668",
   "start": "this.viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB24154C_D696_B842_41C5_9EE598106923, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB24154C_D696_B842_41C5_9EE598106923, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491VideoPlayer)",
   "player": "this.viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491VideoPlayer"
  }
 ],
 "id": "PlayList_DB24154C_D696_B842_41C5_9EE598106923",
 "class": "PlayList"
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AAA76873_BFC2_BE5E_41E1_184655FD59A8_t.jpg",
 "width": 1920,
 "label": "Pelestarian Budaya",
 "loop": false,
 "id": "video_AAA76873_BFC2_BE5E_41E1_184655FD59A8",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AAA76873_BFC2_BE5E_41E1_184655FD59A8.mp4"
 }
},
{
 "rotationY": 0,
 "yaw": -65.1,
 "hfov": 9.7,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_A75C90D6_BFC6_AE46_41C0_FDCD4287D5B2",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -19.66,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_ACE577D8_BFDE_924A_41D1_BA33F428DE12",
   "start": "this.viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB27054A_D696_B846_41CD_7A10465A1403, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB27054A_D696_B846_41CD_7A10465A1403, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178VideoPlayer)",
   "player": "this.viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178VideoPlayer"
  }
 ],
 "id": "PlayList_DB27054A_D696_B846_41CD_7A10465A1403",
 "class": "PlayList"
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_ACE577D8_BFDE_924A_41D1_BA33F428DE12_t.jpg",
 "width": 1920,
 "label": "Candi Songgoriti",
 "loop": false,
 "id": "video_ACE577D8_BFDE_924A_41D1_BA33F428DE12",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_ACE577D8_BFDE_924A_41D1_BA33F428DE12.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C75D5CC3_D692_6846_41EA_56E7DCA07E45",
 "initialPosition": {
  "yaw": -101.39,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 11.38,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_A2C32553_BFC3_965E_41B5_F65183A66399",
 "yaw": 77.32,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A2C32553_BFC3_965E_41B5_F65183A66399_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -42.79,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D828FE90_D692_68C2_41DE_D7199149F0B4",
 "initialPosition": {
  "yaw": 33.06,
  "class": "PanoramaCameraPosition",
  "pitch": -16.16
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.13,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF",
 "yaw": -1.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -10.32,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "rotationY": 0,
 "yaw": -19.4,
 "hfov": 5.9,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_A838B69C_BFC1_92CA_41D8_A3477029A142",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -31.96,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_ADCECF05_BFC6_73BA_41DA_56D134F27189.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_DA87D7DC_C287_51C3_41DF_1115D5664D5B",
   "start": "this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C61CCB32_D692_69C6_41DB_BA4AA267E4A0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C61CCB32_D692_69C6_41DB_BA4AA267E4A0, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3VideoPlayer)",
   "player": "this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3VideoPlayer"
  }
 ],
 "id": "playList_C61CCB32_D692_69C6_41DB_BA4AA267E4A0",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A39BABE6_BFCF_F246_41D6_D9DCFBEFCBAC"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7AF6CAB_D692_68C6_41E1_471A42B4A9E5",
 "initialPosition": {
  "yaw": -16.9,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_t.jpg"
  }
 ],
 "overlays": [
  "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_tcap0",
  "this.overlay_2C916D61_236C_59B4_418C_A4E39DF546BC",
  "this.overlay_3B89EE54_23AC_FB93_4192_F636ED86647B",
  "this.overlay_3A60305A_2394_6797_41B7_5842A1A10597",
  "this.overlay_070B5927_239F_D9BD_41BD_C0E5813D8DF2",
  "this.overlay_3D35E61D_2DF2_B83D_41AE_BADEEDAF62D4",
  "this.popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688"
 ],
 "hfovMin": "150%",
 "label": "1783771039561",
 "id": "panorama_5A43843D_5137_8CA8_41A1_C8C024139E28",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A438990_5137_8477_41C8_673E3413256C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_08159459_298C_125A_41BE_16075C374136",
   "x": 559.27,
   "class": "PanoramaMapLocation",
   "y": 723.24,
   "angle": 235.04
  }
 ],
 "thumbnailUrl": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_t.jpg"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_08159459_298C_125A_41BE_16075C374136",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_C62ACB86_D692_68CB_41D9_81DB138E88FD",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43996F_5137_84A9_41D3_72808114DE57_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8674DEB_D692_6846_41E1_59A74450E938",
 "initialPosition": {
  "yaw": -142.53,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7A26C94_D692_68C2_41E9_4C5A3EE70553",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_DA12C675_C28B_D2CD_41DB_0DEE3847C512",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "levels": [
  {
   "url": "media/popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A777F381_BF46_B2BA_41C9_A92BA4C534A1"
},
{
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9600FEE_D692_685E_41EA_4EC709870CCC",
 "initialPosition": {
  "yaw": -7.35,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 }
},
{
 "levels": [
  {
   "url": "media/popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A3A60BDC_BFCF_F24A_41D4_121AA70D10C9"
},
{
 "items": [
  {
   "media": "this.video_ADCECF05_BFC6_73BA_41DA_56D134F27189",
   "start": "this.viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB27D54B_D696_B846_41DA_A1D6E041F4D1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB27D54B_D696_B846_41DA_A1D6E041F4D1, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3VideoPlayer)",
   "player": "this.viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3VideoPlayer"
  }
 ],
 "id": "PlayList_DB27D54B_D696_B846_41DA_A1D6E041F4D1",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43487E_5137_84AB_41D0_571CB86B405F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "yaw": 22.2,
 "hfov": 14.29,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_AE4BA02E_BFC6_ADC6_41D9_EDF21BF03983",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -41.52,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AD1F551C_BFC7_B7CA_41D0_83766E949668.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "yaw": -172.86,
 "hfov": 8.45,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_AA709B9F_BFC3_B2C6_4196_354F610AE468",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -12.21,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D99F9F41_D692_6842_41E8_3B0207388479",
 "initialPosition": {
  "yaw": -19.1,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 }
},
{
 "levels": [
  {
   "url": "media/popup_A2C32553_BFC3_965E_41B5_F65183A66399_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A2C32553_BFC3_965E_41B5_F65183A66399_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_A2C32553_BFC3_965E_41B5_F65183A66399_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A3946BF6_BFCF_F246_41E5_A2F7E4800A48"
},
{
 "levels": [
  {
   "url": "media/popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A3F89A81_BFC2_92BA_41D0_59A2EF0EFDF7"
},
{
 "items": [
  {
   "media": "this.video_AAA76873_BFC2_BE5E_41E1_184655FD59A8",
   "start": "this.viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB27854B_D696_B846_41E2_FBC1A67BBDEB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB27854B_D696_B846_41E2_FBC1A67BBDEB, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9VideoPlayer)",
   "player": "this.viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9VideoPlayer"
  }
 ],
 "id": "PlayList_DB27854B_D696_B846_41E2_FBC1A67BBDEB",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_tcap0",
  "this.overlay_3351E481_2373_EF75_41C1_6F673F6036A9",
  "this.overlay_3AE1C3B8_2984_1072_41C0_24BC9F67EE9D",
  "this.overlay_3DD2ED8E_2984_102E_41C0_D109E9A33EE5"
 ],
 "hfovMin": "150%",
 "label": "Dalam Candi 1",
 "id": "panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7827C51_D692_6842_41E0_0FBCE2242E14",
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9D40EA6_D692_68CE_41D2_0D88E7884676",
 "initialPosition": {
  "yaw": -30.86,
  "class": "PanoramaCameraPosition",
  "pitch": -9.55
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9E97F15_D692_69C2_41E6_A4008A4640B9",
 "initialPosition": {
  "yaw": -72.73,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AD1F551C_BFC7_B7CA_41D0_83766E949668_t.jpg",
 "width": 1920,
 "label": "Nggaret Bumi",
 "loop": false,
 "id": "video_AD1F551C_BFC7_B7CA_41D0_83766E949668",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AD1F551C_BFC7_B7CA_41D0_83766E949668.mp4"
 }
},
{
 "levels": [
  {
   "url": "media/popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A3E1DA8C_BFC2_92CA_41D1_BBB8AC476C54"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_tcap0",
  "this.overlay_33120F2E_236D_F98F_41AD_1BA599CCA9AD",
  "this.overlay_38F4828E_239C_A88F_416F_A2170FDDED4F",
  "this.overlay_3F9B448F_239F_E88C_41C0_0397FF2AA029"
 ],
 "hfovMin": "150%",
 "label": "1783771039771",
 "id": "panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D86BEDFF_D692_683E_41C7_49E36D05D0AD",
 "initialPosition": {
  "yaw": 161.63,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_DA12B675_C28B_D2CD_41E2_67A6F708B00F",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 7.69,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4",
 "yaw": 10.81,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -23.35,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D90A3030_D692_57C2_41CA_9FB36F5FCB14",
 "initialPosition": {
  "yaw": 11.76,
  "class": "PanoramaCameraPosition",
  "pitch": -28.65
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D81FEE3D_D692_6BC2_41C7_6B908B04AB8D",
 "initialPosition": {
  "yaw": 153.55,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C_t.jpg",
 "width": 1920,
 "label": "Gotong Royong",
 "loop": false,
 "id": "video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A438990_5137_8477_41C8_673E3413256C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_tcap0",
  "this.overlay_3345359F_2374_688D_417A_B949B06E825C",
  "this.overlay_3FD74259_298D_F098_41B8_3AA1DB75F3C1",
  "this.overlay_3F7E1564_2984_1089_41C4_6B8C3DA7C17A",
  "this.overlay_A851608C_BFC7_AECA_41CE_389E72150B35",
  "this.overlay_AA71DEDF_BFC1_B246_41D7_6D778D38E801",
  "this.popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF"
 ],
 "hfovMin": "150%",
 "label": "1783771038700",
 "id": "panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8773DA9_D692_68C2_41D1_06BA11ABCCF1",
 "initialPosition": {
  "yaw": 167.51,
  "class": "PanoramaCameraPosition",
  "pitch": -20.57
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 6.15,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D",
 "yaw": 36.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -27.77,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9FD4EFF_D692_683E_41E6_8AB4F45F0A34",
 "initialPosition": {
  "yaw": 22.78,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 }
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DD101C83_D692_A8C6_41E6_70A6C0FB8DA8",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window480"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9DD4EBD_D692_68C2_41E0_615CC9FD0992",
 "initialPosition": {
  "yaw": 158.69,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_tcap0",
  "this.overlay_332CAB88_236D_B973_41B3_8EB4D9594452",
  "this.overlay_3F8B79CA_239C_B8F7_41C0_714789B16BB6",
  "this.overlay_3EA33D7B_239D_B995_41A6_C97CADE7CBE4"
 ],
 "hfovMin": "150%",
 "label": "1783771039811",
 "id": "panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_tcap0",
  "this.overlay_3359796C_2375_B9B3_41BB_748556345D9B",
  "this.overlay_30EE907D_2984_1120_41B3_240025FB6FFE",
  "this.overlay_3029312C_298C_F338_4177_C6AABE2B030B",
  "this.overlay_330A4914_2984_1331_41C1_6E9C1CBDF647",
  "this.overlay_3B394425_2E12_980D_41C7_152CC393A680",
  "this.overlay_389E5D1D_2E15_A83D_41B4_CE7FC0A8EB9E",
  "this.popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D",
  "this.popup_A838B69C_BFC1_92CA_41D8_A3477029A142",
  "this.overlay_AA91FA99_BFC3_92CA_41A9_496F531F7C69",
  "this.overlay_A80A106E_BFC2_EE46_41DE_7EAEE8E0511D"
 ],
 "hfovMin": "150%",
 "label": "1783771038462",
 "id": "panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9461FC1_D692_6842_41E3_EAEEAC8ECDD7",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_A337F7ED_BF42_924A_419C_AD82A047D64D_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A337F7ED_BF42_924A_419C_AD82A047D64D_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_A337F7ED_BF42_924A_419C_AD82A047D64D_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_A76BC37E_BF46_B246_41D1_F7BA9E4D2395"
},
{
 "items": [
  {
   "media": "this.video_D1455347_C285_D2CD_41E3_E2AA7DE1EF48",
   "start": "this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C61BAB31_D692_69C2_41C3_D7B834B76432, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C61BAB31_D692_69C2_41C3_D7B834B76432, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607VideoPlayer)",
   "player": "this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607VideoPlayer"
  }
 ],
 "id": "playList_C61BAB31_D692_69C2_41C3_D7B834B76432",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_A337F7ED_BF42_924A_419C_AD82A047D64D",
 "yaw": 99.01,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A337F7ED_BF42_924A_419C_AD82A047D64D_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -16.36,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D993BF2B_D692_69C7_41E0_27D00CDBDB92",
 "initialPosition": {
  "yaw": 89.63,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 }
},
{
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_ADCECF05_BFC6_73BA_41DA_56D134F27189_t.jpg",
 "width": 1920,
 "label": "Nadah Banyu",
 "loop": false,
 "id": "video_ADCECF05_BFC6_73BA_41DA_56D134F27189",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_ADCECF05_BFC6_73BA_41DA_56D134F27189.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D83F5E7B_D692_6846_41E2_9C0F9CB00446",
 "initialPosition": {
  "yaw": 135.18,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_tcap0",
  "this.overlay_33598103_2374_E975_41A5_F03B3B489B46",
  "this.overlay_3DEFF370_2984_30D3_41BA_D29DDE031346",
  "this.overlay_3F759ACE_2984_11DE_4190_A73AA5F64524",
  "this.overlay_3DE9F666_2E15_980F_41B8_86B0FFCB919B",
  "this.overlay_ACD04009_BFC3_ADCA_41D5_2567AF6323E2",
  "this.overlay_A80DFE8D_BFC6_92CA_41E7_73CE5DB94D4F",
  "this.popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921"
 ],
 "hfovMin": "150%",
 "label": "Orang-orang keluar",
 "id": "panorama_5A43757C_5137_8CA8_41C1_78D5F279C356",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_t.jpg"
},
{
 "class": "MediaAudio",
 "data": {
  "label": "YTDown.com_YouTube_Kidung-Hanacaraka-Sindy-Purbawati-Offici_Media_0FGUxAG_piU_009_128k"
 },
 "id": "audio_00B4E308_2E0E_7803_41C1_54FCCF1C32F6",
 "audio": {
  "mp3Url": "media/audio_00B4E308_2E0E_7803_41C1_54FCCF1C32F6.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_00B4E308_2E0E_7803_41C1_54FCCF1C32F6.ogg"
 },
 "autoplay": true
},
{
 "rotationY": 0,
 "yaw": -11.98,
 "hfov": 10.13,
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_ABD53239_BFC2_EDCA_41AA_88CB415707C1",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -10.39,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%",
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AAA76873_BFC2_BE5E_41E1_184655FD59A8.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9C89ED3_D692_6846_41C7_ED916383F540",
 "initialPosition": {
  "yaw": 19.1,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D973AFD7_D692_684E_41C1_13452D690F07",
 "initialPosition": {
  "yaw": -7.35,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_tcap0",
  "this.overlay_3346A410_236C_AF93_41AF_DC9AE06F9182",
  "this.overlay_3DF32515_2394_699D_419A_45317C2BB268",
  "this.overlay_344A4DC5_299C_32C4_41B0_BB7FB670CDD9"
 ],
 "hfovMin": "150%",
 "label": "1783771039369",
 "id": "panorama_5A43744C_5136_8CEF_41CF_89CEC401F068",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C77B4CF3_D692_6846_41DF_FC9FFDE7B20A",
 "initialPosition": {
  "yaw": -3.67,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9B58F6B_D692_6846_41E1_66820D686A0C",
 "initialPosition": {
  "yaw": 172.65,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7B76C7D_D692_6842_41D4_50D7BA7DED29",
 "initialPosition": {
  "yaw": 171.18,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57_tcap0",
  "this.overlay_335771D2_2373_A897_4187_2780ED2616BA",
  "this.overlay_39C5CB7B_239C_B995_41B0_AF27B1F7346C",
  "this.overlay_3919E559_239D_E994_41C0_C6C9DE14A626"
 ],
 "hfovMin": "150%",
 "label": "1783771039660",
 "id": "panorama_5A43996F_5137_84A9_41D3_72808114DE57",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D96E3004_D692_57C2_41D2_19BF401A9FB8",
 "initialPosition": {
  "yaw": 160.16,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A52C218_5136_8468_41C0_43396E48DA5B_tcap0",
  "this.overlay_3353872E_2374_E98F_41B0_4F3EE3393863",
  "this.overlay_3A4CB933_2394_5995_41BE_F8A762623E40",
  "this.overlay_38CED7A1_2394_68B5_41B5_B858D8EE4631"
 ],
 "hfovMin": "150%",
 "label": "1783771039728",
 "id": "panorama_5A52C218_5136_8468_41C0_43396E48DA5B",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43996F_5137_84A9_41D3_72808114DE57"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_t.jpg"
},
{
 "items": [
  {
   "media": "this.video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C",
   "start": "this.viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB27554A_D696_B846_41E3_D5EBD4078AB2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB27554A_D696_B846_41E3_D5EBD4078AB2, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636CVideoPlayer)",
   "player": "this.viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636CVideoPlayer"
  }
 ],
 "id": "PlayList_DB27554A_D696_B846_41E3_D5EBD4078AB2",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921",
 "yaw": -3.4,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -5.45,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "85%",
 "popupMaxWidth": "85%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A51081C_5136_846F_419E_1CACC7803CC3_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_tcap0",
  "this.overlay_3058CC11_236C_BF95_41AA_2A057BAA1AC6",
  "this.overlay_3619D8FB_23B4_7895_41BE_D416B8E9D80A",
  "this.overlay_304147FA_2984_3EEF_41B6_B0785CD1BB44"
 ],
 "hfovMin": "150%",
 "label": "1783771040013",
 "id": "panorama_5C032C20_5136_BC58_41CA_82A951B15BD2",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D9ABFF96_D692_68CE_41E2_85376DC72E47",
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 }
},
{
 "viewerArea": "this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607",
 "class": "VideoPlayer",
 "id": "ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8097E52_D692_6846_41E1_0DA428C29C45",
 "initialPosition": {
  "yaw": -30.86,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D87AFDBF_D692_683E_41DD_6B003C6DC59E",
 "initialPosition": {
  "yaw": -13.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C78DFC67_D692_684E_41E2_15A57FC3E770",
 "initialPosition": {
  "yaw": -8.08,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 }
},
{
 "class": "MediaAudio",
 "data": {
  "label": "YTDown.com_YouTube_Kidung-Hanacaraka-Sindy-Purbawati-Offici_Media_0FGUxAG_piU_009_128k"
 },
 "id": "audio_066C0356_23AC_699F_4192_5FAB4378E192",
 "audio": {
  "mp3Url": "media/audio_066C0356_23AC_699F_4192_5FAB4378E192.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_066C0356_23AC_699F_4192_5FAB4378E192.ogg"
 },
 "autoplay": true
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DDEFEC7E_D692_A83E_41E7_647E56B429E0",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636C"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window479"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.video_AF24BAFA_BFC6_924E_41E7_B27F0325096D",
   "start": "this.viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DB26A548_D696_B842_41E7_63F505F4F541, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DB26A548_D696_B842_41E7_63F505F4F541, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BBVideoPlayer)",
   "player": "this.viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BBVideoPlayer"
  }
 ],
 "id": "PlayList_DB26A548_D696_B842_41E7_63F505F4F541",
 "class": "PlayList"
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DDED2C7C_D692_A842_41D8_3AC4A556A2CD",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window477"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D939C047_D692_584E_41E0_B724ABAE2FA6",
 "initialPosition": {
  "yaw": -124.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D8346E66_D692_684E_41E8_7BC1FB824CE4",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -12.49
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.panorama_5A438990_5137_8477_41C8_673E3413256C_tcap0",
  "this.overlay_335FFE5A_236C_BB97_4190_DF114D0DC7C7",
  "this.overlay_35529AF6_23AF_F89F_41BA_08EB37257565",
  "this.overlay_34FC674A_23AC_69F7_41B0_923D9673CD74",
  "this.overlay_017F6B21_2393_D9B5_41BF_4F23B06EE9E3"
 ],
 "hfovMin": "150%",
 "label": "1783771039498",
 "id": "panorama_5A438990_5137_8477_41C8_673E3413256C",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_DDEE1C7D_D692_A842_41D7_820A6CAF8DBD",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "paddingRight": 0,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178"
 ],
 "shadowColor": "#000000",
 "propagateClick": false,
 "titlePaddingBottom": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "headerVerticalAlign": "middle",
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window478"
 },
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7193D26_D692_69CE_41CC_0A829447F529",
 "initialPosition": {
  "yaw": 15.43,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 0.5,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 389.2,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "top": 34,
 "paddingRight": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "height": "84.168%",
 "id": "Container_D133549D_C285_D67D_41D2_76542E45C8A8",
 "children": [
  "this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607",
  "this.Button_D47BFF54_C28D_52C3_41BB_E00E47F716F6"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "7.87%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "width": "81.805%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "7.52%",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Tujuan Media"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.3,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "height": "84.303%",
 "id": "Container_DA8F13E3_C284_D1C6_41E4_A0E7657A6F2A",
 "children": [
  "this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3",
  "this.Button_D56EF981_C28F_FE45_41AE_FA31B4D9055E"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "7.98%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "width": "81.715%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "7.58%",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Kondisi Geografi"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.3,
 "scrollBarOpacity": 0.5
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "UIComponent",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "UIComponent2942"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.55,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 }
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [],
 "class": "ZoomImage",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "ZoomImage2943"
 },
 "shadow": false,
 "visible": false,
 "scaleMode": "custom",
 "backgroundOpacity": 1
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "iconHeight": 20,
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "backgroundOpacity": 0.3,
 "right": 10,
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconColor": "#000000",
 "rollOverIconColor": "#666666",
 "minHeight": 0,
 "top": 10,
 "borderColor": "#000000",
 "paddingRight": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "fontColor": "#FFFFFF",
 "class": "CloseButton",
 "gap": 5,
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "fontStyle": "normal",
 "shadow": false,
 "visible": false,
 "iconLineWidth": 5,
 "fontWeight": "normal",
 "textDecoration": "none",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "CloseButton2944"
 }
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "hfov": 69,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -73.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 50.74,
 "bleaching": 0.7,
 "id": "overlay_33798DF0_236C_7893_41C1_75620570115D",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28, this.camera_D9B58F6B_D692_6846_41E1_66820D686A0C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_313D396A_2E3D_A807_41B8_A7E824A3078C",
   "yaw": 157.73,
   "pitch": -18.38,
   "distance": 100,
   "hfov": 17.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": 157.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.38
  }
 ],
 "id": "overlay_3A8576A4_2397_A8B3_41B1_346A57F4EF08",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43996F_5137_84A9_41D3_72808114DE57, this.camera_D989AF55_D692_684D_41D4_45D4DF417E08); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D418D4A5_C30E_AF3C_41DA_22F00BE21339",
   "yaw": -8.24,
   "pitch": -13.3,
   "distance": 100,
   "hfov": 18.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.37,
   "yaw": -8.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.3
  }
 ],
 "id": "overlay_3A25A70B_2394_A975_41BA_DD767576331B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "viewerArea": "this.viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4",
 "class": "VideoPlayer",
 "id": "viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4VideoPlayer",
 "displayPlaybackBar": true
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -168.47,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 56.23,
 "bleaching": 0.7,
 "id": "overlay_335166F1_2374_6895_41C0_57C317286FD3",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356, this.camera_C75D5CC3_D692_6846_41EA_56E7DCA07E45); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312B7973_2E3D_A805_41C0_4DBE07DC235B",
   "yaw": -83.26,
   "pitch": -22.22,
   "distance": 100,
   "hfov": 17.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.47,
   "yaw": -83.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ],
 "id": "overlay_3C632DB4_298C_13B2_41B2_5E883BA76F2C",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15, this.camera_C74D0CDC_D692_6842_41E2_57E0D16C96CC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312BD974_2E3D_A803_41AB_FE1C618725CD",
   "yaw": 85.9,
   "pitch": -22.63,
   "distance": 50,
   "hfov": 15.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.84,
   "yaw": 85.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.63
  }
 ],
 "id": "overlay_3FA5EEEC_298C_11A6_41A9_98754DBCA8F2",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 36.38,
   "yaw": -9.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0_HS_2_0_map.gif",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0_HS_2_0.png",
      "width": 601,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "yaw": -9.09,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.42,
   "distance": 50,
   "hfov": 36.38
  }
 ],
 "id": "overlay_AA9EB3C1_BFDF_F2BD_41C1_49CFB1160A5F",
 "data": {
  "label": "Pelestarian Budaya"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_ABD53239_BFC2_EDCA_41AA_88CB415707C1, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DD101C83_D692_A8C6_41E6_70A6C0FB8DA8, this.video_AAA76873_BFC2_BE5E_41E1_184655FD59A8, this.PlayList_DB27854B_D696_B846_41E2_FBC1A67BBDEB, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -10.39,
   "yaw": -11.98,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -11.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.39
  }
 ],
 "id": "overlay_A99EA89F_BFC1_BEC6_41E4_7298059916CE",
 "data": {
  "label": "Image"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2941"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "hfov": 76.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43487E_5137_84AB_41D0_571CB86B405F_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -61.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.68,
 "bleaching": 0.7,
 "id": "overlay_336C44A7_2373_A8BD_416A_E649A53BAC84",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 61.94,
   "yaw": 51.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_0_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_0_0.png",
      "width": 1024,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "yaw": 51.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.27,
   "distance": 50,
   "hfov": 61.94
  }
 ],
 "id": "overlay_01A5D9E9_249F_B8B5_41A3_B97087FDE003",
 "data": {
  "label": "Candi Songgoriti"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068, this.camera_C7193D26_D692_69CE_41CC_0A829447F529); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3137E96E_2E3D_A81F_41AC_4789B466B130",
   "yaw": -155.22,
   "pitch": -29.84,
   "distance": 50,
   "hfov": 14.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.88,
   "yaw": -155.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.84
  }
 ],
 "id": "overlay_38B8ECD6_2984_103E_410C_958ACF82FBC0",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1, this.camera_D8773DA9_D692_68C2_41D1_06BA11ABCCF1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3134596E_2E3D_A81F_41C0_1D273745A26C",
   "yaw": 28.86,
   "pitch": -41.16,
   "distance": 50,
   "hfov": 12.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.92,
   "yaw": 28.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.16
  }
 ],
 "id": "overlay_3A223B74_298C_10F2_41BE_D69C307B1BE3",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2, this.camera_D87AFDBF_D692_683E_41DD_6B003C6DC59E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3134196F_2E3D_A81D_41AE_33D116A6F7BD",
   "yaw": -2.14,
   "pitch": -8.59,
   "distance": 100,
   "hfov": 9.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.75,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ],
 "id": "overlay_3BD60DDD_298C_3032_41A8_561277862CBE",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_AB221D4E_BFC2_F646_41C3_E6BC9BFFEEA4, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A3A60BDC_BFCF_F24A_41D4_121AA70D10C9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0_HS_5_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ]
   },
   "pitch": -23.35,
   "yaw": 10.81,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.69,
   "yaw": 10.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -23.35
  }
 ],
 "id": "overlay_AB63EB3F_BFC2_73C6_41E4_328C4063BD11",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 32.47,
   "yaw": 12.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0_HS_6_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_0_HS_6_0.png",
      "width": 555,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   },
   "yaw": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.89,
   "distance": 50,
   "hfov": 32.47
  }
 ],
 "id": "overlay_AB73E20B_BFC3_EDCD_41CC_E32023A579DA",
 "data": {
  "label": "Konservasi Air"
 }
},
{
 "hfov": 66,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A51081C_5136_846F_419E_1CACC7803CC3_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -125.37,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 31.8,
 "bleaching": 0.7,
 "id": "overlay_333AD6A7_236D_A8BD_41BF_837D840A94BA",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8, this.camera_D86BEDFF_D692_683E_41C7_49E36D05D0AD); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3122997A_2E3D_A807_41BF_E37ABD330CF5",
   "yaw": 163.77,
   "pitch": -13.02,
   "distance": 100,
   "hfov": 18.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.39,
   "yaw": 163.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.02
  }
 ],
 "id": "overlay_305AFB66_23BC_B9BF_41B6_90AA369CAF24",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_AE4BA02E_BFC6_ADC6_41D9_EDF21BF03983, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DD128C85_D692_A8C2_41E7_C590CEC72A2F, this.video_AD1F551C_BFC7_B7CA_41D0_83766E949668, this.PlayList_DB24154C_D696_B842_41C5_9EE598106923, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_1_0.png",
      "width": 315,
      "class": "ImageResourceLevel",
      "height": 276
     }
    ]
   },
   "pitch": -41.52,
   "yaw": 22.2,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.29,
   "yaw": 22.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.52
  }
 ],
 "id": "overlay_389293BE_2E0D_987C_41AD_0F0947B1D97D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 48.29,
   "yaw": 52.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_2_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -24.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_2_0.png",
      "width": 874,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ]
   },
   "yaw": 52.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.06,
   "distance": 50,
   "hfov": 48.29
  }
 ],
 "id": "overlay_A8BBA5D7_BFC6_9645_41D7_849C5564C84F",
 "data": {
  "label": "Nggaret Bumi"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_A2C32553_BFC3_965E_41B5_F65183A66399, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A3946BF6_BFCF_F246_41E5_A2F7E4800A48, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_3_0.png",
      "width": 256,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ]
   },
   "pitch": -42.79,
   "yaw": 77.32,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.38,
   "yaw": 77.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.79
  }
 ],
 "id": "overlay_A30BB23C_BFC3_ADCA_41D4_40B4A11E5684",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 9.99,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.35,
 "bleaching": 0.7,
 "id": "overlay_33594B50_2375_D993_41BC_DF2D5F0603CA",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15, this.camera_D939C047_D692_584E_41E0_B724ABAE2FA6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31297975_2E3D_A80D_41B8_895CFDD28E2C",
   "yaw": -87.37,
   "pitch": -36.98,
   "distance": 100,
   "hfov": 15.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.08,
   "yaw": -87.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.98
  }
 ],
 "id": "overlay_315D14A1_29BC_11E1_4160_AC58BF7CC3AE",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9, this.camera_D90A3030_D692_57C2_41CA_9FB36F5FCB14); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3129D975_2E3D_A80D_41BD_11ED2F55A388",
   "yaw": 82.78,
   "pitch": -26.2,
   "distance": 100,
   "hfov": 16.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.94,
   "yaw": 82.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.2
  }
 ],
 "id": "overlay_3174DB03_2984_70C9_4190_8CCDC841B4F6",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer 5"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 35.24,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 57.05,
 "bleaching": 0.7,
 "id": "overlay_335A0731_2373_E995_4189_810BE07D7246",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1, this.camera_D9D40EA6_D692_68CE_41D2_0D88E7884676); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31355971_2E3D_A804_41AE_14B5EE8A4ACA",
   "yaw": -9.13,
   "pitch": -20.57,
   "distance": 100,
   "hfov": 17.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.67,
   "yaw": -9.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.57
  }
 ],
 "id": "overlay_3D85BCE6_299C_101E_41C1_F663F6EE6ACD",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356, this.camera_D828FE90_D692_68C2_41DE_D7199149F0B4); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31350971_2E3D_A804_41B1_828139B894FB",
   "yaw": -113.49,
   "pitch": -23.46,
   "distance": 50,
   "hfov": 15.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.74,
   "yaw": -113.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.46
  }
 ],
 "id": "overlay_3A797CDB_2984_7024_41B4_4E223A53E9BB",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_ABD5F887_BFC1_9EC6_41C0_B8BCB2DB7857, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DDEE1C7D_D692_A842_41D7_820A6CAF8DBD, this.video_ACE577D8_BFDE_924A_41D1_BA33F428DE12, this.PlayList_DB27054A_D696_B846_41CD_7A10465A1403, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_2_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": -4.28,
   "yaw": -104.89,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.62,
   "yaw": -104.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.28
  }
 ],
 "id": "overlay_ACAF85A1_BFC7_96FA_41E5_F9B8DAFA05BF",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 24.36,
   "yaw": -105.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_3_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_3_0.png",
      "width": 402,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "yaw": -105.31,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.67,
   "distance": 50,
   "hfov": 24.36
  }
 ],
 "id": "overlay_ACC55867_BFC6_9E46_41E2_D0A0A2681905",
 "data": {
  "label": "Candi Songgoriti"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_AA709B9F_BFC3_B2C6_4196_354F610AE468, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DDEFEC7E_D692_A83E_41E7_647E56B429E0, this.video_A9C75801_BFC2_7DBA_41DB_DFDAED1D135C, this.PlayList_DB27554A_D696_B846_41E3_D5EBD4078AB2, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_4_0.png",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ]
   },
   "pitch": -12.21,
   "yaw": -172.86,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.45,
   "yaw": -172.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.21
  }
 ],
 "id": "overlay_AA8C394E_BFC6_9E46_41E4_5FF459918705",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 31.48,
   "yaw": -169.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_5_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_5_0.png",
      "width": 522,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "yaw": -169.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.5,
   "distance": 50,
   "hfov": 31.48
  }
 ],
 "id": "overlay_A98666D9_BFC1_924A_41DB_BC73BF57940A",
 "data": {
  "label": "Gotong Royong"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 52.23,
   "yaw": 98.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_6_0_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_6_0.png",
      "width": 875,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "yaw": 98.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.39,
   "distance": 50,
   "hfov": 52.23
  }
 ],
 "id": "overlay_AA87A499_BF41_96CD_41D2_93148D3933E2",
 "data": {
  "label": "Menjaga Air, Merawat Tradisi"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_A337F7ED_BF42_924A_419C_AD82A047D64D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A76BC37E_BF46_B246_41D1_F7BA9E4D2395, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_7_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": -16.36,
   "yaw": 99.01,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.14,
   "yaw": 99.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_0_HS_7_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ],
 "id": "overlay_A3EEDC6F_BF42_9645_41E4_249563E51A85",
 "data": {
  "label": "Image"
 }
},
{
 "camera": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_camera",
 "media": "this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C62CFB8E_D692_68DE_41E6_2DAE9539A3DF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C62CFB8E_D692_68DE_41E6_2DAE9539A3DF"
},
{
 "camera": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_camera",
 "media": "this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C7D2AB99_D692_68C2_41C0_8E0DFB2A5AE9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C7D2AB99_D692_68C2_41C0_8E0DFB2A5AE9"
},
{
 "camera": "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3_camera",
 "media": "this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C7D5ABA1_D692_68C2_41DA_B3C1DA61C4BA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C7D5ABA1_D692_68C2_41DA_B3C1DA61C4BA"
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -130.86,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 35.91,
 "bleaching": 0.7,
 "id": "overlay_3375F09B_236C_6895_41B7_9E991439AD28",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A, this.camera_D83F5E7B_D692_6846_41E2_9C0F9CB00446); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3131E96D_2E3D_A81D_419D_C841E80FB0A4",
   "yaw": 164.32,
   "pitch": -21.47,
   "distance": 100,
   "hfov": 17.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.57,
   "yaw": 164.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.47
  }
 ],
 "id": "overlay_3EF4ACE8_2393_B8B3_41B0_FC33DE7E5ECC",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43744C_5136_8CEF_41CF_89CEC401F068, this.camera_D8346E66_D692_684E_41E8_7BC1FB824CE4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3136596D_2E3D_A81D_41AD_5EC8C047A7D8",
   "yaw": -10.78,
   "pitch": -30.11,
   "distance": 100,
   "hfov": 16.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.33,
   "yaw": -10.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.11
  }
 ],
 "id": "overlay_3DA4C2DE_2394_E88F_4176_3DC9D784F554",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 325.19,
  "y": 592.26,
  "width": 72.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_0.png",
     "width": 72,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 84.6
 },
 "map": {
  "width": 72.27,
  "x": 325.19,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 18
    }
   ]
  },
  "y": 592.26,
  "offsetY": 0,
  "height": 84.6,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_0865765F_299C_3E78_41B2_1C54C375B719",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 526.3,
  "y": 688.16,
  "width": 65.94,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_1.png",
     "width": 65,
     "class": "ImageResourceLevel",
     "height": 70
    }
   ]
  },
  "height": 70.16
 },
 "map": {
  "width": 65.94,
  "x": 526.72,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "y": 688.67,
  "offsetY": 0,
  "height": 70.16,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_0BC6ECAD_299C_32D5_419F_A8BCB3D0C908",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 583.51,
  "y": 57.95,
  "width": 63.52,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_2.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 70
    }
   ]
  },
  "height": 70.9
 },
 "map": {
  "width": 63.52,
  "x": 583.98,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_08159459_298C_125A_41BE_16075C374136_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "y": 58.38,
  "offsetY": 0,
  "height": 70.9,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_0BCBAF51_299C_0E4E_41B9_EA133A2AD95F",
 "data": {
  "label": "Image"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2940"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "hfov": 69,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -44.1,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 49.92,
 "bleaching": 0.7,
 "id": "overlay_334CDC9B_236C_F895_41A8_04ECC3E00B31",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A438990_5137_8477_41C8_673E3413256C, this.camera_D99F9F41_D692_6842_41E8_3B0207388479); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3139194E_2E3D_A81F_41C0_2A5C4479616B",
   "yaw": -1.37,
   "pitch": -12.68,
   "distance": 100,
   "hfov": 18.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.41,
   "yaw": -1.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "id": "overlay_35E557EA_23AC_68B7_41BA_0DDFE9A6F417",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 42.05,
   "yaw": -107.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_1_0.png",
      "width": 698,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ]
   },
   "yaw": -107.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.72,
   "distance": 50,
   "hfov": 42.05
  }
 ],
 "id": "overlay_000244D4_2394_6893_4182_3A61915E28C0",
 "data": {
  "label": "Sumber Banyu Biru\u000a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_AF0639AB_BFC1_BECE_41BC_74903649A9DD, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DDEC7C79_D692_A844_41E9_A7F8D7E6E7F2, this.video_AF24BAFA_BFC6_924E_41E7_B27F0325096D, this.PlayList_DB26A548_D696_B842_41E7_63F505F4F541, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_2_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -12.11,
   "yaw": -108.62,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.07,
   "yaw": -108.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.11
  }
 ],
 "id": "overlay_3C0CBAFA_2E73_A807_41C1_B3A946D29EC4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_A75C90D6_BFC6_AE46_41C0_FDCD4287D5B2, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DDED2C7C_D692_A842_41D8_3AC4A556A2CD, this.video_A58B1E29_BFC6_95CD_41D7_01DB9D89BC3B, this.PlayList_DB26E549_D696_B842_41E7_F81087E2B8B9, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -19.66,
   "yaw": -65.1,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": -65.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.66
  }
 ],
 "id": "overlay_ACC0F678_BFC3_B24A_41D4_9A64AA133A72",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 32.64,
   "yaw": -65.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_4_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_0_HS_4_0.png",
      "width": 549,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "yaw": -65.57,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.99,
   "distance": 50,
   "hfov": 32.64
  }
 ],
 "id": "overlay_ABD02FAF_BFC2_92C6_41D3_9CA90A96EBA9",
 "data": {
  "label": "Resik Dandang"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -156.66,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 40.86,
 "bleaching": 0.7,
 "id": "overlay_3308121D_236C_6B8D_41AF_0C1E4AF6B964",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A51081C_5136_846F_419E_1CACC7803CC3, this.camera_D8175E29_D692_6BC2_41BA_4F94B9AAEA15); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312DF979_2E3D_A804_41BC_27BAA75C3F50",
   "yaw": -11.81,
   "pitch": -22.36,
   "distance": 100,
   "hfov": 17.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.46,
   "yaw": -11.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.36
  }
 ],
 "id": "overlay_3779F94A_23BC_59F7_41A9_06C807C82845",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C032C20_5136_BC58_41CA_82A951B15BD2, this.camera_D8125E13_D692_6BC6_41E4_F05E9D78C6EB); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3122497A_2E3D_A807_41C1_8EE2291225EB",
   "yaw": 154.16,
   "pitch": -15.56,
   "distance": 100,
   "hfov": 18.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.18,
   "yaw": 154.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.56
  }
 ],
 "id": "overlay_36377E2D_23B4_FB8D_418E_E83E64895BE4",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BB",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2935"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "viewerArea": "this.viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491",
 "class": "VideoPlayer",
 "id": "viewer_uidC6293B83_D692_68C6_41E3_FC636DA7A491VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178",
 "class": "VideoPlayer",
 "id": "viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178VideoPlayer",
 "displayPlaybackBar": true
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 2.3,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 46.62,
 "bleaching": 0.7,
 "id": "overlay_2C916D61_236C_59B4_418C_A4E39DF546BC",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A438990_5137_8477_41C8_673E3413256C, this.camera_C7B76C7D_D692_6842_41D4_50D7BA7DED29); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_313C6969_2E3D_A805_41C5_AE31C7227E95",
   "yaw": 163.7,
   "pitch": -28.62,
   "distance": 100,
   "hfov": 15.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.97,
   "yaw": 163.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.62
  }
 ],
 "id": "overlay_3B89EE54_23AC_FB93_4192_F636ED86647B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137, this.camera_C78DFC67_D692_684E_41E2_15A57FC3E770); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_313CD96A_2E3D_A807_4197_0259FD0FFF2A",
   "yaw": -5.01,
   "pitch": -14.88,
   "distance": 100,
   "hfov": 18.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.24,
   "yaw": -5.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.88
  }
 ],
 "id": "overlay_3A60305A_2394_6797_41B7_5842A1A10597",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 68.28,
   "yaw": -96.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_2_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_2_0.png",
      "width": 1157,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ]
   },
   "yaw": -96.34,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 12.71,
   "distance": 50,
   "hfov": 68.28
  }
 ],
 "id": "overlay_070B5927_239F_D9BD_41BD_C0E5813D8DF2",
 "data": {
  "label": "Makam Mbah Patok"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_AF6BD198_BFC6_6ECA_41E0_153E4EB78688, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A3F89A81_BFC2_92BA_41D0_59A2EF0EFDF7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -2.29,
   "yaw": -101.89,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -101.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.29
  }
 ],
 "id": "overlay_3D35E61D_2DF2_B83D_41AE_BADEEDAF62D4",
 "data": {
  "label": "Image"
 }
},
{
 "viewerArea": "this.viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3",
 "class": "VideoPlayer",
 "id": "viewer_uidC625CB80_D692_68C2_41E6_ACEA8104E9E3VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9",
 "class": "VideoPlayer",
 "id": "viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9VideoPlayer",
 "displayPlaybackBar": true
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 34.15,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 64.74,
 "bleaching": 0.7,
 "id": "overlay_3351E481_2373_EF75_41C1_6F673F6036A9",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F, this.camera_D8610DD6_D692_684E_41D0_B887776A72BC); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31344970_2E3D_A803_41BE_50930EAFAD7C",
   "yaw": -28.69,
   "pitch": -28.19,
   "distance": 100,
   "hfov": 16.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.64,
   "yaw": -28.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.19
  }
 ],
 "id": "overlay_3AE1C3B8_2984_1072_41C0_24BC9F67EE9D",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA, this.camera_D8674DEB_D692_6846_41E1_59A74450E938); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31342970_2E3D_A803_41BD_7E39480EA6AE",
   "yaw": 168.98,
   "pitch": -41.85,
   "distance": 100,
   "hfov": 14.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.06,
   "yaw": 168.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.85
  }
 ],
 "id": "overlay_3DD2ED8E_2984_102E_41C0_D109E9A33EE5",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -80.34,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.9,
 "bleaching": 0.7,
 "id": "overlay_33120F2E_236D_F98F_41AD_1BA599CCA9AD",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43996F_5137_84A9_41D3_72808114DE57, this.camera_D96E3004_D692_57C2_41D2_19BF401A9FB8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3130596C_2E3D_A803_41C1_5D5543F4CBA2",
   "yaw": 155.74,
   "pitch": -21.47,
   "distance": 100,
   "hfov": 17.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.57,
   "yaw": 155.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.47
  }
 ],
 "id": "overlay_38F4828E_239C_A88F_416F_A2170FDDED4F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A, this.camera_D91CE01A_D692_57C6_41E4_5EA9CC760299); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3130096C_2E3D_A803_41A2_B4DF4549E35A",
   "yaw": 5.97,
   "pitch": -23.7,
   "distance": 100,
   "hfov": 15.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.78,
   "yaw": 5.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.7
  }
 ],
 "id": "overlay_3F9B448F_239F_E88C_41C0_0397FF2AA029",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -17.74,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 71.88,
 "bleaching": 0.7,
 "id": "overlay_3345359F_2374_688D_417A_B949B06E825C",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63, this.camera_D9E97F15_D692_69C2_41E6_A4008A4640B9); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31286974_2E3D_A803_41B2_F6004F37E559",
   "yaw": -89.81,
   "pitch": -35.33,
   "distance": 50,
   "hfov": 14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14,
   "yaw": -89.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.33
  }
 ],
 "id": "overlay_3FD74259_298D_F098_41B8_3AA1DB75F3C1",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60, this.camera_D993BF2B_D692_69C7_41E0_27D00CDBDB92); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3128D974_2E3D_A803_4192_BFBABF724FCA",
   "yaw": 51.79,
   "pitch": -27.03,
   "distance": 50,
   "hfov": 15.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.29,
   "yaw": 51.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.03
  }
 ],
 "id": "overlay_3F7E1564_2984_1089_41C4_6B8C3DA7C17A",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 36.13,
   "yaw": -0.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0_HS_2_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0_HS_2_0.png",
      "width": 598,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "yaw": -0.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.06,
   "distance": 50,
   "hfov": 36.13
  }
 ],
 "id": "overlay_A851608C_BFC7_AECA_41CE_389E72150B35",
 "data": {
  "label": "Sumber Air Dingin"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_AA5F1F95_BFC1_92DA_41D9_A9EA218E1DDF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A777F381_BF46_B2BA_41C9_A92BA4C534A1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ]
   },
   "pitch": -10.32,
   "yaw": -1.2,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -1.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.32
  }
 ],
 "id": "overlay_AA71DEDF_BFC1_B246_41D7_6D778D38E801",
 "data": {
  "label": "Image"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "99.975%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC621AB76_D692_684E_41E1_FC06D0515DD9",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2939"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 159.07,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.56,
 "bleaching": 0.7,
 "id": "overlay_332CAB88_236D_B973_41B3_8EB4D9594452",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1, this.camera_D81FEE3D_D692_6BC2_41C7_6B908B04AB8D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3130B96C_2E3D_A803_419E_AF219FE3273A",
   "yaw": 137.14,
   "pitch": -26.06,
   "distance": 100,
   "hfov": 16.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.96,
   "yaw": 137.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ],
 "id": "overlay_3F8B79CA_239C_B8F7_41C0_714789B16BB6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7, this.camera_D8097E52_D692_6846_41E1_0DA428C29C45); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3131796D_2E3D_A81D_41C5_D91C75553ED2",
   "yaw": -6.31,
   "pitch": -19.34,
   "distance": 100,
   "hfov": 17.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.81,
   "yaw": -6.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.34
  }
 ],
 "id": "overlay_3EA33D7B_239D_B995_41A6_C97CADE7CBE4",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 57.76,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 69.96,
 "bleaching": 0.7,
 "id": "overlay_3359796C_2375_B9B3_41BB_748556345D9B",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA, this.camera_D9A19F81_D692_68C2_41E8_CF21A77FAA4E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312E4975_2E3D_A80D_41C1_F107474FCBE0",
   "yaw": 137.89,
   "pitch": -27.45,
   "distance": 100,
   "hfov": 13.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": 137.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.45
  }
 ],
 "id": "overlay_30EE907D_2984_1120_41B3_240025FB6FFE",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60, this.camera_D959DFAC_D692_68C2_41E1_43206074768E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312E3976_2E3D_A80F_41C4_AA221A1724AC",
   "yaw": -144.07,
   "pitch": -47.69,
   "distance": 100,
   "hfov": 12.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.71,
   "yaw": -144.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.69
  }
 ],
 "id": "overlay_3029312C_298C_F338_4177_C6AABE2B030B",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43757C_5137_8CA8_41C1_78D5F279C356, this.camera_D9ABFF96_D692_68CE_41E2_85376DC72E47); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312E9976_2E3D_A80F_41C3_CED38EF4091A",
   "yaw": 104.84,
   "pitch": -22.89,
   "distance": 50,
   "hfov": 11.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.51,
   "yaw": 104.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.89
  }
 ],
 "id": "overlay_330A4914_2984_1331_41C1_6E9C1CBDF647",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_AEFB72F2_BFC2_725E_41D4_A16F0050644D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A3E1DA8C_BFC2_92CA_41D1_BBB8AC476C54, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_3_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": -27.77,
   "yaw": 36.71,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.15,
   "yaw": 36.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.77
  }
 ],
 "id": "overlay_3B394425_2E12_980D_41C7_152CC393A680",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_A838B69C_BFC1_92CA_41D8_A3477029A142, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_DD11DC84_D692_A8C2_41E4_0BBBFD5DDBEB, this.video_ADCECF05_BFC6_73BA_41DA_56D134F27189, this.PlayList_DB27D54B_D696_B846_41DA_A1D6E041F4D1, '85%', '85%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_4_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": -31.96,
   "yaw": -19.4,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -19.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.96
  }
 ],
 "id": "overlay_389E5D1D_2E15_A83D_41B4_CE7FC0A8EB9E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 19.98,
   "yaw": -19.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_5_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_5_0.png",
      "width": 428,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "yaw": -19.08,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.53,
   "distance": 50,
   "hfov": 19.98
  }
 ],
 "id": "overlay_AA91FA99_BFC3_92CA_41A9_496F531F7C69",
 "data": {
  "label": "Nadah Banyu"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 23.38,
   "yaw": 38.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_6_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_0_HS_6_0.png",
      "width": 467,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ]
   },
   "yaw": 38.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.28,
   "distance": 50,
   "hfov": 23.38
  }
 ],
 "id": "overlay_A80A106E_BFC2_EE46_41DE_7EAEE8E0511D",
 "data": {
  "label": "Sumber Air Panas"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 34.97,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 73.53,
 "bleaching": 0.7,
 "id": "overlay_33598103_2374_E975_41A5_F03B3B489B46",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43841A_5137_8C6B_41BE_E80827876DCA, this.camera_D9461FC1_D692_6842_41E3_EAEEAC8ECDD7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3135B971_2E3D_A804_41BB_932FBAB9C875",
   "yaw": -84.32,
   "pitch": -27.42,
   "distance": 50,
   "hfov": 12.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": -84.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.42
  }
 ],
 "id": "overlay_3DEFF370_2984_30D3_41BA_D29DDE031346",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63, this.camera_D9600FEE_D692_685E_41EA_4EC709870CCC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312A6973_2E3D_A805_4179_F9BFBBA40944",
   "yaw": 71.73,
   "pitch": -24.35,
   "distance": 100,
   "hfov": 17.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.2,
   "yaw": 71.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ],
 "id": "overlay_3F759ACE_2984_11DE_4190_A73AA5F64524",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9, this.camera_D973AFD7_D692_684E_41C1_13452D690F07); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312AF973_2E3D_A805_419F_B701984D4AF3",
   "yaw": -13.71,
   "pitch": -22.72,
   "distance": 100,
   "hfov": 7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.58,
   "yaw": -13.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.72
  }
 ],
 "id": "overlay_3DE9F666_2E15_980F_41B8_86B0FFCB919B",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 59.66,
   "yaw": -1.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0_HS_3_0_map.gif",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0_HS_3_0.png",
      "width": 993,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "yaw": -1.9,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 6.88,
   "distance": 50,
   "hfov": 59.66
  }
 ],
 "id": "overlay_ACD04009_BFC3_ADCA_41D5_2567AF6323E2",
 "data": {
  "label": "Tujuan Pembangunan Candi"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_AAE52A63_BFC6_B27E_41BF_2E2F077AC921, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_A39BABE6_BFCF_F246_41D6_D9DCFBEFCBAC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0_HS_4_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -5.45,
   "yaw": -3.4,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": -3.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.45
  }
 ],
 "id": "overlay_A80DFE8D_BFC6_92CA_41E7_73CE5DB94D4F",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 84,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": 75.6,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 39.21,
 "bleaching": 0.7,
 "id": "overlay_3346A410_236C_AF93_41AF_DC9AE06F9182",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7, this.camera_C7827C51_D692_6842_41E0_0FBCE2242E14); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3136C96E_2E3D_A81F_41AF_EEAEFEAAEE16",
   "yaw": 15.65,
   "pitch": -15.63,
   "distance": 100,
   "hfov": 18.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.18,
   "yaw": 15.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.63
  }
 ],
 "id": "overlay_3DF32515_2394_699D_419A_45317C2BB268",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F, this.camera_C798FC38_D692_6FC2_41A1_A6764E0C8A3A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3136B96E_2E3D_A81F_4198_853528C26993",
   "yaw": 163.46,
   "pitch": -31.43,
   "distance": 50,
   "hfov": 14.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.64,
   "yaw": 163.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.43
  }
 ],
 "id": "overlay_344A4DC5_299C_32C4_41B0_BB7FB670CDD9",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A43996F_5137_84A9_41D3_72808114DE57_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -7.58,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.17,
 "bleaching": 0.7,
 "id": "overlay_335771D2_2373_A897_4187_2780ED2616BA",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137, this.camera_D9DD4EBD_D692_68C2_41E0_615CC9FD0992); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3133796B_2E3D_A805_41BD_54535D05C74F",
   "yaw": 153.82,
   "pitch": -24.35,
   "distance": 100,
   "hfov": 17.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.2,
   "yaw": 153.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ],
 "id": "overlay_39C5CB7B_239C_B995_41B0_AF27B1F7346C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1, this.camera_D9C89ED3_D692_6846_41C7_ED916383F540); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3133D96C_2E3D_A803_41A4_24A6C31D22A2",
   "yaw": -6.45,
   "pitch": -17.69,
   "distance": 100,
   "hfov": 17.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.98,
   "yaw": -6.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.69
  }
 ],
 "id": "overlay_3919E559_239D_E994_41C0_C6C9DE14A626",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A52C218_5136_8468_41C0_43396E48DA5B_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -0.45,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 74.9,
 "bleaching": 0.7,
 "id": "overlay_3353872E_2374_E98F_41B0_4F3EE3393863",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43996F_5137_84A9_41D3_72808114DE57, this.camera_D9F26EE9_D692_6842_41DB_2A164C7FFE9C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3132196B_2E3D_A805_41A6_FFCC1BC24B72",
   "yaw": 148.39,
   "pitch": -20.09,
   "distance": 100,
   "hfov": 17.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.73,
   "yaw": 148.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.09
  }
 ],
 "id": "overlay_3A4CB933_2394_5995_41BE_F8A762623E40",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1, this.camera_D9FD4EFF_D692_683E_41E6_8AB4F45F0A34); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3132F96B_2E3D_A805_41C1_4954A7DF3804",
   "yaw": -3.84,
   "pitch": -17.35,
   "distance": 100,
   "hfov": 18.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.02,
   "yaw": -3.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.35
  }
 ],
 "id": "overlay_38CED7A1_2394_68B5_41B5_B858D8EE4631",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "viewerArea": "this.viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636C",
 "class": "VideoPlayer",
 "id": "viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636CVideoPlayer",
 "displayPlaybackBar": true
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -153.37,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 41.95,
 "bleaching": 0.7,
 "id": "overlay_3058CC11_236C_BF95_41AA_2A057BAA1AC6",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8, this.camera_C7AF6CAB_D692_68C6_41E1_471A42B4A9E5); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312CE979_2E3D_A805_419C_C2193F25599A",
   "yaw": -7.28,
   "pitch": -17.28,
   "distance": 100,
   "hfov": 18.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.02,
   "yaw": -7.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ],
 "id": "overlay_3619D8FB_23B4_7895_41BE_D416B8E9D80A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43487E_5137_84AB_41D0_571CB86B405F, this.camera_C7A26C94_D692_68C2_41E9_4C5A3EE70553); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_312D7979_2E3D_A805_41AD_AE62D01553B5",
   "yaw": 157.66,
   "pitch": -15.7,
   "distance": 100,
   "hfov": 18.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.17,
   "yaw": 157.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.7
  }
 ],
 "id": "overlay_304147FA_2984_3EEF_41B6_B0785CD1BB44",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer 4"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC63DCB6C_D692_6842_41E8_96CD172B636C",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2938"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "viewerArea": "this.viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BB",
 "class": "VideoPlayer",
 "id": "viewer_uidC630DB4E_D692_685E_41AC_85D4FC99B1BBVideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC631AB55_D692_6842_41D4_E7C2BD5C41A4",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2936"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_tcap0.png",
    "width": 1170,
    "class": "ImageResourceLevel",
    "height": 1170
   }
  ]
 },
 "rotate": false,
 "id": "panorama_5A438990_5137_8477_41C8_673E3413256C_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "yaw": -56.18,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.76,
 "bleaching": 0.7,
 "id": "overlay_335FFE5A_236C_BB97_4190_DF114D0DC7C7",
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8, this.camera_C76B1D0E_D692_69DE_41E2_E2C1FA2C9338); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_313F6969_2E3D_A805_41B2_7C3945D71175",
   "yaw": 167.06,
   "pitch": -23.94,
   "distance": 100,
   "hfov": 16.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.12,
   "yaw": 167.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.94
  }
 ],
 "id": "overlay_35529AF6_23AF_F89F_41BA_08EB37257565",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A43843D_5137_8CA8_41A1_C8C024139E28, this.camera_C77B4CF3_D692_6846_41DF_FC9FFDE7B20A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_313FD969_2E3D_A805_41BC_DB6274028286",
   "yaw": -16.95,
   "pitch": -18.38,
   "distance": 100,
   "hfov": 17.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": -16.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.38
  }
 ],
 "id": "overlay_34FC674A_23AC_69F7_41B0_923D9673CD74",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 53.31,
   "yaw": -55.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_2_0_map.gif",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_2_0.png",
      "width": 890,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ]
   },
   "yaw": -55.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.24,
   "distance": 50,
   "hfov": 53.31
  }
 ],
 "id": "overlay_017F6B21_2393_D9B5_41BF_4F23B06EE9E3",
 "data": {
  "label": "Musholla Baitul Alam"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uidC63D1B6C_D692_6842_41E5_32BE3AB80178",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2937"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.7,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 40,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 40,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 110,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0,
 "height": "85.959%"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "top": 16.4,
 "paddingRight": 0,
 "height": 63.6,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 8,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "white block"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "backgroundColor": [
  "#FFFFFF"
 ]
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0.01
 ],
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": 86,
 "paddingRight": 0,
 "height": 46,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 7,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "blue block"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "backgroundColor": [
  "#008F00"
 ]
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#035619"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#3B9000"
 ],
 "id": "Button_D47BFF54_C28D_52C3_41BB_E00E47F716F6",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 38.2,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "right": "0.36%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 0.6,
 "top": "0.56%",
 "borderColor": "#FFFFFF",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "30px",
 "label": "X",
 "fontColor": "#FFFF00",
 "click": "this.setComponentVisibility(this.Container_D133549D_C285_D67D_41D2_76542E45C8A8, false, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607, false, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Close Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000"
 ]
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#3B9000"
 ],
 "id": "Button_D56EF981_C28F_FE45_41AE_FA31B4D9055E",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 38,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "right": "0.24%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 0.6,
 "top": "0.82%",
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "30px",
 "label": "X",
 "fontColor": "#FFFF00",
 "click": "this.setComponentVisibility(this.Container_DA8F13E3_C284_D1C6_41E4_A0E7657A6F2A, false, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3, false, 0, null, null, false); this.setComponentVisibility(this.Button_D56EF981_C28F_FE45_41AE_FA31B4D9055E, false, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Close Button"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000"
 ]
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_313D396A_2E3D_A807_41B8_A7E824A3078C",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_D418D4A5_C30E_AF3C_41DA_22F00BE21339",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43AEC3_5137_BDD9_418C_45ABD7F22137_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312B7973_2E3D_A805_41C0_4DBE07DC235B",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_312BD974_2E3D_A803_41AB_FE1C618725CD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A42FDBE_5136_9FAB_4181_9062877D2C63_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3137E96E_2E3D_A81F_41AC_4789B466B130",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3134596E_2E3D_A81F_41C0_1D273745A26C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3134196F_2E3D_A81D_41AE_33D116A6F7BD",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43487E_5137_84AB_41D0_571CB86B405F_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3122997A_2E3D_A807_41BF_E37ABD330CF5",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A51081C_5136_846F_419E_1CACC7803CC3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_31297975_2E3D_A80D_41B8_895CFDD28E2C",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3129D975_2E3D_A80D_41BD_11ED2F55A388",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A42D571_5136_8CB8_41B5_FB417CB56E60_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_31355971_2E3D_A804_41AE_14B5EE8A4ACA",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_31350971_2E3D_A804_41B1_828139B894FB",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A43841A_5137_8C6B_41BE_E80827876DCA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3131E96D_2E3D_A81D_419D_C841E80FB0A4",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3136596D_2E3D_A81D_41AD_5EC8C047A7D8",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A5A8007_5136_8458_41CF_27DF5CBD1AD7_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3139194E_2E3D_A81F_41C0_2A5C4479616B",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A42AEB8_5137_7DB7_41C2_5E978C6750D8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312DF979_2E3D_A804_41BC_27BAA75C3F50",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3122497A_2E3D_A807_41C1_8EE2291225EB",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A415DDD_5136_9FE9_41D2_D736A1A08DB8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_313C6969_2E3D_A805_41C5_AE31C7227E95",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_313CD96A_2E3D_A807_4197_0259FD0FFF2A",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43843D_5137_8CA8_41A1_C8C024139E28_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_31344970_2E3D_A803_41BE_50930EAFAD7C",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_31342970_2E3D_A803_41BD_7E39480EA6AE",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43FE87_5137_FC58_41BB_F9088AE653A1_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3130596C_2E3D_A803_41C1_5D5543F4CBA2",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3130096C_2E3D_A803_41A2_B4DF4549E35A",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5AA23CA1_5136_9C59_41C0_AE569A5E74F1_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_31286974_2E3D_A803_41B2_F6004F37E559",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3128D974_2E3D_A803_4192_BFBABF724FCA",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A42C7C0_5136_8BD7_41D0_6D9CF673DF15_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3130B96C_2E3D_A803_419E_AF219FE3273A",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3131796D_2E3D_A81D_41C5_D91C75553ED2",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A5E06EE_5136_8DAB_41CF_82273BB7794A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312E4975_2E3D_A80D_41C1_F107474FCBE0",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312E3976_2E3D_A80F_41C4_AA221A1724AC",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_312E9976_2E3D_A80F_41C3_CED38EF4091A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A411F74_5136_FCBF_41B8_8D9AD5DBF9E9_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3135B971_2E3D_A804_41BB_932FBAB9C875",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312A6973_2E3D_A805_4179_F9BFBBA40944",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312AF973_2E3D_A805_419F_B701984D4AF3",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43757C_5137_8CA8_41C1_78D5F279C356_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3136C96E_2E3D_A81F_41AF_EEAEFEAAEE16",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3136B96E_2E3D_A81F_4198_853528C26993",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5A43744C_5136_8CEF_41CF_89CEC401F068_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3133796B_2E3D_A805_41BD_54535D05C74F",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3133D96C_2E3D_A803_41A4_24A6C31D22A2",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A43996F_5137_84A9_41D3_72808114DE57_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3132196B_2E3D_A805_41A6_FFCC1BC24B72",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_3132F96B_2E3D_A805_41C1_4954A7DF3804",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A52C218_5136_8468_41C0_43396E48DA5B_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312CE979_2E3D_A805_419C_C2193F25599A",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_312D7979_2E3D_A805_41AD_AE62D01553B5",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5C032C20_5136_BC58_41CA_82A951B15BD2_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_313F6969_2E3D_A805_41B2_7C3945D71175",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_313FD969_2E3D_A805_41BC_DB6274028286",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5A438990_5137_8477_41C8_673E3413256C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "backgroundOpacity": 0.4,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "maxHeight": 80,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 50,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "bottom": "40%",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "paddingBottom": 0,
 "right": "10.82%",
 "propagateClick": true,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "width": "76.455%",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 30,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 40,
 "height": "25.038%",
 "class": "Image",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "height": "26.316%"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 60,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 60,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "borderRadius": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "width": 352.05,
 "fontFamily": "Gotham",
 "right": 5.6,
 "propagateClick": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "text": "NADAH BANYU",
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 47,
 "horizontalAlign": "center",
 "minWidth": 1,
 "fontSize": "43px",
 "bottom": 9,
 "fontColor": "#000000",
 "class": "Label",
 "paddingLeft": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "data": {
  "name": "text 1"
 }
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "width": 317.4,
 "fontFamily": "Gotham",
 "right": 20.8,
 "propagateClick": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "text": "VIRTUAL FIELD TRIP",
 "minHeight": 1,
 "top": 0.4,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "fontSize": "26px",
 "fontColor": "#FFFFFF",
 "class": "Label",
 "paddingLeft": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "data": {
  "name": "text 2"
 }
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C"
 ],
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundColor": [
  "#035619",
  "#035619"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 50,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "scrollBarOpacity": 0.51
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "itemVerticalAlign": "top",
 "borderRadius": 5,
 "itemMinWidth": 50,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "verticalAlign": "middle",
 "borderSize": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "minWidth": 1,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemMaxWidth": 1000,
 "itemLabelHorizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMode": "normal",
 "gap": 26,
 "height": "92%",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Oswald",
 "shadow": false,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "paddingLeft": 70,
 "rollOverItemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "url": "https://maps.app.goo.gl/rsPM62Ffo7fQwevx9",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "class": "WebFrame",
 "scrollEnabled": true,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "insetBorder": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "55%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "45%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 60,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "scrollBarOpacity": 0.51
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Deskripsi Media",
 "class": "Button",
 "gap": 5,
 "click": "this.showPopupImage(this.ImageResource_DA12E675_C28B_D2CD_41DA_89D83AB8AAE4, null, '80%', '80%', this.FadeInEffect_DA12C675_C28B_D2CD_41DB_0DEE3847C512, this.FadeOutEffect_DA12B675_C28B_D2CD_41E2_67A6F708B00F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Tujuan Media",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_D133549D_C285_D67D_41D2_76542E45C8A8, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607, true, 0, null, null, false); this.setComponentVisibility(this.Button_D47BFF54_C28D_52C3_41BB_E00E47F716F6, true, 0, null, null, false); this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C61BAB31_D692_69C2_41C3_D7B834B76432.set('selectedIndex', -1); }, this); this.playList_C61BAB31_D692_69C2_41C3_D7B834B76432.set('selectedIndex', 0); this.ViewerAreaLabeled_D14750E8_C285_2FC3_41D8_0BA59625A607VideoPlayer.play()",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lokasi",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "label": "Lokasi",
 "class": "Button",
 "gap": 5,
 "click": "this.openLink('https://maps.app.goo.gl/rsPM62Ffo7fQwevx9', '_blank')",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Floorplan",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Kondisi Geografi",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_DA8F13E3_C284_D1C6_41E4_A0E7657A6F2A, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3, true, 0, null, null, false); this.setComponentVisibility(this.Button_D56EF981_C28F_FE45_41AE_FA31B4D9055E, true, 0, null, null, false); this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C61CCB32_D692_69C6_41DB_BA4AA267E4A0.set('selectedIndex', -1); }, this); this.playList_C61CCB32_D692_69C6_41DB_BA4AA267E4A0.set('selectedIndex', 0); this.ViewerAreaLabeled_DA261186_C28D_2E4F_41AB_209F315D73B3VideoPlayer.play()",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Gotham",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#3B9000"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Refleksi",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A782F_1140_E20B_41AF_B3E5DE341773, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9, true, 0, null, null, false); this.setComponentVisibility(this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A082F_1140_E20A_4193_DF1A4391DC79, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A3830_1140_E215_4195_1698933FE51C, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A2830_1140_E215_41AA_EB25B7BD381C, true, 0, null, null, false); this.setComponentVisibility(this.HTMLText_062AD830_1140_E215_41B0_321699661E7F, true, 0, null, null, false); this.setComponentVisibility(this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 2,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "backgroundColor": [
  "#016C00"
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 78,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Gotham';\">Universitas Negeri Malang</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Gotham';\">Fakultas Ilmu Sosial</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Gotham';\">Departemen Geografi</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Gotham';\">Terra et Loka</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "maxHeight": 80,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 42,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 42,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.JPG",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "height": 50,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 300,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  0.99
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#3B9000"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3B9000"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "width": "14.22%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingBottom": 0,
 "right": 10,
 "propagateClick": true,
 "width": "14.22%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": true,
 "width": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "10%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "height": "5%",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "scrollBarOpacity": 0.79
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 20,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.25,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:4.74vh;font-family:'Gotham';\"><B>Krisis Mata Air</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Times New Roman', Times, serif;\"> </SPAN><SPAN STYLE=\"font-family:'Times New Roman', Times, serif;\"><B> </B></SPAN><SPAN STYLE=\"font-size:1.76vh;font-family:'Times New Roman', Times, serif;\"><B> </B></SPAN><SPAN STYLE=\"font-size:1.76vh;\"> </SPAN><SPAN STYLE=\"color:#ffffff;font-size:1.76vh;\">Di sebuah kawasan perbukitan, masyarakat lokal memiliki tradisi turun-temurun bernama Nadah Banyu sebuah ritual adat menampung air suci dari mata air utama, membersihkan area sumber, dan memanjatkan doa sebagai bentuk rasa syukur atas kelestarian air. Bagi tetua adat, tradisi ini adalah bentuk \"etika lingkungan\" agar manusia tidak serakah memanfaatkan air. Namun, area hutan penyangga di atas mata air mulai gundul akibat alih fungsi lahan. Mayoritas generasi hanya menganggap tradisi Nadah Banyu sebagai \"pameran budaya yang mistis dan tertinggal zaman\", tanpa memahami bahwa ritual tersebut sebenarnya berisi pesan konservasi lingkungan yang penting. Di sisi lain, ritual tahunan Nadah Banyu tetap berjalan seperti biasa, tetapi krisis air di desa tersebut belum menemukan solusi nyata. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:1.76vh;\">Pertanyaan!</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:1.76vh;\">1. Jelaskan hubungan antara pesan moral dalam tradisi Nadah Banyu dengan prinsip konservasi air modern (siklus air dan perlindungan daerah tangkapan air)! </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:1.76vh;\">2. Mengapa tradisi ini sebenarnya sangat berwawasan lingkungan?</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "height": "97.137%"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "height": "46%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "height": "75%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "width": "25%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.44vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.44vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "height": "100%"
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.75,
 "scrollBarOpacity": 0.5
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

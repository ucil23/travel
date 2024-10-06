(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
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
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "displayOriginPosition": {
  "yaw": -84.09,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -84.09,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -3.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetHfov": 124,
   "targetStereographicFactor": 0,
   "targetPitch": -3.76
  }
 ]
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -14.45,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4398722D_610F_AC0D_4194_EDC876FB26E3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.12,
 "hideEasing": "cubic_out",
 "hfov": 12.76,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "55",
 "hfovMin": "135%",
 "id": "panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
 "overlays": [
  "this.overlay_7585FF78_610D_5413_41C9_EA55B3284CE8",
  "this.overlay_7595D0D0_610C_EC13_4186_78AF136D12E9",
  "this.overlay_75485003_610C_ABF5_41C6_AEDEF681197C",
  "this.overlay_755895E6_6115_543F_41D7_DB16A7912C5C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "28",
 "hfovMin": "135%",
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
 "overlays": [
  "this.overlay_F19FEC89_E0D0_3EF0_41EA_A3EC4FA9EA19",
  "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_tcap0",
  "this.overlay_49549F67_52E3_AE50_41CF_403E642B67F9",
  "this.popup_45FD7A14_6115_DC13_41D2_0EB46932B408"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 26.34,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_46150353_611D_58F5_41CA_60C870685261",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.01,
 "hideEasing": "cubic_out",
 "hfov": 6.57,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_49F84193_611D_D874_4196_5AFB6144F66B.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
   "end": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, -1, this.effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 0, 1); this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false); this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, -1, this.effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera"
  },
  {
   "media": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_camera"
  },
  {
   "media": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera"
  },
  {
   "media": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera"
  },
  {
   "media": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera"
  },
  {
   "media": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera"
  },
  {
   "media": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera"
  },
  {
   "media": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera"
  },
  {
   "media": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
   "end": "this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false, -1, this.effect_CE945323_DF50_2A30_41EA_9D3683524D78, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 8, 9); this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false); this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true, -1, this.effect_CE978322_DF50_2A30_41CA_F6108ACB13BA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera"
  },
  {
   "media": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera"
  },
  {
   "media": "this.panorama_2A306080_2641_7547_419D_6ED179219674",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A306080_2641_7547_419D_6ED179219674_camera"
  },
  {
   "media": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera"
  },
  {
   "media": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera"
  },
  {
   "media": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera"
  },
  {
   "media": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera"
  },
  {
   "media": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera"
  },
  {
   "media": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera"
  },
  {
   "media": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera"
  },
  {
   "media": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera"
  },
  {
   "media": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera"
  },
  {
   "media": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera"
  },
  {
   "media": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera"
  },
  {
   "media": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera"
  },
  {
   "media": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera"
  },
  {
   "media": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera"
  },
  {
   "media": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera"
  },
  {
   "media": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera"
  },
  {
   "media": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera"
  },
  {
   "media": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera"
  },
  {
   "media": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera"
  },
  {
   "media": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera"
  },
  {
   "media": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera"
  },
  {
   "media": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera"
  },
  {
   "media": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera"
  },
  {
   "media": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera"
  },
  {
   "media": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera"
  },
  {
   "media": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera"
  },
  {
   "media": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_camera"
  },
  {
   "media": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera"
  },
  {
   "media": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera"
  },
  {
   "media": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera"
  },
  {
   "media": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera"
  },
  {
   "media": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera"
  },
  {
   "media": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera"
  },
  {
   "media": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera"
  },
  {
   "media": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera"
  },
  {
   "media": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera"
  },
  {
   "media": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera"
  },
  {
   "media": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera"
  },
  {
   "media": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera"
  },
  {
   "media": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera"
  },
  {
   "media": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "end": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, -1, this.effect_4A666E98_6135_4874_41C9_E25A92EA7A4C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 51, 52); this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false); this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, -1, this.effect_4A669E98_6135_4874_41D7_79C805E2DF03, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera"
  },
  {
   "media": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera"
  },
  {
   "media": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera"
  },
  {
   "media": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera"
  },
  {
   "media": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera"
  },
  {
   "media": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera"
  },
  {
   "media": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera"
  },
  {
   "media": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera"
  },
  {
   "media": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera"
  },
  {
   "media": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 60, 61)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera"
  },
  {
   "media": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 61, 62)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera"
  },
  {
   "media": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 62, 63)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera"
  },
  {
   "media": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 63, 64)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera"
  },
  {
   "media": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 64, 65)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera"
  },
  {
   "media": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist, 65, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera"
  }
 ],
 "id": "ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_CE945323_DF50_2A30_41EA_9D3683524D78",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -110.86,
  "class": "PanoramaCameraPosition",
  "pitch": 3.1
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "30",
 "hfovMin": "135%",
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
 "overlays": [
  "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_tcap0",
  "this.overlay_4CC5A839_52E0_7230_41D4_6C7DA70AF7DD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "14",
 "hfovMin": "135%",
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
 "overlays": [
  "this.overlay_B2067059_A774_55EA_41D7_EBAC5FED98FC",
  "this.overlay_CA8D6605_C58A_E77F_41D1_75170DF406B4",
  "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_tcap0",
  "this.popup_59E2D1DB_575C_0B8F_41C0_511201061795"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -10.95,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": 11.34,
 "hideEasing": "cubic_out",
 "hfov": 25.71
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "49",
 "hfovMin": "135%",
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
 "overlays": [
  "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_tcap0",
  "this.overlay_7F776ED2_52A1_AE70_4182_89A6D3D9C949"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "42",
 "hfovMin": "135%",
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
 "overlays": [
  "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_tcap0",
  "this.overlay_75F1EE0A_52A0_D1D0_41C5_B5BD72D5771F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "61",
 "hfovMin": "135%",
 "id": "panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
 "overlays": [
  "this.overlay_40D1A817_6134_DC1E_41A6_0D3BB94C1101"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "22",
 "hfovMin": "135%",
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
 "overlays": [
  "this.overlay_BB317AE2_A8FD_BC6B_41C2_0E31998D37E1",
  "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "7",
 "hfovMin": "135%",
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
 "overlays": [
  "this.overlay_3031B16D_2640_B7D9_41B4_800ECC77F6FC",
  "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_5819CD50_574C_1898_41BE_5050055E22DF",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32DE42_6135_48D7_4195_CC25637A9750, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32DE42_6135_48D7_4195_CC25637A9750, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32DE42_6135_48D7_4195_CC25637A9750",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_59090B1B_575C_188F_41C2_7A164EA3B15E",
   "start": "this.viewer_uid4A25FE27_6135_485D_41D8_582458DCED6EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_492CD607_613B_57FD_41D6_733575535D54, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_492CD607_613B_57FD_41D6_733575535D54, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A25FE27_6135_485D_41D8_582458DCED6EVideoPlayer)",
   "player": "this.viewer_uid4A25FE27_6135_485D_41D8_582458DCED6EVideoPlayer"
  }
 ],
 "id": "PlayList_492CD607_613B_57FD_41D6_733575535D54",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 23.49,
  "class": "PanoramaCameraPosition",
  "pitch": -2.03
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "37",
 "hfovMin": "135%",
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
 "overlays": [
  "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_tcap0",
  "this.overlay_75E60840_52A0_7250_418B_CAED987999D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -68.81,
  "class": "PanoramaCameraPosition",
  "pitch": 12.21
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -22,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_58B5736C_574C_0889_41CA_7AB0A130CC59",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.7,
 "hideEasing": "cubic_out",
 "hfov": 13.86,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5819CD50_574C_1898_41BE_5050055E22DF.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "53",
 "hfovMin": "135%",
 "id": "panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
 "overlays": [
  "this.overlay_70BB3131_6137_AC15_41C9_825F6226481B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -79.79,
  "class": "PanoramaCameraPosition",
  "pitch": 8.81
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera"
},
{
 "thumbnailUrl": "media/video_5819CD50_574C_1898_41BE_5050055E22DF_t.jpg",
 "scaleMode": "fit_inside",
 "width": 2688,
 "label": "DJI_0694",
 "loop": false,
 "id": "video_5819CD50_574C_1898_41BE_5050055E22DF",
 "class": "Video",
 "height": 1512,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5819CD50_574C_1898_41BE_5050055E22DF.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "54",
 "hfovMin": "135%",
 "id": "panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
 "overlays": [
  "this.overlay_7209029A_610B_6C17_41BE_AFADAF522CCE",
  "this.overlay_77408D90_610F_7413_41D1_353097C6ED72",
  "this.overlay_78960C88_6114_D4F2_41CB_5A0172486DA4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_t.jpg",
 "class": "Panorama",
 "hfovMax": 142
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BCCE35E_610D_6C0E_41D4_113F69F22BE1",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A25FE27_6135_485D_41D8_582458DCED6E"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window396"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A326E43_6135_48D5_41CC_B40B01F8E165, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A326E43_6135_48D5_41CC_B40B01F8E165, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A326E43_6135_48D5_41CC_B40B01F8E165",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "23",
 "hfovMin": "116%",
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
 "overlays": [
  "this.overlay_BD8BEB6F_A8FD_9C79_41B9_584962BAD5D7",
  "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "1004(1)",
 "loop": false,
 "id": "video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_42ACE2C2_610F_AC76_41CB_5AB40437E207.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_5819CD50_574C_1898_41BE_5050055E22DF",
   "start": "this.viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_492B7607_613B_57FD_4184_D74472D766C1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_492B7607_613B_57FD_4184_D74472D766C1, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57VideoPlayer)",
   "player": "this.viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57VideoPlayer"
  }
 ],
 "id": "PlayList_492B7607_613B_57FD_4184_D74472D766C1",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "10",
 "hfovMin": "135%",
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
 "overlays": [
  "this.overlay_33FC440C_2641_FD5F_41AE_FC038C20214C",
  "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A306080_2641_7547_419D_6ED179219674"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6_camera"
},
{
 "initialPosition": {
  "yaw": -94.92,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 1.82
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera"
},
{
 "levels": [
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4A627E7C_6135_48AC_41D6_ABA3857F99B5"
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "1",
 "hfovMin": "135%",
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
 "overlays": [
  "this.overlay_304FC957_2640_97C9_4182_D295A892F188",
  "this.overlay_402003AB_52A0_B6D0_41D3_47B74C6F3DAB",
  "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_t.jpg",
 "class": "Panorama",
 "hfovMax": 128
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "16",
 "hfovMin": "135%",
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
 "overlays": [
  "this.overlay_305902D7_2647_9AC9_4197_023287A02EF5",
  "this.overlay_3F440FAE_2641_6B5B_4192_0E0CC65D0A04",
  "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "51",
 "hfovMin": "135%",
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
 "overlays": [
  "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_tcap0",
  "this.overlay_791FF326_52A0_57D0_41CA_F910712CEA95",
  "this.overlay_7C62FC06_52AF_F1D0_41D2_389F7C6E396A",
  "this.overlay_449E8489_610C_B854_41CB_10A08022A925",
  "this.popup_47F96725_610B_785C_41D6_8458F5C7FCC2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "59",
 "hfovMin": "135%",
 "id": "panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
 "overlays": [
  "this.overlay_7A8A9C8E_610B_540E_41D6_1EC3CB4C92F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "24",
 "hfovMin": "135%",
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
 "overlays": [
  "this.overlay_BD665D4B_A8FC_B5B9_41E3_BE2B953C7C89",
  "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_tcap0",
  "this.overlay_484F763D_52E0_BE30_416D_40E5DE03E13E",
  "this.overlay_47791082_574C_0879_41BE_236A3F40CEB0",
  "this.popup_4398722D_610F_AC0D_4194_EDC876FB26E3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera"
},
{
 "duration": 1000,
 "id": "effect_CE978322_DF50_2A30_41CA_F6108ACB13BA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "40",
 "hfovMin": "135%",
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
 "overlays": [
  "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_tcap0",
  "this.overlay_758CCABB_52A0_D630_41BE_862BFF128321"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32FE42_6135_48D7_41A9_15A477F1E39E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32FE42_6135_48D7_41A9_15A477F1E39E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32FE42_6135_48D7_41A9_15A477F1E39E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "46",
 "hfovMin": "135%",
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
 "overlays": [
  "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_tcap0",
  "this.overlay_783B691C_52A0_53F0_41CC_9643779BD6A1",
  "this.overlay_7D8FA01C_52A0_51F0_41C4_F952A751B50F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera"
},
{
 "initialPosition": {
  "yaw": -3.26,
  "class": "PanoramaCameraPosition",
  "pitch": 1.19
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "36",
 "hfovMin": "135%",
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
 "overlays": [
  "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_tcap0",
  "this.overlay_7048D086_52E1_F2D0_41D3_6112D628B96A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "33",
 "hfovMin": "135%",
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
 "overlays": [
  "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_tcap0",
  "this.overlay_4D27C4F8_52E1_D230_41CF_0491E0A7C63A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "52",
 "hfovMin": "135%",
 "id": "panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
 "overlays": [
  "this.overlay_70C02472_613B_7417_41D6_374D81B20327",
  "this.overlay_4AB3CC20_613F_C854_41B7_35FFE1E1084D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "3",
 "hfovMin": "135%",
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
 "overlays": [
  "this.overlay_B5E49DAC_A754_4EAA_41C8_11D4EE6987B1",
  "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "62",
 "hfovMin": "135%",
 "id": "panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
 "overlays": [
  "this.overlay_40A25B36_6135_BC1F_41CA_154CB0F4F8D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -1,
  "class": "PanoramaCameraPosition",
  "pitch": 1.71
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "32",
 "hfovMin": "135%",
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201",
 "overlays": [
  "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_tcap0",
  "this.overlay_733F804B_52E0_5250_41D2_8DFC5C60F2CA",
  "this.overlay_58591E3D_5654_5436_41BF_CFF64722AB19",
  "this.popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "44",
 "hfovMin": "135%",
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
 "overlays": [
  "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_tcap0",
  "this.overlay_7A119007_52A7_B1D0_41C3_B619A3830C07"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "48",
 "hfovMin": "135%",
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
 "overlays": [
  "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_tcap0",
  "this.overlay_66884B64_52A3_F650_416F_8609194C6476",
  "this.overlay_59C82CA5_5655_F4D6_41BE_28042750AE83",
  "this.popup_59869DD9_5654_547E_41C5_EDF38103D19A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "4",
 "hfovMin": "135%",
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
 "overlays": [
  "this.overlay_303AE09F_264F_9579_41B9_8C196E8535F3",
  "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "31",
 "hfovMin": "135%",
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
 "overlays": [
  "this.overlay_F267B298_E0D0_6A1F_41EA_DA90E7BA3085",
  "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_tcap0",
  "this.overlay_4DB795F1_52E0_B230_41D0_382FA9EBF302",
  "this.popup_450ADD29_611C_B435_41C6_FFDBAE758CC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 8.74,
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "pitch": -4.98
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BCF835E_610D_6C0E_41D7_90DD6D5F0291",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window399"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_46F71A17_611B_C87D_41A1_2BF6C0C6B508",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997F"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window63277"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -48.03,
  "class": "PanoramaCameraPosition",
  "pitch": -0.97
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera"
},
{
 "items": [
  {
   "media": "this.video_49F84193_611D_D874_4196_5AFB6144F66B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A329E43_6135_48D5_41C5_B1BBFEC1B4D6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A329E43_6135_48D5_41C5_B1BBFEC1B4D6, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A329E43_6135_48D5_41C5_B1BBFEC1B4D6",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_446145B7_611C_F41D_416E_FA9CAC510D24",
   "start": "this.viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4A157E60_6135_48D4_41C8_5BF7619CF573, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4A157E60_6135_48D4_41C8_5BF7619CF573, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389VideoPlayer)",
   "player": "this.viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389VideoPlayer"
  }
 ],
 "id": "PlayList_4A157E60_6135_48D4_41C8_5BF7619CF573",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera"
},
{
 "items": [
  {
   "media": "this.video_446145B7_611C_F41D_416E_FA9CAC510D24",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A328E43_6135_48D5_41C0_BEDCA7E446D0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A328E43_6135_48D5_41C0_BEDCA7E446D0, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A328E43_6135_48D5_41C0_BEDCA7E446D0",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "21",
 "hfovMin": "135%",
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
 "overlays": [
  "this.overlay_3113F4F7_2640_9EC9_41AD_CEEBE159B050",
  "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera"
},
{
 "thumbnailUrl": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "1004(2)",
 "loop": false,
 "id": "video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -36.15,
  "class": "PanoramaCameraPosition",
  "pitch": -0.57
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -27.9,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_450ADD29_611C_B435_41C6_FFDBAE758CC1",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.97,
 "hideEasing": "cubic_out",
 "hfov": 13.02,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
   "start": "this.viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4A15BE5F_6135_48EC_41CF_195CC7CE7B47, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4A15BE5F_6135_48EC_41CF_195CC7CE7B47, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99VideoPlayer)",
   "player": "this.viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99VideoPlayer"
  }
 ],
 "id": "PlayList_4A15BE5F_6135_48EC_41CF_195CC7CE7B47",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera"
},
{
 "initialPosition": {
  "yaw": 156.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0.47
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A306080_2641_7547_419D_6ED179219674_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "11",
 "hfovMin": "135%",
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674",
 "overlays": [
  "this.overlay_334D4FC5_2643_AAC9_41A1_F30013C576D9",
  "this.panorama_2A306080_2641_7547_419D_6ED179219674_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A306080_2641_7547_419D_6ED179219674_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera"
},
{
 "duration": 1000,
 "id": "effect_4A669E98_6135_4874_41D7_79C805E2DF03",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "thumbnailUrl": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919_t.jpg",
 "scaleMode": "fit_inside",
 "width": 2688,
 "label": "DJI_0729",
 "loop": false,
 "id": "video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
 "class": "Video",
 "height": 1512,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "initialPosition": {
  "yaw": 6.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0.49
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "58",
 "hfovMin": "135%",
 "id": "panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
 "overlays": [
  "this.overlay_782F7965_611B_DC3D_41BA_B75187905AF9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "items": [
  {
   "media": "this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
   "start": "this.viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_492AD607_613B_57FD_41D6_DA17E70F2CEB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_492AD607_613B_57FD_41D6_DA17E70F2CEB, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051VideoPlayer)",
   "player": "this.viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051VideoPlayer"
  }
 ],
 "id": "PlayList_492AD607_613B_57FD_41D6_DA17E70F2CEB",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "18",
 "hfovMin": "135%",
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
 "overlays": [
  "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_tcap0",
  "this.overlay_45675E69_52E3_EE50_4198_B1D83AA58CC2",
  "this.overlay_587F64A1_5744_09BB_41D0_826DFC84D807",
  "this.popup_58B5736C_574C_0889_41CA_7AB0A130CC59"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera"
},
{
 "initialPosition": {
  "yaw": -122.42,
  "class": "PanoramaCameraPosition",
  "pitch": 10.24
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_45899032_611C_AC17_41CB_CE0D92BFF84D",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window54182"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "15",
 "hfovMin": "135%",
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
 "overlays": [
  "this.overlay_3043F070_2641_F5C7_41A5_B22E2676E795",
  "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "27",
 "hfovMin": "135%",
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
 "overlays": [
  "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_tcap0",
  "this.overlay_481CA6E5_52E1_BE50_41C5_8C5E9A237129"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -7.36,
  "class": "PanoramaCameraPosition",
  "pitch": -7.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "12",
 "hfovMin": "135%",
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
 "overlays": [
  "this.overlay_33F2FFA9_2641_AB59_41B9_3D0177BB016D",
  "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -9.85,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_59C0B6DB_5654_D472_41CC_9481FD91F75A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -10.69,
 "hideEasing": "cubic_out",
 "hfov": 10.12,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "29",
 "hfovMin": "135%",
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
 "overlays": [
  "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_tcap0",
  "this.overlay_49AD35A8_52E0_72D0_41C8_9990891DA7DB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "45",
 "hfovMin": "135%",
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
 "overlays": [
  "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_tcap0",
  "this.overlay_79F3D8E0_52A1_F251_41C6_97558F44FA88"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera"
},
{
 "initialPosition": {
  "yaw": -3.62,
  "class": "PanoramaCameraPosition",
  "pitch": -0.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera"
},
{
 "items": [
  {
   "media": "this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
   "start": "this.viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4A15FE5F_6135_48EC_41C7_72D1995AA04A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4A15FE5F_6135_48EC_41C7_72D1995AA04A, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8VideoPlayer)",
   "player": "this.viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8VideoPlayer"
  }
 ],
 "id": "PlayList_4A15FE5F_6135_48EC_41C7_72D1995AA04A",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -51.81,
  "hfov": 134,
  "class": "PanoramaCameraPosition",
  "pitch": -11.11
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790_camera"
},
{
 "duration": 1000,
 "id": "effect_4A666E98_6135_4874_41C9_E25A92EA7A4C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_49A3C74C_611D_58D3_41D4_05F4204CCA0D",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55E"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window61963"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "1004",
 "loop": false,
 "id": "video_59090B1B_575C_188F_41C2_7A164EA3B15E",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "57",
 "hfovMin": "140%",
 "id": "panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
 "overlays": [
  "this.overlay_76F34FB3_6114_F415_41BE_0CA933719B77"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_t.jpg",
 "class": "Panorama",
 "hfovMax": 146
},
{
 "initialPosition": {
  "yaw": -83.4,
  "class": "PanoramaCameraPosition",
  "pitch": 4.9
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera"
},
{
 "thumbnailUrl": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "20241003_194804_424",
 "loop": false,
 "id": "video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_466DD8A4_5654_5CD6_41C1_01B61AE2A470.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "initialPosition": {
  "yaw": 41.34,
  "class": "PanoramaCameraPosition",
  "pitch": 4.52
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera"
},
{
 "initialPosition": {
  "yaw": -32.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0.77
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BCEA35E_610D_6C0E_41AB_FA001CC0DF27",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window398"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -14.12,
  "class": "PanoramaCameraPosition",
  "pitch": -9.34
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera"
},
{
 "initialPosition": {
  "yaw": 165.15,
  "class": "PanoramaCameraPosition",
  "pitch": -10.39
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera"
},
{
 "items": [
  {
   "media": "this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32AE42_6135_48D7_419F_DC21578E31FB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32AE42_6135_48D7_419F_DC21578E31FB, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32AE42_6135_48D7_419F_DC21578E31FB",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -15.82,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_477997A1_611B_D855_41D3_039B056CADA3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.25,
 "hideEasing": "cubic_out",
 "hfov": 10.29,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_463FC3E2_611B_5FD4_4191_A927DA6C5919.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "41",
 "hfovMin": "135%",
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
 "overlays": [
  "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_tcap0",
  "this.overlay_772F3C32_52A1_D230_41CB_B617C4919A3D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
   "start": "this.viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_492A5607_613B_57FD_41AE_63B7B9B28400, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_492A5607_613B_57FD_41AE_63B7B9B28400, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67VideoPlayer)",
   "player": "this.viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67VideoPlayer"
  }
 ],
 "id": "PlayList_492A5607_613B_57FD_41AE_63B7B9B28400",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "35",
 "hfovMin": "135%",
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
 "overlays": [
  "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_tcap0",
  "this.overlay_7070B844_52E3_B250_41D0_7D9E40F397AD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BCDA35E_610D_6C0E_41CB_497CF1604D4D",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window397"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_46DAC53E_611B_58AC_41C8_3C2A8D17A049",
  "this.popup_477997A1_611B_D855_41D3_039B056CADA3"
 ],
 "thumbnailUrl": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
 "label": "66",
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "17",
 "hfovMin": "135%",
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
 "overlays": [
  "this.overlay_33DF8A4B_2640_95D9_41B6_707F519AB636",
  "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "39",
 "hfovMin": "135%",
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
 "overlays": [
  "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_tcap0",
  "this.overlay_77FF7D94_52A3_D2F0_41AF_CFE3814548F3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 65.84,
  "class": "PanoramaCameraPosition",
  "pitch": -2.83
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonMoveRight": "this.IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7",
 "viewerArea": "this.MainViewer",
 "buttonZoomOut": "this.IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173",
 "touchControlMode": "drag_rotation",
 "buttonZoomIn": "this.IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879",
 "buttonMoveUp": "this.IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
 "buttonMoveLeft": "this.IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "buttonMoveDown": "this.IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA",
 "mouseControlMode": "drag_rotation"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "43",
 "hfovMin": "135%",
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
 "overlays": [
  "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_tcap0",
  "this.overlay_7A574EE9_52AF_AE50_41BD_AEC09D3DE28A",
  "this.overlay_76841B77_52A0_5630_41D1_8222E3B2B8E9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 60.2,
  "class": "PanoramaCameraPosition",
  "pitch": -6.96
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 22.8,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_59E2D1DB_575C_0B8F_41C0_511201061795",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -9.25,
 "hideEasing": "cubic_out",
 "hfov": 9.52,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_59090B1B_575C_188F_41C2_7A164EA3B15E.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "64",
 "hfovMin": "135%",
 "id": "panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
 "overlays": [
  "this.overlay_43ED229E_613C_EC0E_41CA_4C6D8F229649"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -9.94,
  "class": "PanoramaCameraPosition",
  "pitch": -0.42
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "56",
 "hfovMin": "135%",
 "id": "panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
 "overlays": [
  "this.overlay_747E146F_6114_B40D_41D3_121AAC1E44BD",
  "this.overlay_77C7AFBF_6114_D40D_41D1_330724A58086",
  "this.overlay_77AA545F_6115_B40E_41D2_0C6068B21E23",
  "this.overlay_4717EF4D_611C_C8EC_41D1_D32FE3B2867B",
  "this.popup_46150353_611D_58F5_41CA_60C870685261"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera"
},
{
 "items": [
  {
   "media": "this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919",
   "start": "this.viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4A140E61_6135_48D4_41D1_B37E31B00D08, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4A140E61_6135_48D4_41D1_B37E31B00D08, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997FVideoPlayer)",
   "player": "this.viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997FVideoPlayer"
  }
 ],
 "id": "PlayList_4A140E61_6135_48D4_41D1_B37E31B00D08",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "47",
 "hfovMin": "135%",
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
 "overlays": [
  "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_tcap0",
  "this.overlay_78699CE5_52A0_F250_41BE_8A4B5BBB260F",
  "this.overlay_7E047D33_52A0_5230_41C0_092B49E7B675",
  "this.popup_59C0B6DB_5654_D472_41CC_9481FD91F75A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 19.39,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": 5.1,
 "hideEasing": "cubic_out",
 "hfov": 25.3
},
{
 "thumbnailUrl": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "1004(3)",
 "loop": false,
 "id": "video_446145B7_611C_F41D_416E_FA9CAC510D24",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_446145B7_611C_F41D_416E_FA9CAC510D24.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -56.44,
  "class": "PanoramaCameraPosition",
  "pitch": 12.71
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera"
},
{
 "thumbnailUrl": "media/video_49F84193_611D_D874_4196_5AFB6144F66B_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "1004(4)",
 "loop": false,
 "id": "video_49F84193_611D_D874_4196_5AFB6144F66B",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_49F84193_611D_D874_4196_5AFB6144F66B.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "60",
 "hfovMin": "135%",
 "id": "panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
 "overlays": [
  "this.overlay_7ED84FC2_6135_B477_41D5_5877744E6FEC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "5",
 "hfovMin": "135%",
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
 "overlays": [
  "this.overlay_30CFBA94_2641_954F_41B0_4FF48C7E5194",
  "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_445C7E3A_6115_D417_41CE_4DE4104AB0BE",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window53433"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "20241003_195419_554",
 "loop": false,
 "id": "video_4622AEE8_5654_545D_41C5_4D4C9557A17D",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -6.97,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_59869DD9_5654_547E_41C5_EDF38103D19A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.94,
 "hideEasing": "cubic_out",
 "hfov": 10.29,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_4622AEE8_5654_545D_41C5_4D4C9557A17D.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "initialPosition": {
  "yaw": -69.16,
  "class": "PanoramaCameraPosition",
  "pitch": 4.4
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera"
},
{
 "levels": [
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4A6DEE6E_6135_48AC_418B_C2866F6CAEA1"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -33.73,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_47F96725_610B_785C_41D6_8458F5C7FCC2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47F96725_610B_785C_41D6_8458F5C7FCC2_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -7.65,
 "hideEasing": "cubic_out",
 "hfov": 39.05
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "6",
 "hfovMin": "135%",
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
 "overlays": [
  "this.overlay_30CEFE46_2643_6DCB_41B5_FB0DC4EFB7F7",
  "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08",
   "end": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, -1, this.effect_F0C43AD0_E592_D80C_41E8_E9884B96A21C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false); this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, -1, this.effect_F0C3DAD0_E592_D80C_41DC_0D60ACBD407D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_camera"
  },
  {
   "media": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_camera"
  },
  {
   "media": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_camera"
  },
  {
   "media": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera"
  },
  {
   "media": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera"
  },
  {
   "media": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_camera"
  },
  {
   "media": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_camera"
  },
  {
   "media": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_camera"
  },
  {
   "media": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
   "end": "this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false, -1, this.effect_CE945323_DF50_2A30_41EA_9D3683524D78, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, false); this.setComponentVisibility(this.HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95, true, -1, this.effect_CE978322_DF50_2A30_41CA_F6108ACB13BA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_camera"
  },
  {
   "media": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_camera"
  },
  {
   "media": "this.panorama_2A306080_2641_7547_419D_6ED179219674",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A306080_2641_7547_419D_6ED179219674_camera"
  },
  {
   "media": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_camera"
  },
  {
   "media": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_camera"
  },
  {
   "media": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_camera"
  },
  {
   "media": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_camera"
  },
  {
   "media": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_camera"
  },
  {
   "media": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_camera"
  },
  {
   "media": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_camera"
  },
  {
   "media": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_camera"
  },
  {
   "media": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_camera"
  },
  {
   "media": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_camera"
  },
  {
   "media": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_camera"
  },
  {
   "media": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_camera"
  },
  {
   "media": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_camera"
  },
  {
   "media": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_camera"
  },
  {
   "media": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera"
  },
  {
   "media": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_camera"
  },
  {
   "media": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_camera"
  },
  {
   "media": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D356984F_DF50_6670_41DD_FB2F592410EE_camera"
  },
  {
   "media": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_camera"
  },
  {
   "media": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_camera"
  },
  {
   "media": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35830C5_DF50_2671_41CB_BB0454070201_camera"
  },
  {
   "media": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_camera"
  },
  {
   "media": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_camera"
  },
  {
   "media": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_camera"
  },
  {
   "media": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_camera"
  },
  {
   "media": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_camera"
  },
  {
   "media": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_camera"
  },
  {
   "media": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_camera"
  },
  {
   "media": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_camera"
  },
  {
   "media": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_camera"
  },
  {
   "media": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_camera"
  },
  {
   "media": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_camera"
  },
  {
   "media": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera"
  },
  {
   "media": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_camera"
  },
  {
   "media": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_camera"
  },
  {
   "media": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera"
  },
  {
   "media": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_camera"
  },
  {
   "media": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_camera"
  },
  {
   "media": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_camera"
  },
  {
   "media": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_camera"
  },
  {
   "media": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E",
   "end": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, -1, this.effect_4A666E98_6135_4874_41C9_E25A92EA7A4C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52); this.keepComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false); this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, -1, this.effect_4A669E98_6135_4874_41D7_79C805E2DF03, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_camera"
  },
  {
   "media": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera"
  },
  {
   "media": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera"
  },
  {
   "media": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9988C2_610C_BC77_41D1_149D2483C988_camera"
  },
  {
   "media": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera"
  },
  {
   "media": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera"
  },
  {
   "media": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_camera"
  },
  {
   "media": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera"
  },
  {
   "media": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_camera"
  },
  {
   "media": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_camera"
  },
  {
   "media": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_camera"
  },
  {
   "media": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_camera"
  },
  {
   "media": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_camera"
  },
  {
   "media": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera"
  },
  {
   "media": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -126.89,
  "class": "PanoramaCameraPosition",
  "pitch": -14.92
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "2",
 "hfovMin": "135%",
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6",
 "overlays": [
  "this.overlay_33D25AB6_2641_B54B_41A8_A2D2953ED7CC",
  "this.panorama_2A304483_2641_9D49_41C0_773C487865A6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -106.79,
  "class": "PanoramaCameraPosition",
  "pitch": 7.32
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_camera"
},
{
 "items": [
  {
   "media": "this.video_49F84193_611D_D874_4196_5AFB6144F66B",
   "start": "this.viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4A145E60_6135_48D4_41D0_B750CE0A101F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4A145E60_6135_48D4_41D0_B750CE0A101F, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55EVideoPlayer)",
   "player": "this.viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55EVideoPlayer"
  }
 ],
 "id": "PlayList_4A145E60_6135_48D4_41D0_B750CE0A101F",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -1.06,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_45FD7A14_6115_DC13_41D2_0EB46932B408",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.13,
 "hideEasing": "cubic_out",
 "hfov": 12.42,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_4436B53C_6115_D412_41C6_2DDCBA93C23A.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "50",
 "hfovMin": "135%",
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58",
 "overlays": [
  "this.panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_tcap0",
  "this.overlay_7FAE9B42_52A0_B650_41D3_50B5CA89FDC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_camera"
},
{
 "initialPosition": {
  "yaw": 5.77,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 6.56
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "25",
 "hfovMin": "135%",
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6",
 "overlays": [
  "this.panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_tcap0",
  "this.overlay_4BB335BC_52E0_B230_41D2_62692C71DE5C",
  "this.overlay_4B316BEB_52E0_7650_41D4_A592FAB49523"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "63",
 "hfovMin": "135%",
 "id": "panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB",
 "overlays": [
  "this.overlay_7EAF5206_6134_EFFF_41BD_F60629A605DA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "26",
 "hfovMin": "135%",
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064",
 "overlays": [
  "this.panorama_D35638E6_DF50_6630_41EA_46C8F8244064_tcap0",
  "this.overlay_48DC2B35_52E0_F630_41C8_A01847CDE857",
  "this.overlay_468466A7_5654_54D2_41D0_00AB3DFACB46",
  "this.popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "38",
 "hfovMin": "135%",
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790",
 "overlays": [
  "this.panorama_D35D419F_DF50_2610_41E5_67745778D790_tcap0",
  "this.overlay_71FE7A42_52A0_5650_41A2_68B9D2718181"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_t.jpg",
 "class": "Panorama",
 "hfovMax": 138
},
{
 "items": [
  {
   "media": "this.video_59090B1B_575C_188F_41C2_7A164EA3B15E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32CE42_6135_48D7_41A1_A956CE34145B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32CE42_6135_48D7_41A1_A956CE34145B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32CE42_6135_48D7_41A1_A956CE34145B",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -76.79,
  "class": "PanoramaCameraPosition",
  "pitch": 10.53
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_camera"
},
{
 "initialPosition": {
  "yaw": 161.86,
  "class": "PanoramaCameraPosition",
  "pitch": 1.58
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_camera"
},
{
 "items": [
  {
   "media": "this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32EE42_6135_48D7_41C7_5C661BE04C62, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32EE42_6135_48D7_41C7_5C661BE04C62, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32EE42_6135_48D7_41C7_5C661BE04C62",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4A32BE42_6135_48D7_41D2_CB3184EBBB2D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4A32BE42_6135_48D7_41D2_CB3184EBBB2D, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4A32BE42_6135_48D7_41D2_CB3184EBBB2D",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "13",
 "hfovMin": "120%",
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60",
 "overlays": [
  "this.overlay_314E100E_2641_955B_41C2_678FB75B7443",
  "this.panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_t.jpg",
 "class": "Panorama",
 "hfovMax": 139
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "19",
 "hfovMin": "135%",
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A",
 "overlays": [
  "this.overlay_3E99619A_2641_977B_41A2_A614DA7BE598",
  "this.panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_camera"
},
{
 "initialPosition": {
  "yaw": 39.39,
  "class": "PanoramaCameraPosition",
  "pitch": 1.53
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "20",
 "hfovMin": "135%",
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5",
 "overlays": [
  "this.overlay_31C05AFC_2641_AABF_41C3_29A229A1D827",
  "this.panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "65",
 "hfovMin": "135%",
 "id": "panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97",
 "overlays": [
  "this.overlay_40F54487_613D_B4FD_4183_2D78C4A4C3A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D820051_610D_AC15_41A6_B51E29AE0401"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "34",
 "hfovMin": "135%",
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC",
 "overlays": [
  "this.panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_tcap0",
  "this.overlay_731F0257_52E0_B670_41CF_5B7203B93F34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "9",
 "hfovMin": "135%",
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C",
 "overlays": [
  "this.overlay_B7B35322_A75F_FB5E_41E3_9A590744A560",
  "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 10.38,
  "class": "PanoramaCameraPosition",
  "pitch": 9.21
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "8",
 "hfovMin": "135%",
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70",
 "overlays": [
  "this.overlay_3069220D_2640_B559_41AA_8B1F1D368008",
  "this.panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064_camera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_42169495_610F_B412_41C0_9D40E67939D0",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
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
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window50897"
 },
 "titleFontFamily": "Arial"
},
{
 "levels": [
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4A6FAE73_6135_48B4_4184_2E4F52E9CE4D"
},
{
 "initialPosition": {
  "yaw": -21.84,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -1.11
 },
 "class": "PanoramaCamera",
 "initialSequence": {
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
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_camera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "itemLabelFontFamily": "Arial",
 "horizontalAlign": "left",
 "id": "ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B",
 "backgroundOpacity": 0.24,
 "itemBorderRadius": 0,
 "right": "0.16%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailList",
 "verticalAlign": "top",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_2B49C631_2641_9D49_41B7_C9E55F22BE0B_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "height": "55.373%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "rollOverItemLabelFontWeight": "normal",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemLabelGap": 9,
 "paddingRight": 20,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "21.65%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailBorderRadius": 50
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A69AAC48_A8C7_FBA7_41CD_F3F63E2EEB5E",
 "backgroundOpacity": 0,
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
 "scrollBarVisible": "rollOver",
 "left": 459.05,
 "right": "35.71%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "hidden",
 "propagateClick": false,
 "minHeight": 20,
 "class": "Container",
 "verticalAlign": "middle",
 "bottom": "0.14%",
 "scrollBarWidth": 10,
 "height": 137,
 "minWidth": 20,
 "layout": "horizontal",
 "paddingBottom": 0,
 "gap": 4,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Tombol"
 },
 "shadow": false
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_D7E2CAE4_C596_ECBE_41E1_353BA31BCB95",
 "left": "0.6%",
 "width": "33.124%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "top": "1.03%",
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minWidth": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"><B>Perhatikan gambar ini dengan seksama</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:16px;\">Gambar tersebut menunjukkan adanya longsoran kecil yang terjadi di area pertanian sayur di Brakseng. Perubahan pengelolaan lahan dari yang awalnya hutan menjadi area pertanian sayur dapat berdampak serius terhadap lingkungan, salah satunya adalah peningkatan risiko tanah longsor. Berikut beberapa dampak yang ditimbulkan dari perubahan pengelolaan lahan: Hilangnya penahan alami tanah, perubahan struktur tanah, peningkatan aliran air permukaan, penurunan kesuburan tanah, kerusakan ekosistem dan sumber daya alam, penguranagn kualitas hidrologi. Secara keseluruhan, perubahan lahan dari hutan ke pertanian sayur yang tidak disertai dengan praktik konservasi tanah yang baik dapat memicu tanah longsor, mengancam keselamatan manusia, dan merusak ekosistem serta kualitas tanah di sekitarnya. Upaya mitigasi seperti penanaman kembali pohon di area kritis, penggunaan sistem terasering, dan pengelolaan air yang lebih baik menjadi penting untuk mencegah risiko ini. </SPAN></SPAN></DIV></div>",
 "height": "31.114%",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Longsor"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2",
 "left": "0%",
 "children": [
  "this.Container_F1046843_E59D_D80C_41C2_806B65205A57",
  "this.Container_F1071843_E59D_D80C_41C7_0901C9C99EEF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
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
 "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Brakseng"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_47066755_610F_58FC_41D7_5448283489DD",
 "left": "0%",
 "children": [
  "this.Container_49A068EF_610F_C9AC_41D5_EF218B83BEDE",
  "this.Container_47064755_610F_58FC_41C5_1C0B6AB8E37C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
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
 "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Longsor"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
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
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent67826"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "class": "ZoomImage",
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
  "name": "ZoomImage67827"
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
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
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
 "class": "CloseButton",
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
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
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
  "name": "CloseButton67828"
 },
 "fontSize": "1.29vmin",
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
 "id": "IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B7C48_A8C7_FBA7_41E1_C654F7B4BFCD.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27672"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.86,
   "yaw": 124.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_0_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 6.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_0_0.png",
      "width": 525,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": 6.98,
   "hfov": 30.86,
   "yaw": 124.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7585FF78_610D_5413_41C9_EA55B3284CE8",
 "data": {
  "label": "Sisa Longsoran"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 51.41,
   "yaw": 27.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_1_0.png",
      "width": 876,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 7.92,
   "hfov": 51.41,
   "yaw": 27.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7595D0D0_610C_EC13_4186_78AF136D12E9",
 "data": {
  "label": "Pembuatan Plengsengan Upaya\u000dMeminimalisir Longsor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.48,
   "yaw": -156.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_2_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_2_0.png",
      "width": 483,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": 5.61,
   "hfov": 28.48,
   "yaw": -156.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_75485003_610C_ABF5_41C6_AEDEF681197C",
 "data": {
  "label": "Plengsengan"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.08,
   "yaw": 44.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49621599_613B_5415_41C7_A0B1C60D80DA",
   "pitch": -13.57,
   "hfov": 11.08,
   "yaw": 44.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_755895E6_6115_543F_41D7_DB16A7912C5C",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -1.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_45FD7A14_6115_DC13_41D2_0EB46932B408, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_445C7E3A_6115_D417_41CE_4DE4104AB0BE, this.video_4436B53C_6115_D412_41C6_2DDCBA93C23A, this.PlayList_4A15BE5F_6135_48EC_41CF_195CC7CE7B47, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_1_HS_0_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 220
     }
    ]
   },
   "pitch": 6.13,
   "yaw": -1.06,
   "distance": 50
  }
 ],
 "id": "overlay_F19FEC89_E0D0_3EF0_41EA_A3EC4FA9EA19",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.2,
   "yaw": -172.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4695A57A_613B_5417_41CE_1D8CBB0AFDAF",
   "pitch": -30.53,
   "hfov": 15.2,
   "yaw": -172.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_49549F67_52E3_AE50_41CF_403E642B67F9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -35.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4694457A_613B_5417_41CF_9E30C587CBF4",
   "pitch": -27.09,
   "hfov": 12.83,
   "yaw": -35.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4CC5A839_52E0_7230_41D4_6C7DA70AF7DD",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.9,
   "yaw": -74.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4684156A_613B_5437_41D3_8C16C62E15B2",
   "pitch": -16.18,
   "hfov": 14.9,
   "yaw": -74.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B2067059_A774_55EA_41D7_EBAC5FED98FC",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.52,
   "yaw": 22.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59E2D1DB_575C_0B8F_41C0_511201061795, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BCCE35E_610D_6C0E_41D4_113F69F22BE1, this.video_59090B1B_575C_188F_41C2_7A164EA3B15E, this.PlayList_492CD607_613B_57FD_41D6_733575535D54, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_1_0.png",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ]
   },
   "pitch": -9.25,
   "yaw": 22.8,
   "distance": 50
  }
 ],
 "id": "overlay_CA8D6605_C58A_E77F_41D1_75170DF406B4",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -26.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49674599_613B_5415_41D4_AA4F5515CEA8",
   "pitch": 0.24,
   "hfov": 11.39,
   "yaw": -26.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7F776ED2_52A1_AE70_4182_89A6D3D9C949",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.31,
   "yaw": 2.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469E758A_613B_54F7_41CA_74409BFAB245",
   "pitch": -26.82,
   "hfov": 15.31,
   "yaw": 2.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_75F1EE0A_52A0_D1D0_41C5_B5BD72D5771F",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.77,
   "yaw": 173.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496E65A9_613B_5435_41D2_A96FB28D1A96",
   "pitch": -16.38,
   "hfov": 18.77,
   "yaw": 173.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40D1A817_6134_DC1E_41A6_0D3BB94C1101",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 33.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_468A257A_613B_5417_41A6_5C39AD1AE4A4",
   "pitch": -10.35,
   "hfov": 12.02,
   "yaw": 33.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BB317AE2_A8FD_BC6B_41C2_0E31998D37E1",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.47,
   "yaw": -104.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.26
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
   "distance": 100,
   "image": "this.AnimatedImageResource_4687555B_613B_5415_41D4_9AB6AB044EEB",
   "pitch": 3.26,
   "hfov": 12.47,
   "yaw": -104.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3031B16D_2640_B7D9_41B4_800ECC77F6FC",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A25FE27_6135_485D_41D8_582458DCED6E",
 "id": "viewer_uid4A25FE27_6135_485D_41D8_582458DCED6EVideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.48,
   "yaw": 176.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469FE58A_613B_54F7_41B8_F4D79149CCF7",
   "pitch": -26.51,
   "hfov": 14.48,
   "yaw": 176.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_75E60840_52A0_7250_418B_CAED987999D4",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.96,
   "yaw": 162.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49649599_613B_5415_415B_956363FA3938",
   "pitch": -20.02,
   "hfov": 17.96,
   "yaw": 162.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70BB3131_6137_AC15_41C9_825F6226481B",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.93,
   "yaw": -27.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_0_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_0_0.png",
      "width": 494,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -23.06,
   "hfov": 26.93,
   "yaw": -27.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7209029A_610B_6C17_41BE_AFADAF522CCE",
 "data": {
  "label": "View Longsoran "
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.99,
   "yaw": -29.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_1_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": -27.74,
   "yaw": -29.7,
   "distance": 50
  }
 ],
 "id": "overlay_77408D90_610F_7413_41D1_353097C6ED72",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.26,
   "yaw": 89.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49631599_613B_5415_41C8_7A7358079E0F",
   "pitch": -12.75,
   "hfov": 13.26,
   "yaw": 89.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78960C88_6114_D4F2_41CB_5A0172486DA4",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A25FE27_6135_485D_41D8_582458DCED6E",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67817"
 },
 "playbackBarHeight": 20,
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
   "hfov": 10.96,
   "yaw": 81.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4689A57A_613B_5417_41D5_7CE1E7B98379",
   "pitch": -15.91,
   "hfov": 10.96,
   "yaw": 81.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BD8BEB6F_A8FD_9C79_41B9_584962BAD5D7",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57",
 "id": "viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.92,
   "yaw": -142.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 100,
   "image": "this.AnimatedImageResource_4686356A_613B_5437_41C0_425CB47232D9",
   "pitch": -3.47,
   "hfov": 11.92,
   "yaw": -142.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33FC440C_2641_FD5F_41AE_FC038C20214C",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27663"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27668"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 29.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4AA99AD1_52E1_F670_41D2_975695D66AC3",
   "pitch": -14.81,
   "hfov": 16.59,
   "yaw": 29.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_304FC957_2640_97C9_4182_D295A892F188",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.05,
   "yaw": -73.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4AAACAD3_52E1_F670_41C4_D669E910D93F",
   "pitch": 3.51,
   "hfov": 10.05,
   "yaw": -73.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_402003AB_52A0_B6D0_41D3_47B74C6F3DAB",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.93,
   "yaw": -89.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_468DF57A_613B_5417_41C4_0C21ADDB044B",
   "pitch": -21.19,
   "hfov": 12.93,
   "yaw": -89.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_305902D7_2647_9AC9_4197_023287A02EF5",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15,
   "yaw": -135.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.08
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
   "distance": 50,
   "image": "this.AnimatedImageResource_4AB6BADD_52E1_F670_41B2_23F0BCD61DA2",
   "pitch": -29.08,
   "hfov": 15,
   "yaw": -135.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3F440FAE_2641_6B5B_4192_0E0CC65D0A04",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -112.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49662599_613B_5415_41CC_84209C94470D",
   "pitch": -15.36,
   "hfov": 10.72,
   "yaw": -112.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_791FF326_52A0_57D0_41CA_F910712CEA95",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.2,
   "yaw": -110.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -6.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_1_0.png",
      "width": 631,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -6.06,
   "hfov": 37.2,
   "yaw": -110.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C62FC06_52AF_F1D0_41D2_389F7C6E396A",
 "data": {
  "label": "Menuju Daerah Pujon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.05,
   "yaw": -33.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_47F96725_610B_785C_41D6_8458F5C7FCC2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4A627E7C_6135_48AC_41D6_ABA3857F99B5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4A3E2E3A_6135_48B7_41C1_BF20636DAC33",
   "pitch": -7.65,
   "hfov": 39.05,
   "yaw": -33.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_449E8489_610C_B854_41CB_10A08022A925",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.98,
   "yaw": -134.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496FA5A9_613B_5435_41D5_FC5DCD24037C",
   "pitch": -8.36,
   "hfov": 16.98,
   "yaw": -134.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A8A9C8E_610B_540E_41D6_1EC3CB4C92F7",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.75,
   "yaw": -96.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4689257A_613B_5417_41AD_7C61EAC7A583",
   "pitch": -7.46,
   "hfov": 13.75,
   "yaw": -96.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BD665D4B_A8FC_B5B9_41E3_BE2B953C7C89",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 41.8,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_1_0_map.gif",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -0.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_1_0.png",
      "width": 705,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -0.22,
   "hfov": 41.8,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_484F763D_52E0_BE30_416D_40E5DE03E13E",
 "data": {
  "label": "Menuju Telaga Madiredo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.76,
   "yaw": -14.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4398722D_610F_AC0D_4194_EDC876FB26E3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_42169495_610F_B412_41C0_9D40E67939D0, this.video_42ACE2C2_610F_AC76_41CB_5AB40437E207, this.PlayList_4A15FE5F_6135_48EC_41C7_72D1995AA04A, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_2_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "pitch": 1.12,
   "yaw": -14.45,
   "distance": 50
  }
 ],
 "id": "overlay_47791082_574C_0879_41BE_236A3F40CEB0",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.07,
   "yaw": -133.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_469FB58A_613B_54F7_41C9_B73F151AD3FC",
   "pitch": -21.56,
   "hfov": 8.07,
   "yaw": -133.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_758CCABB_52A0_D630_41BE_862BFF128321",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 54.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_469B5599_613B_5415_41AD_F74DEBABABB5",
   "pitch": -11.72,
   "hfov": 11.96,
   "yaw": 54.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_783B691C_52A0_53F0_41CC_9643779BD6A1",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 56.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_469AD599_613B_5415_41D4_FC6099F8EBEA",
   "pitch": -6.64,
   "hfov": 8.86,
   "yaw": 56.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D8FA01C_52A0_51F0_41C4_F952A751B50F",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.6,
   "yaw": 164.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4690458A_613B_54F7_418C_456ADA7A488B",
   "pitch": -42.45,
   "hfov": 15.6,
   "yaw": 164.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7048D086_52E1_F2D0_41D3_6112D628B96A",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 103.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4692358A_613B_54F7_41C4_29111B1E1762",
   "pitch": -17.55,
   "hfov": 13.74,
   "yaw": 103.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4D27C4F8_52E1_D230_41CF_0491E0A7C63A",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.8,
   "yaw": -116.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49651599_613B_5415_41D6_2415B06509C2",
   "pitch": -10.6,
   "hfov": 16.8,
   "yaw": -116.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70C02472_613B_7417_41D6_374D81B20327",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.31,
   "yaw": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4A3FEE3A_6135_48B7_41AD_2A53DB314C80",
   "pitch": -9.8,
   "hfov": 35.31,
   "yaw": 5.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4AB3CC20_613F_C854_41B7_35FFE1E1084D",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 9.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4AAA0AD4_52E1_F670_41B6_2948CB8B8F69",
   "pitch": -14.81,
   "hfov": 16.59,
   "yaw": 9.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B5E49DAC_A754_4EAA_41C8_11D4EE6987B1",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.84,
   "yaw": -120.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496D95A9_613B_5435_4178_A970F5E86AE2",
   "pitch": -11.1,
   "hfov": 16.84,
   "yaw": -120.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40A25B36_6135_BC1F_41CA_154CB0F4F8D4",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35830C5_DF50_2671_41CB_BB0454070201_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.55,
   "yaw": -22.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4693158A_613B_54F7_41C1_EB13816DD436",
   "pitch": -17.28,
   "hfov": 14.55,
   "yaw": -22.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_733F804B_52E0_5250_41D2_8DFC5C60F2CA",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.71,
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_46061ED3_61F5_C9F5_41AB_3CB455C88E0D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4A6FAE73_6135_48B4_4184_2E4F52E9CE4D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4692B58A_613B_54F7_41C1_1338BE0F8246",
   "pitch": 11.34,
   "hfov": 25.71,
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58591E3D_5654_5436_41BF_CFF64722AB19",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.55,
   "yaw": 179.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469C958A_613B_54F7_41BC_B4AB72004E82",
   "pitch": -32.08,
   "hfov": 13.55,
   "yaw": 179.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A119007_52A7_B1D0_41C3_B619A3830C07",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.67,
   "yaw": 128.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4698B599_613B_5415_41CE_8AF5FCC0FDDC",
   "pitch": -17.97,
   "hfov": 12.67,
   "yaw": 128.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66884B64_52A3_F650_416F_8609194C6476",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -6.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59869DD9_5654_547E_41C5_EDF38103D19A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BCF835E_610D_6C0E_41D7_90DD6D5F0291, this.video_4622AEE8_5654_545D_41C5_4D4C9557A17D, this.PlayList_492A5607_613B_57FD_41AE_63B7B9B28400, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -0.94,
   "yaw": -6.97,
   "distance": 50
  }
 ],
 "id": "overlay_59C82CA5_5655_F4D6_41BE_28042750AE83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.7,
   "yaw": -82.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.09
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
   "distance": 100,
   "image": "this.AnimatedImageResource_46B8855B_613B_5415_41D5_B6C9AF423F26",
   "pitch": -13.09,
   "hfov": 12.7,
   "yaw": -82.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_303AE09F_264F_9579_41B9_8C196E8535F3",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.02,
   "yaw": -27.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_450ADD29_611C_B435_41C6_FFDBAE758CC1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_45899032_611C_AC17_41CB_CE0D92BFF84D, this.video_446145B7_611C_F41D_416E_FA9CAC510D24, this.PlayList_4A157E60_6135_48D4_41C8_5BF7619CF573, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_1_HS_0_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 220
     }
    ]
   },
   "pitch": 2.97,
   "yaw": -27.9,
   "distance": 50
  }
 ],
 "id": "overlay_F267B298_E0D0_6A1F_41EA_DA90E7BA3085",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 14.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4693858A_613B_54F7_41D6_556BE8F24843",
   "pitch": -11.86,
   "hfov": 12.76,
   "yaw": 14.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4DB795F1_52E0_B230_41D0_382FA9EBF302",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67823"
 },
 "playbackBarHeight": 20,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997F",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67825"
 },
 "playbackBarHeight": 20,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389",
 "id": "viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.19,
   "yaw": -22.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_468AB57A_613B_5417_4130_7214CD0B7AC0",
   "pitch": -21.12,
   "hfov": 13.19,
   "yaw": -22.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3113F4F7_2640_9EC9_41AD_CEEBE159B050",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99",
 "id": "viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.6,
   "yaw": -103.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4685A56A_613B_5437_41BF_71B66F81CA8B",
   "pitch": -6.16,
   "hfov": 14.6,
   "yaw": -103.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_334D4FC5_2643_AAC9_41A1_F30013C576D9",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A306080_2641_7547_419D_6ED179219674_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.97,
   "yaw": -124.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496015A9_613B_5435_41D3_CDF87923EEE5",
   "pitch": -8.77,
   "hfov": 13.97,
   "yaw": -124.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_782F7965_611B_DC3D_41BA_B75187905AF9",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051",
 "id": "viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051VideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 77.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_468C557A_613B_5417_41AD_ECDAA44EE15F",
   "pitch": -17,
   "hfov": 10.9,
   "yaw": 77.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_45675E69_52E3_EE50_4198_B1D83AA58CC2",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.86,
   "yaw": -22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_58B5736C_574C_0889_41CA_7AB0A130CC59, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BCDA35E_610D_6C0E_41CB_497CF1604D4D, this.video_5819CD50_574C_1898_41BE_5050055E22DF, this.PlayList_492B7607_613B_57FD_4184_D74472D766C1, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_2_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ]
   },
   "pitch": -1.7,
   "yaw": -22,
   "distance": 50
  }
 ],
 "id": "overlay_587F64A1_5744_09BB_41D0_826DFC84D807",
 "data": {
  "label": "Image"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A390E2F_6135_48AD_41BE_5746EAFCA389",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67821"
 },
 "playbackBarHeight": 20,
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
   "hfov": 14.48,
   "yaw": 115.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_468CF57A_613B_5417_41D0_3D14ED5E0D5B",
   "pitch": -14.53,
   "hfov": 14.48,
   "yaw": 115.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3043F070_2641_F5C7_41A5_B22E2676E795",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.14,
   "yaw": 3.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4696057A_613B_5417_41B6_1CA0948B6392",
   "pitch": -23.96,
   "hfov": 6.14,
   "yaw": 3.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_481CA6E5_52E1_BE50_41C5_8C5E9A237129",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -64.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 100,
   "image": "this.AnimatedImageResource_4685156A_613B_5437_41D3_046B29086A25",
   "pitch": -4.65,
   "hfov": 13.82,
   "yaw": -64.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33F2FFA9_2641_AB59_41B9_3D0177BB016D",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D356984F_DF50_6670_41DD_FB2F592410EE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.99,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4694D57A_613B_5417_41D1_A1AB3B6952C5",
   "pitch": -20.44,
   "hfov": 12.99,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_49AD35A8_52E0_72D0_41C8_9990891DA7DB",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.24,
   "yaw": 173.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469C358A_613B_54F7_41A3_08E89AC2ABD5",
   "pitch": -34.1,
   "hfov": 13.24,
   "yaw": 173.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79F3D8E0_52A1_F251_41C6_97558F44FA88",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8",
 "id": "viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55E",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67824"
 },
 "playbackBarHeight": 20,
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
   "hfov": 15.8,
   "yaw": -142.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496095A9_613B_5435_41AC_41E1D506CC09",
   "pitch": -22.98,
   "hfov": 15.8,
   "yaw": -142.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76F34FB3_6114_F415_41BE_0CA933719B77",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A3D8E36_6135_48BC_41A5_6273503D1051",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67822"
 },
 "playbackBarHeight": 20,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.53,
   "yaw": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_469ED58A_613B_54F7_41D6_7D7FF47EB83B",
   "pitch": -12.61,
   "hfov": 13.53,
   "yaw": 4.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_772F3C32_52A1_D230_41CB_B617C4919A3D",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67",
 "id": "viewer_uid4A3D1E37_6135_48BC_41B7_C90F0C509B67VideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4690C58A_613B_54F7_41D3_044E0D794C98",
   "pitch": -35.35,
   "hfov": 8.29,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7070B844_52E3_B250_41D0_7D9E40F397AD",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A266E29_6135_4855_41D3_D0201B38ED57",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67818"
 },
 "playbackBarHeight": 20,
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
   "hfov": 10.29,
   "yaw": -15.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_477997A1_611B_D855_41D3_039B056CADA3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_46F71A17_611B_C87D_41A1_2BF6C0C6B508, this.video_463FC3E2_611B_5FD4_4191_A927DA6C5919, this.PlayList_4A140E61_6135_48D4_41D1_B37E31B00D08, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D820051_610D_AC15_41A6_B51E29AE0401_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 1.25,
   "yaw": -15.82,
   "distance": 50
  }
 ],
 "id": "overlay_46DAC53E_611B_58AC_41C8_3C2A8D17A049",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.69,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_468D357A_613B_5417_41BC_8B1AE02AB25E",
   "pitch": -6.23,
   "hfov": 12.69,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33DF8A4B_2640_95D9_41B6_707F519AB636",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.02,
   "yaw": 8.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469EB58A_613B_54F7_41D2_D81365619700",
   "pitch": -22.98,
   "hfov": 13.02,
   "yaw": 8.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_77FF7D94_52A3_D2F0_41AF_CFE3814548F3",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B1C48_A8C7_FBA7_41D6_A37A9275BAD7.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27670"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A6985C48_A8C7_FBA7_41D0_9C5E50B38173.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27662"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B5C48_A8C7_FBA7_41CC_FE41F4987879.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27673"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27667"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B8C48_A8C7_FBA7_41D0_E1BF56D9E8A9.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27665"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.47,
   "yaw": -178.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469D958A_613B_54F7_41D8_1CD051746779",
   "pitch": -23.53,
   "hfov": 13.47,
   "yaw": -178.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A574EE9_52AF_AE50_41BD_AEC09D3DE28A",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 41.66,
   "yaw": -177.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_1_0_map.gif",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -4.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_1_0.png",
      "width": 705,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -4.68,
   "hfov": 41.66,
   "yaw": -177.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76841B77_52A0_5630_41D1_8222E3B2B8E9",
 "data": {
  "label": "Menuju Desa Sekitar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.44,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496E25A9_613B_5435_41D3_EDCDB47F451A",
   "pitch": -8.49,
   "hfov": 13.44,
   "yaw": -94.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_43ED229E_613C_EC0E_41CA_4C6D8F229649",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.46,
   "yaw": 31.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_0_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_0_0.png",
      "width": 472,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": 10.93,
   "hfov": 27.46,
   "yaw": 31.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_747E146F_6114_B40D_41D3_121AAC1E44BD",
 "data": {
  "label": "Sisa Longsoran"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.48,
   "yaw": 114.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_1_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": -19.68,
   "yaw": 114.89,
   "distance": 50
  }
 ],
 "id": "overlay_77C7AFBF_6114_D40D_41D1_330724A58086",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.3,
   "yaw": 116.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_2_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_1_HS_2_0.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -11.08,
   "hfov": 19.3,
   "yaw": 116.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_77AA545F_6115_B40E_41D2_0C6068B21E23",
 "data": {
  "label": "Kembali"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.57,
   "yaw": 26.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 4.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_46150353_611D_58F5_41CA_60C870685261, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_49A3C74C_611D_58D3_41D4_05F4204CCA0D, this.video_49F84193_611D_D874_4196_5AFB6144F66B, this.PlayList_4A145E60_6135_48D4_41D0_B750CE0A101F, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D99E2A6_610C_AC3F_41C0_F42461864025_0_HS_3_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ]
   },
   "pitch": 4.01,
   "yaw": 26.34,
   "distance": 50
  }
 ],
 "id": "overlay_4717EF4D_611C_C8EC_41D1_D32FE3B2867B",
 "data": {
  "label": "Image"
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997F",
 "id": "viewer_uid4A318E41_6135_48D5_41C1_BCF1DEFF997FVideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -146.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469A2599_613B_5415_41BD_5EE63E865E96",
   "pitch": -12.06,
   "hfov": 11.96,
   "yaw": -146.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78699CE5_52A0_F250_41BE_8A4B5BBB260F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.12,
   "yaw": -9.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_59C0B6DB_5654_D472_41CC_9481FD91F75A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BCEA35E_610D_6C0E_41AB_FA001CC0DF27, this.video_466DD8A4_5654_5CD6_41C1_01B61AE2A470, this.PlayList_492AD607_613B_57FD_41D6_DA17E70F2CEB, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -10.69,
   "yaw": -9.85,
   "distance": 50
  }
 ],
 "id": "overlay_7E047D33_52A0_5230_41C0_092B49E7B675",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.91,
   "yaw": 123.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_496ED5A9_613B_5435_41C3_7A6F9E98A083",
   "pitch": -8.64,
   "hfov": 7.91,
   "yaw": 123.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7ED84FC2_6135_B477_41D5_5877744E6FEC",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.92,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 100,
   "image": "this.AnimatedImageResource_46B8755B_613B_5415_41C7_C7C74AE0929A",
   "pitch": -7.67,
   "hfov": 12.92,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30CFBA94_2641_954F_41B0_4FF48C7E5194",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A39EE2D_6135_48AD_41B3_6B53778E5E99",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67820"
 },
 "playbackBarHeight": 20,
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
   "hfov": 14.39,
   "yaw": -71.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.51
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
   "distance": 100,
   "image": "this.AnimatedImageResource_4687E55B_613B_5415_41D2_7E015359E6F4",
   "pitch": -11.51,
   "hfov": 14.39,
   "yaw": -71.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30CEFE46_2643_6DCB_41B5_FB0DC4EFB7F7",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.48,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_46B9455B_613B_5415_41B6_7683EA473564",
   "pitch": -7.4,
   "hfov": 13.48,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33D25AB6_2641_B54B_41A8_A2D2953ED7CC",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A304483_2641_9D49_41C0_773C487865A6_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "class": "VideoPlayer",
 "buttonRestart": "this.IconButton_A6984C48_A8C7_FBA7_41DF_3A85DE636D03",
 "buttonPause": "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
 "viewerArea": "this.viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55E",
 "id": "viewer_uid4A30DE3D_6135_48AD_41D2_8A28CCF6D55EVideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.9,
   "yaw": -128.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_49669599_613B_5415_41AF_9832D24039BA",
   "pitch": -46.11,
   "hfov": 11.9,
   "yaw": -128.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7FAE9B42_52A0_B650_41D3_50B5CA89FDC1",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.67,
   "yaw": -89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_0_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 12.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_0_0.png",
      "width": 617,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": 12.82,
   "hfov": 35.67,
   "yaw": -89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4BB335BC_52E0_B230_41D2_62692C71DE5C",
 "data": {
  "label": "Telaga Madiredo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -59.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4697957A_613B_5417_41AB_054562B436A6",
   "pitch": -17.69,
   "hfov": 12.42,
   "yaw": -59.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B316BEB_52E0_7650_41D4_A592FAB49523",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.88,
   "yaw": -132.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_496E95A9_613B_5435_419E_2554337B0F36",
   "pitch": -10.42,
   "hfov": 16.88,
   "yaw": -132.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7EAF5206_6134_EFFF_41BD_F60629A605DA",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35638E6_DF50_6630_41EA_46C8F8244064_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.54,
   "yaw": 65.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4697057A_613B_5417_41D1_959CBBD4243E",
   "pitch": -15.89,
   "hfov": 12.54,
   "yaw": 65.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_48DC2B35_52E0_F630_41C8_A01847CDE857",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.3,
   "yaw": 19.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_49E5F82E_61F5_48AC_41C8_3A491CFD2A89, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4A6DEE6E_6135_48AC_418B_C2866F6CAEA1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4696957A_613B_5417_41D1_098741FE5C64",
   "pitch": 5.1,
   "hfov": 25.3,
   "yaw": 19.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_468466A7_5654_54D2_41D0_00AB3DFACB46",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D35D419F_DF50_2610_41E5_67745778D790_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.43,
   "yaw": 132.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_469F158A_613B_54F7_41B9_96220EABCF81",
   "pitch": -21.05,
   "hfov": 12.43,
   "yaw": 132.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_71FE7A42_52A0_5650_41A2_68B9D2718181",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.25,
   "yaw": -133.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4684956A_613B_5437_41D5_6EC00920EE02",
   "pitch": -5.61,
   "hfov": 13.25,
   "yaw": -133.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_314E100E_2641_955B_41C2_678FB75B7443",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.39,
   "yaw": 98.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_468B457A_613B_5417_41D3_AA71506FAE53",
   "pitch": -21.74,
   "hfov": 13.39,
   "yaw": 98.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E99619A_2641_977B_41A2_A614DA7BE598",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.41,
   "yaw": 65.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4AB88ADF_52E1_F670_41C8_E86093B72CA4",
   "pitch": -26.06,
   "hfov": 15.41,
   "yaw": 65.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31C05AFC_2641_AABF_41C3_29A229A1D827",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_496D45A9_613B_5435_41C5_1B5C6485BD6E",
   "pitch": -21.75,
   "hfov": 13.83,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40F54487_613D_B4FD_4183_2D78C4A4C3A1",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.74,
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4691B58A_613B_54F7_41D2_6F6CBBB3E905",
   "pitch": -10.69,
   "hfov": 11.74,
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_731F0257_52E0_B670_41CF_5B7203B93F34",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.67,
   "yaw": 96.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.73
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
   "distance": 50,
   "image": "this.AnimatedImageResource_4686A55B_613B_5415_41C8_2E3CBF79A05C",
   "pitch": -0.73,
   "hfov": 11.67,
   "yaw": 96.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B7B35322_A75F_FB5E_41E3_9A590744A560",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -133.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4686C55B_613B_5415_41C4_CCEDCDC66047",
   "pitch": -2.95,
   "hfov": 13.85,
   "yaw": -133.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3069220D_2640_B559_41AA_8B1F1D368008",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ]
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4A270E2C_6135_4853_419A_6D7EC3CDE9E8",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
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
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
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
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "ViewerArea67819"
 },
 "playbackBarHeight": 20,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74_pressed.png",
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69BBC48_A8C7_FBA7_419E_8E8795C74B74.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27664"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A69BFC48_A8C7_FBA7_41D2_176D4A3A27F7",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_A69BEC48_A8C7_FBA7_41D3_2C584CAFB521",
  "this.IconButton_A69BCC48_A8C7_FBA7_41D8_639723DB5DA2",
  "this.IconButton_A69B3C48_A8C7_FBA7_4191_AB797BD478DA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
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
  "name": "Container27666"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130_pressed.png",
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_A69B0C48_A8C7_FBA7_41D3_CF2E1F6A6130.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27671"
 },
 "cursor": "hand"
},
{
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F1046843_E59D_D80C_41C2_806B65205A57",
 "left": "10%",
 "children": [
  "this.Container_F1045843_E59D_D80C_41CC_030384A88684",
  "this.Container_F107B843_E59D_D80C_41CF_33B317286720"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
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
 "id": "Container_F1071843_E59D_D80C_41C7_0901C9C99EEF",
 "left": "10%",
 "children": [
  "this.IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
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
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_49A068EF_610F_C9AC_41D5_EF218B83BEDE",
 "left": "9.89%",
 "children": [
  "this.Container_49B5C879_610F_C8B5_41CB_F6352DB16149",
  "this.Container_49B5487A_610F_C8B7_41B1_BD6281F4E826"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10.11%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "4.92%",
 "verticalAlign": "top",
 "bottom": "5.08%",
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
 "id": "Container_47064755_610F_58FC_41C5_1C0B6AB8E37C",
 "left": "10%",
 "children": [
  "this.IconButton_47067755_610F_58FC_41AC_F79F5EAF9023"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
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
 "levels": [
  {
   "url": "media/panorama_6D9988C2_610C_BC77_41D1_149D2483C988_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49621599_613B_5415_41C7_A0B1C60D80DA",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D353F73E_DF50_2A13_41C3_68A09E8CE8CD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4695A57A_613B_5417_41CE_1D8CBB0AFDAF",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D352B641_DF50_2A70_41CA_F09B0C68FCCF_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4694457A_613B_5417_41CF_9E30C587CBF4",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A304B31_2640_AB49_41BB_F279A4FFD4E4_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4684156A_613B_5437_41D3_8C16C62E15B2",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5EE38B00_52A0_57D0_41C1_7F1C7FADBE70_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49674599_613B_5415_41D4_AA4F5515CEA8",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D354B86C_DF50_2630_41D1_E7F967B72CE2_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469E758A_613B_54F7_41CA_74409BFAB245",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D9027EF_610C_D40D_41C2_EA9CB7B94ED9_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496E65A9_613B_5435_41D2_A96FB28D1A96",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2BD64369_2647_9BD9_41BE_5653FC6664E9_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468A257A_613B_5417_41A6_5C39AD1AE4A4",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30CAFF_2641_AAB9_41B6_B493C4F4CB42_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4687555B_613B_5415_41D4_9AB6AB044EEB",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35C1D5F_DF50_FE10_41EB_7039FF351D76_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469FE58A_613B_54F7_41B8_F4D79149CCF7",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D9773E9_610C_EC32_41AF_289DA39CF6CC_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49649599_613B_5415_415B_956363FA3938",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D938A89_610C_FCF5_41CE_49296EB6B906_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49631599_613B_5415_41C8_7A7358079E0F",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A8F4EE4B_A632_6AA2_419B_09A390A82D73_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4689A57A_613B_5417_41D5_7CE1E7B98379",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30C63C_2641_9DBF_41AE_C774C27AC450_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4686356A_613B_5437_41C0_425CB47232D9",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4AA99AD1_52E1_F670_41D2_975695D66AC3",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30B07B_2641_B5B9_41C0_42DD8685FB08_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4AAACAD3_52E1_F670_41C4_D669E910D93F",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468DF57A_613B_5417_41C4_0C21ADDB044B",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37DB33_2640_EB49_41BF_DBDF282CC293_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4AB6BADD_52E1_F670_41B2_23F0BCD61DA2",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49662599_613B_5415_41CC_84209C94470D",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5CCA7962_52A1_B250_41BC_D5E4CBCA4878_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4A3E2E3A_6135_48B7_41C1_BF20636DAC33",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6DAC7AF3_610D_5C15_41CB_3E3EF2DD67EA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496FA5A9_613B_5435_41D5_FC5DCD24037C",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A8FA3C1A_A632_2EA3_41D8_36BD198A0553_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4689257A_613B_5417_41AD_7C61EAC7A583",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D36723F0_DF50_6A10_41E7_24BF83F8F475_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469FB58A_613B_54F7_41C9_B73F151AD3FC",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469B5599_613B_5415_41AD_F74DEBABABB5",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35FF3EC_DF50_2A37_41DC_A71F886DEE37_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469AD599_613B_5415_41D4_FC6099F8EBEA",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35E8C23_DF50_1E30_41C6_5F218A0E2CDB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4690458A_613B_54F7_418C_456ADA7A488B",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35D9FC8_DF50_1A7F_41C4_0292FB5A004F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4692358A_613B_54F7_41C4_29111B1E1762",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49651599_613B_5415_41D6_2415B06509C2",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D8037B4_610D_7413_41D6_1C23EE32CD4E_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4A3FEE3A_6135_48B7_41AD_2A53DB314C80",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A8EC4E61_A631_EA9E_41C5_383EAAE5D8FF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4AAA0AD4_52E1_F670_41B6_2948CB8B8F69",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D930F73_610C_B415_41B5_7FE6E914C33B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496D95A9_613B_5435_4178_A970F5E86AE2",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4693158A_613B_54F7_41C1_EB13816DD436",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35830C5_DF50_2671_41CB_BB0454070201_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4692B58A_613B_54F7_41C1_1338BE0F8246",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D34498A5_DF50_E631_41CD_FA61F03DE975_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469C958A_613B_54F7_41BC_B4AB72004E82",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5EF5DA1C_52A0_51F0_41C9_91F9E308F1CE_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4698B599_613B_5415_41CE_8AF5FCC0FDDC",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30D9E4_2641_F6CF_41B6_6963EA366F4B_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_46B8855B_613B_5415_41D5_B6C9AF423F26",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35E61DC_DF51_E617_41DE_A372F7F77DBF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4693858A_613B_54F7_41D6_556BE8F24843",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37A625_2640_9D49_41B8_0D47B6ECE9B6_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468AB57A_613B_5417_4130_7214CD0B7AC0",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A306080_2641_7547_419D_6ED179219674_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4685A56A_613B_5437_41BF_71B66F81CA8B",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6DAF267E_610D_740F_41C5_5E9C7746D766_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496015A9_613B_5435_41D3_CDF87923EEE5",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37C558_2640_9FC7_41BE_23AA5BBC00EF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468C557A_613B_5417_41AD_ECDAA44EE15F",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37B5D3_2640_9EC9_41B5_1CE27E1AA4DE_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468CF57A_613B_5417_41D0_3D14ED5E0D5B",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35473EC_DF51_EA30_41DE_911A567BAFC7_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4696057A_613B_5417_41B6_1CA0948B6392",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30764E_2640_9DDB_41BE_B0C7FE26FFE8_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4685156A_613B_5437_41D3_046B29086A25",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D356984F_DF50_6670_41DD_FB2F592410EE_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4694D57A_613B_5417_41D1_A1AB3B6952C5",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D367ED1C_DF50_1E10_41D8_586CA9C06D3D_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469C358A_613B_54F7_41A3_08E89AC2ABD5",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D997C2D_610D_5432_41CD_A83AFA20B3DA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496095A9_613B_5435_41AC_41E1D506CC09",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35D75B2_DF50_6E13_419D_B4D5AA8F2F1C_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469ED58A_613B_54F7_41D6_7D7FF47EB83B",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D3536B18_DF50_3A10_41E1_613DFA0E3991_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4690C58A_613B_54F7_41D3_044E0D794C98",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37FF5B_2640_EBF9_41AA_F466DB4F26FE_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468D357A_613B_5417_41BC_8B1AE02AB25E",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D36552D9_DF50_2A10_41E5_D7CA39073EB5_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469EB58A_613B_54F7_41D2_D81365619700",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D359C679_DF50_2A11_41EA_1DB3356DAD84_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469D958A_613B_54F7_41D8_1CD051746779",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6DAE0900_610D_DDF3_4186_6B6B3C8483E0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496E25A9_613B_5435_41D3_EDCDB47F451A",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5EFDF4F3_52A0_7230_41D1_0CE4641CEDED_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469A2599_613B_5415_41BD_5EE63E865E96",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D979E0C_610C_F7F3_41D6_D9597495070A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496ED5A9_613B_5435_41C3_7A6F9E98A083",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30FF06_2641_EB4B_4170_64B77910A5C8_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_46B8755B_613B_5415_41C7_C7C74AE0929A",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30D560_2641_9FC7_41C1_16C89AFF4DA8_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4687E55B_613B_5415_41D2_7E015359E6F4",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A304483_2641_9D49_41C0_773C487865A6_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_46B9455B_613B_5415_41B6_7683EA473564",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5EFDD15A_52A0_5270_41BC_CDEC26F6FD58_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_49669599_613B_5415_41AF_9832D24039BA",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5EF74F98_52A0_6EF0_41D2_2ACA05C638A6_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4697957A_613B_5417_41AB_054562B436A6",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D802B8B_610D_5CF5_41D6_193CB78055EB_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496E95A9_613B_5435_419E_2554337B0F36",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4697057A_613B_5417_41D1_959CBBD4243E",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35638E6_DF50_6630_41EA_46C8F8244064_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4696957A_613B_5417_41D1_098741FE5C64",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D35D419F_DF50_2610_41E5_67745778D790_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_469F158A_613B_54F7_41B9_96220EABCF81",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37A073_2640_B5C9_41BE_7276EECF1C60_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4684956A_613B_5437_41D5_6EC00920EE02",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37AA99_2640_B579_41C2_74B78301CB0A_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_468B457A_613B_5417_41D3_AA71506FAE53",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A37A038_2640_B547_41B4_2A416A8E7FF5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4AB88ADF_52E1_F670_41C8_E86093B72CA4",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_6D80BCD7_610D_F41D_41A3_C77AEB9CED97_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_496D45A9_613B_5435_41C5_1B5C6485BD6E",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D3654EF0_DF50_7A10_41E8_EF4E8D46E8CC_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4691B58A_613B_54F7_41D2_6F6CBBB3E905",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_A868A3CD_A632_19A6_41E0_F9E9FD4D8B9C_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4686A55B_613B_5415_41C8_2E3CBF79A05C",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_2A30C06F_2641_B5D9_41AC_5E2A5E36EC70_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4686C55B_613B_5415_41C4_CCEDCDC66047",
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_F1045843_E59D_D80C_41CC_030384A88684",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_F1044843_E59D_D80C_41EB_70C80D7E1E47"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
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
 "id": "Container_F107B843_E59D_D80C_41CF_33B317286720",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_F1079843_E59D_D80C_41CA_F6FEA2EDA83A",
  "this.Container_F1078843_E59D_D80C_41B7_9B2478572818",
  "this.Container_F1072843_E59D_D80C_41D7_9841AA239F9F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
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
 "id": "IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_F1077843_E59D_D80C_41E7_9EBDF6ED68D2, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_F1070843_E59D_D80C_41E9_6E4288B14EC5_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_49B5C879_610F_C8B5_41CB_F6352DB16149",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_49B53879_610F_C8B5_418B_088373BBA3F7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
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
 "id": "Container_49B5487A_610F_C8B7_41B1_BD6281F4E826",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_49B5687F_610F_C8AC_41CC_D811EA1E345B",
  "this.Container_49B4B87F_610F_C8AC_41C7_2AA728021AB6",
  "this.Container_49B6B889_610F_C855_41D6_65B12F17907A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
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
 "id": "IconButton_47067755_610F_58FC_41AC_F79F5EAF9023",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_47066755_610F_58FC_41D7_5448283489DD, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_47067755_610F_58FC_41AC_F79F5EAF9023_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_F1044843_E59D_D80C_41EB_70C80D7E1E47",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_F1044843_E59D_D80C_41EB_70C80D7E1E47.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
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
 "id": "Container_F1079843_E59D_D80C_41CA_F6FEA2EDA83A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "height": 60,
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
 "id": "Container_F1078843_E59D_D80C_41B7_9B2478572818",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_F107F843_E59D_D80C_41E6_20AC38135C69",
  "this.Container_F107E843_E59D_D80C_41DD_2F32C2056DB7",
  "this.Container_F107D843_E59D_D80C_41E1_9BA4C9D3B20F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 200,
 "scrollBarWidth": 10,
 "class": "Container",
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
 "paddingBottom": 0,
 "gap": 0,
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
 "id": "Container_F1072843_E59D_D80C_41D7_9841AA239F9F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
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
 "class": "Container",
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
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_49B53879_610F_C8B5_418B_088373BBA3F7",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_49B53879_610F_C8B5_418B_088373BBA3F7.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
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
 "id": "Container_49B5687F_610F_C8AC_41CC_D811EA1E345B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "height": 60,
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
 "id": "Container_49B4B87F_610F_C8AC_41C7_2AA728021AB6",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_49B42880_610F_C854_41D2_CF8AD9DBB2FF",
  "this.Container_49B44880_610F_C854_41C3_560180BF58AA",
  "this.Container_49B78881_610F_C854_41C0_2895CC74BF56"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 200,
 "scrollBarWidth": 10,
 "class": "Container",
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
 "paddingBottom": 0,
 "gap": 0,
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
 "id": "Container_49B6B889_610F_C855_41D6_65B12F17907A",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
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
 "class": "Container",
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
 "scrollBarOpacity": 0,
 "id": "HTMLText_F107F843_E59D_D80C_41E6_20AC38135C69",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "21.411%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b2d337;font-size:5.21vh;\"><B>Hallo!</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.33vh;\"><B>Selamat datang dalam perjalanan virtual Objek Wisata Brakseng</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F107E843_E59D_D80C_41DD_2F32C2056DB7",
 "backgroundOpacity": 1,
 "width": "96.354%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "0.705%",
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
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F107D843_E59D_D80C_41E1_9BA4C9D3B20F",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_F1073843_E59D_D80C_41E1_FB2C48C62FCF"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "70%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 22,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_49B42880_610F_C854_41D2_CF8AD9DBB2FF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "14.772%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b2d337;font-size:5.21vh;\"><B>Pujon, Malang</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.33vh;\"><B>Di bawah bayang-bayang longsor</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_49B44880_610F_C854_41C3_560180BF58AA",
 "backgroundOpacity": 1,
 "width": "96.354%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "0.705%",
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
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_49B78881_610F_C854_41C0_2895CC74BF56",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_49B76888_610F_C853_41D2_8D1AB33A1078"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
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
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "70%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 22,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_F1073843_E59D_D80C_41E1_FB2C48C62FCF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Salah satu objek wisata di dataran tinggi Kota Batu, Jawa Timur menekankan pada aspek pertanian. Di sini, kita akan disuguhkan pemandangan alam perbukitan hijau yang memukau, perkebunan yang luas, dan udara segar khas pegunungan. Namun, di balik keindahan alam ini, Brakseng juga menjadi contoh penting dalam kajian isu lingkungan, khususnya terkait dengan degradasi lahan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Dalam virtual fieldtrip ini, kita tidak hanya menjelajahi pesona alam Brakseng, tetapi juga mendalami dampak aktivitas manusia terhadap lingkungan sekitar. Kawasan pertanian di Brakseng telah lama menjadi sumber penghidupan bagi masyarakat lokal, tetapi praktik pertanian yang tidak berkelanjutan juga memiliki risiko terhadap kualitas tanah dan kesehatan ekosistem.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Kita akan membahas bagaimana aktivitas pertanian intensif dapat memicu degradasi lahan mulai dari erosi tanah, penurunan kesuburan tanah, hingga perubahan pola aliran air. Namun, selain itu, kita juga akan melihat upaya-upaya lokal untuk mengatasi tantangan ini, seperti penerapan metode pertanian ramah lingkungan dan langkah-langkah konservasi tanah dan air.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Melalui perjalanan ini, Anda akan mendapatkan wawasan tidak hanya tentang keindahan alam Brakseng, tetapi juga pentingnya menjaga keseimbangan antara aktivitas manusia dan pelestarian lingkungan. Semoga melalui kajian ini, kita dapat semakin sadar akan peran kita dalam menjaga keberlanjutan alam untuk generasi mendatang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Selamat menikmati perjalanan virtual dan pembelajaran yang bermakna di Brakseng!</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_49B76888_610F_C853_41D2_8D1AB33A1078",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Longsor yang terjadi di Pujon Kabupaten Malang, merupakan salah satu bencana alam yang sering terjadi terutama selama musim hujan. Pujon terletak di daerah pegunungan yang rawan terhadap tanah longsor karena kondisi geografisnya yang berbukit serta tanah yang mudah terkikis saat hujan lebat. Longsor di Pujon umumnya dipicu oleh beberapa faktor, antara lain:</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Curah Hujan Tinggi</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Selama musim hujan, curah hujan yang tinggi sering kali menyebabkan tanah menjadi jenuh dengan air, yang melemahkan struktur tanah dan memicu longsor. Air hujan yang meresap ke dalam tanah menyebabkan tanah yang tidak padat menjadi berat, sehingga tanah di lereng-lereng bukit mudah meluncur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Kondisi Geografis</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Pujon berada di wilayah yang memiliki banyak lereng curam. Tanah di daerah ini cenderung lebih mudah mengalami erosi, terutama jika vegetasi di atasnya kurang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Penggundulan Hutan</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Penebangan pohon atau perubahan penggunaan lahan dari hutan menjadi lahan pertanian atau permukiman dapat memperbesar risiko longsor. Akar-akar pohon berfungsi sebagai penahan tanah, dan ketika hutan digunduli, tanah menjadi lebih rentan longsor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\"><B>\u2022Aktivitas Manusia</B></SPAN><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">: Pembangunan yang tidak memperhatikan tata ruang dan sistem drainase yang baik di lereng-lereng bukit juga dapat memicu terjadinya longsor. Kegiatan seperti pertanian tanpa teknik konservasi tanah yang tepat atau pembuatan jalan di daerah perbukitan juga dapat meningkatkan risiko.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.74vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player14994"
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

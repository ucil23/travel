(function(){
    var script = {
 "start": "this.playAudioList([this.audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.55,
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
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "class": "Player",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CBD0111_2806_EA48_41BE_D86DF6905513",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Tugu CMC",
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
 "hfov": 360,
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
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 15.59,
   "yaw": 31.91,
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -136.45,
   "yaw": -136.06,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35"
 ],
 "thumbnailUrl": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pantai Tiga Warna",
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
 "hfov": 360,
 "overlays": [
  "this.overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
  "this.popup_77BD0C0B_652D_2D95_41C9_4355D5292F53",
  "this.overlay_B2DEEC61_A424_BBA0_41C1_A97E43C30EF7",
  "this.overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
  "this.overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
  "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -70.53,
   "yaw": -82.34,
   "panorama": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 151.6,
   "yaw": 7.91,
   "panorama": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64"
 ],
 "thumbnailUrl": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_6AC69A02_6524_F596_41A8_CA0F37717BC2",
 "yaw": -46.69,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_1.jpg",
    "width": 1024,
    "height": 625
   }
  ]
 },
 "hfov": 12.6,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -7.75
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "TREKING MANGROVE",
 "loop": false,
 "id": "video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
 "width": 1920,
 "thumbnailUrl": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D4261FD_2806_EDB8_41C1_F3483C940F98",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "easing": "cubic_out",
 "id": "FadeOutEffect_B63E964F_A465_97E0_41D0_652CEE05B4E8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D24B1CB_2806_EDD8_41BE_56793D5849B6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_69DB576D_7B3C_2FA5_41B7_F43684FCB73F_0_0.png",
   "width": 2880,
   "height": 1620
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_69DB576D_7B3C_2FA5_41B7_F43684FCB73F_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_69DB576D_7B3C_2FA5_41B7_F43684FCB73F_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_69DB576D_7B3C_2FA5_41B7_F43684FCB73F_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_6F9141E3_7B3C_22DD_41B9_CC2C3C927716"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B5FF3F42_A4B6_D3F1_41E3_3BA026937821_0_0.png",
   "width": 2640,
   "height": 1485
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B5FF3F42_A4B6_D3F1_41E3_3BA026937821_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B5FF3F42_A4B6_D3F1_41E3_3BA026937821_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B5FF3F42_A4B6_D3F1_41E3_3BA026937821_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_C3E06D95_D2A4_076A_41BC_FDECDE2D21EC"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B621B5E8_A43B_B4A1_41C7_21B75FB0C272_0_0.png",
   "width": 2880,
   "height": 1620
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B621B5E8_A43B_B4A1_41C7_21B75FB0C272_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B621B5E8_A43B_B4A1_41C7_21B75FB0C272_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B621B5E8_A43B_B4A1_41C7_21B75FB0C272_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_B63E764F_A465_97E0_41CC_961DDDC04D4C"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_7863C3C6_761D_05AA_41A6_EFA7A29DC9F4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDCD3EF_27FB_6DD8_41C0_D54DEE7867E3",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window536"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B789DF94_A465_B560_41C2_6C889275F933",
   "start": "this.viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34406EC4_27FB_37C8_41BE_D230AE9A2E04, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34406EC4_27FB_37C8_41BE_D230AE9A2E04, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258VideoPlayer)",
   "player": "this.viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258VideoPlayer"
  }
 ],
 "id": "PlayList_34406EC4_27FB_37C8_41BE_D230AE9A2E04"
},
{
 "rotationY": 0,
 "hfov": 29.16,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7441B0B_A464_9D60_41B6_C28282228370",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -60.03,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 16.51,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B79A12C6_A464_ACE0_41AD_DB0AD164E307.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.14,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D604229_2806_EE58_41C0_49D6AD51EA1F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pos Pantai Gatra",
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
 "hfov": 360,
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
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -141.55,
   "yaw": -34.79,
   "panorama": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -40.9,
   "yaw": -135.93,
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9"
 ],
 "thumbnailUrl": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5BBF92_2806_F648_41B7_8E691E957DCF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5BBF92_2806_F648_41B7_8E691E957DCF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5BBF92_2806_F648_41B7_8E691E957DCF"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBA896A2_DD68_C1DB_41CD_1915339ED097",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "BERBAGI CERITA",
 "loop": false,
 "id": "video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
 "width": 1920,
 "thumbnailUrl": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D7EC246_2806_EEC8_41AB_C4013292B685",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
   "start": "this.viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34411EC5_27FB_37C8_41B5_BBF7085B57FD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34411EC5_27FB_37C8_41B5_BBF7085B57FD, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650VideoPlayer)",
   "player": "this.viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650VideoPlayer"
  }
 ],
 "id": "PlayList_34411EC5_27FB_37C8_41B5_BBF7085B57FD"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B587F91_2806_F648_41BE_3F7169577C04, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B587F91_2806_F648_41BE_3F7169577C04, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B587F91_2806_F648_41BE_3F7169577C04"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_7745A885_6565_D692_41D9_4DFC388CBEA4"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B4873789_A42C_9560_41C9_ABCDD641B19F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B59FF91_2806_F648_41BE_350322886D44, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B59FF91_2806_F648_41BE_350322886D44, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B59FF91_2806_F648_41BE_350322886D44"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_775E6888_6565_D693_41D7_716EB1DA683A"
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PENANAMAN BIBIT (RUMAH BIBIT)",
 "loop": false,
 "id": "video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
 "width": 1920,
 "thumbnailUrl": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.45,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C8F40C6_2806_EBC8_41C0_0ADAE2C43548",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67",
 "yaw": 113.94,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 29.88,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 7.84
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "POS 2",
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
 "hfov": 360,
 "overlays": [
  "this.overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
  "this.popup_7466340B_61E8_C8FC_41C2_7447557D856A",
  "this.overlay_B2F91229_A42B_AFA0_41DE_E91D0DF1F9B2",
  "this.overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
  "this.overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
  "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -168.82,
   "yaw": 30.24,
   "panorama": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 18.86,
   "yaw": -170.33,
   "panorama": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CB9F6242_DD68_415B_41D1_FBB643A309E1"
 ],
 "thumbnailUrl": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CE9215D_2806_EAF8_41AF_42E1BF85EFC5",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_77BD0C0B_652D_2D95_41C9_4355D5292F53",
 "yaw": 85.17,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 39.39,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 3.57
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D50F21A_2806_EE78_41BA_F5939200ADC9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "camera": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "camera": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "camera": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 0)",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA4878E0_DD78_4156_41E0_3CC60E85C441",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.45,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BE8C019_2806_EA78_41B5_1C7D3B07C9C6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.55,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BC3CFEB_2806_F5D8_41BE_852FF054336C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
   "start": "this.viewer_uid3B437F80_2806_F648_41C1_325BD69A6111VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34438EC2_27FB_37C8_41A8_D83236DF88ED, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34438EC2_27FB_37C8_41A8_D83236DF88ED, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B437F80_2806_F648_41C1_325BD69A6111VideoPlayer)",
   "player": "this.viewer_uid3B437F80_2806_F648_41C1_325BD69A6111VideoPlayer"
  }
 ],
 "id": "PlayList_34438EC2_27FB_37C8_41A8_D83236DF88ED"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Menuju Tiga Warna",
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
 "hfov": 360,
 "overlays": [
  "this.overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
  "this.overlay_B70CE923_A45B_7DA0_41D0_9C5F088CAC6B",
  "this.popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19",
  "this.overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
  "this.overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
  "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 51.63,
   "yaw": 18.86,
   "panorama": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.11,
   "yaw": -163.8,
   "panorama": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B"
 ],
 "thumbnailUrl": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_0.jpg",
   "width": 1284,
   "height": 784
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_1.jpg",
   "width": 1024,
   "height": 625
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6AC69A02_6524_F596_41A8_CA0F37717BC2_0_2.jpg",
   "width": 512,
   "height": 312
  }
 ],
 "id": "ImageResource_756125E6_652F_DE9F_41B3_D985A9DA49E1"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_74A27224_652B_D593_41D2_80E0F3EBDD8B",
 "yaw": -48.6,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_74A27224_652B_D593_41D2_80E0F3EBDD8B_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 16.84,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 17.01
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBBA60FD_DD68_4129_41E6_B040B26B6725",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PULAU SEMPU",
 "loop": false,
 "id": "video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
 "width": 1920,
 "thumbnailUrl": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0.mp4"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD923EC_27FB_6DD8_41B6_71E21BE1F30C",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B459F82_2806_F648_41A3_192E41F5023E"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window533"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDFC3EE_27FB_6DD8_41A9_D7809163AC1C",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703F"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window535"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D707237_2806_EE48_41BE_12B122FEB887",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "easing": "cubic_in",
 "id": "FadeInEffect_B63E664F_A465_97E0_41C1_D1F6F996ED87"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_6A76B567_6525_5F9E_41D9_156D317DC354",
 "yaw": -91.72,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_1.jpg",
    "width": 1024,
    "height": 653
   }
  ]
 },
 "hfov": 16.66,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -8.18
},
{
 "rotationY": 0,
 "hfov": 32.3,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -115.55,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 5.08,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45.mp4"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5BDF92_2806_F648_4180_5E113E803622, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5BDF92_2806_F648_4180_5E113E803622, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5BDF92_2806_F648_4180_5E113E803622"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.19,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CCB512A_2806_EA58_418E_B7E189258228",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B58AF91_2806_F648_41A6_EE4BB7FFFB5A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B58AF91_2806_F648_41A6_EE4BB7FFFB5A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B58AF91_2806_F648_41A6_EE4BB7FFFB5A"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5A3F92_2806_F648_41AC_561B9DA8308E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5A3F92_2806_F648_41AC_561B9DA8308E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5A3F92_2806_F648_41AC_561B9DA8308E"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD2A3F6_27FB_6DC8_41C3_5193F8710220",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window538"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "rotationY": 0,
 "hfov": 10.06,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": 109.7,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": -2.67,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F.mp4"
 }
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PENGANTAR",
 "loop": false,
 "id": "video_B4873789_A42C_9560_41C9_ABCDD641B19F",
 "width": 1920,
 "thumbnailUrl": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B4873789_A42C_9560_41C9_ABCDD641B19F.mp4"
 }
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "AKSES JALAN KAKI",
 "loop": false,
 "id": "video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
 "width": 1920,
 "thumbnailUrl": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.93,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CDB0144_2806_EAC8_41C3_0E2367BED60F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Masuk Trekking Mangrove",
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
 "hfov": 360,
 "overlays": [
  "this.overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
  "this.overlay_B685ACD2_A467_94E0_41D7_5C819ED05F38",
  "this.popup_B7441B0B_A464_9D60_41B6_C28282228370",
  "this.overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
  "this.overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
  "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -46.9,
   "yaw": 61.93,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 109.91,
   "yaw": -95.81,
   "panorama": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA"
 ],
 "thumbnailUrl": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13",
 "yaw": 110.67,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 22.63,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 0.18
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "RUMAH BIBIT",
 "loop": false,
 "id": "video_B6B79604_A464_F761_41E2_02467D04CD8D",
 "width": 1920,
 "thumbnailUrl": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D.mp4"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
   "start": "this.viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34404EC3_27FB_37C8_41BC_07A7636EA2A1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34404EC3_27FB_37C8_41BC_07A7636EA2A1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703FVideoPlayer)",
   "player": "this.viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703FVideoPlayer"
  }
 ],
 "id": "PlayList_34404EC3_27FB_37C8_41BC_07A7636EA2A1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C53B088_2806_EA58_41B2_535B33A4FB64",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_76336174_656B_767C_41CF_C00C6053746E",
 "yaw": -87.67,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 21.15,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -8.36
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD153F9_27FB_6DB9_418C_00D886897481",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window540"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Rumah Bibit",
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
 "hfov": 360,
 "overlays": [
  "this.overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
  "this.overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
  "this.overlay_B708E68C_A42F_F760_41D0_BC1FB6FC95E1",
  "this.popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909",
  "this.overlay_B6CC5258_A46B_6FE0_41DF_8AFBFEFDA40C",
  "this.popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A",
  "this.overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
  "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CBBA60FD_DD68_4129_41E6_B040B26B6725"
 ],
 "thumbnailUrl": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B19940AC_A425_ACA0_41D3_253F3C44386A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B58FF91_2806_F648_41C1_E093659B2D08, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B58FF91_2806_F648_41C1_E093659B2D08, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B58FF91_2806_F648_41C1_E093659B2D08"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBACB1EF_DD68_C32A_41EA_A0A735656F35",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Trekking Mangrove",
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
 "hfov": 360,
 "overlays": [
  "this.popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13",
  "this.popup_76336174_656B_767C_41CF_C00C6053746E",
  "this.overlay_B2C58137_A424_ADAF_41D8_68DB870EA77C",
  "this.overlay_B36D457C_A424_B5A0_41D8_468D4501D926",
  "this.overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
  "this.overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
  "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -95.81,
   "yaw": 109.91,
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253"
 ],
 "thumbnailUrl": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B582F91_2806_F648_41BE_73A7D438D56D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B582F91_2806_F648_41BE_73A7D438D56D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B582F91_2806_F648_41BE_73A7D438D56D"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg"
  }
 ],
 "hfovMin": "121%",
 "label": "POS 1",
 "overlays": [
  "this.overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
  "this.overlay_75476C85_6198_F9F4_41C7_78D9B05B0517",
  "this.popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C",
  "this.popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644",
  "this.overlay_B4CCB425_A43C_EBA0_41E0_5F3E29718DAC",
  "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0"
 ],
 "class": "Panorama",
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -170.33,
   "yaw": 18.86,
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 137,
 "partial": false,
 "audios": [
  "this.audio_CBA6BB41_DD68_4759_41E7_0E9E751C220A"
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_776477FF_78B2_DB26_41DB_617F38CA7FB9",
 "yaw": 75.7,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_1.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 24.52,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -2.41
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5B1F92_2806_F648_41B4_EBE3660D5D5A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5B1F92_2806_F648_41B4_EBE3660D5D5A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5B1F92_2806_F648_41B4_EBE3660D5D5A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C61A096_2806_EA48_41A4_E08479D88F94",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_7564B672_652B_5A76_41AA_3F30A482C74E",
 "yaw": 134.69,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 21.13,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 5.07
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD043F8_27FB_6DC7_4195_B375C208B012",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B520F8C_2806_F658_418B_6305319623A6"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window539"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C06D039_2806_EAB8_41AD_48CC874A5889",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD813EB_27FB_6DD8_41A6_8B89F37DCA45",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B437F80_2806_F648_41C1_325BD69A6111"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window532"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77BD0C0B_652D_2D95_41C9_4355D5292F53_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_786133C9_761D_05A6_41D2_39454E67EB31"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA6B2339_DD78_C729_41D0_92DF0BADB6B9",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CD083FA_27FB_6DBB_41B3_72560BB5CADF",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window541"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Spot Foto Tiga Warna",
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
 "hfov": 360,
 "overlays": [
  "this.overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
  "this.overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
  "this.overlay_B6313F3D_A425_95A0_41E4_3187489BAE86",
  "this.popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80",
  "this.overlay_B237C7DE_A424_94E0_41E0_3727C9190848",
  "this.popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7",
  "this.overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
  "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 7.91,
   "yaw": 151.6,
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B"
 ],
 "thumbnailUrl": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Persimpangan Rumah Bibit dan Clungup Gatra",
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
 "hfov": 360,
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
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -136.06,
   "yaw": -136.45,
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -136.29,
   "yaw": 94.07,
   "panorama": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 83.19,
   "yaw": -4.25,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CBA896A2_DD68_C1DB_41CD_1915339ED097"
 ],
 "thumbnailUrl": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_t.jpg"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CBBFCBB5_DD68_4738_41E5_54543E0BA85F",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA1E5A5E_DD78_416B_419E_F1EC3061815B",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_755352E0_61E8_492D_41C3_ADBCC350A60E"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B19940AC_A425_ACA0_41D3_253F3C44386A",
   "start": "this.viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34418EC4_27FB_37C8_4197_8204327DB8F0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34418EC4_27FB_37C8_4197_8204327DB8F0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7VideoPlayer)",
   "player": "this.viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7VideoPlayer"
  }
 ],
 "id": "PlayList_34418EC4_27FB_37C8_4197_8204327DB8F0"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 0,
  "pitch": -90
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 128,
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "targetHfov": 128
  }
 ],
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909_0_0.png",
   "width": 2880,
   "height": 1620
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_B636E65C_A465_97E0_41DC_7D115D38BBC4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.75,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C9CE0D5_2806_EBC8_4187_3F23604DC555",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7564B672_652B_5A76_41AA_3F30A482C74E_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_76502AD4_653D_2AB2_41C1_3C74DB1F1773"
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "SUASANA CMC ",
 "loop": false,
 "id": "video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
 "width": 1920,
 "thumbnailUrl": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB.mp4"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_76336174_656B_767C_41CF_C00C6053746E_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_786293C3_761D_05AA_41D6_B99F42FFBE46"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80_0_0.png",
   "width": 2640,
   "height": 1485
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_B6CF566B_A465_97A0_41D2_A1C69FD2D7CA"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C",
 "yaw": 92.05,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 14.34,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -0.99
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PANTAI CLUNGUP",
 "loop": false,
 "id": "video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
 "width": 1920,
 "thumbnailUrl": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C.mp4"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pantai Clungup (Mulai Pasang)",
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
 "hfov": 360,
 "overlays": [
  "this.overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
  "this.overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
  "this.overlay_B67764B4_A42D_74A0_41E0_2FDF87F7838D",
  "this.popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67",
  "this.overlay_B6F8328A_A47B_AF60_41DA_A89DA44D3A2A",
  "this.popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB",
  "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3"
 ],
 "thumbnailUrl": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 128,
  "yaw": -161.14,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CF6E176_2806_EAC8_4197_2AC40596F016",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_0.png",
   "width": 1920,
   "height": 1080
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_1.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_776477FF_78B2_DB26_41DB_617F38CA7FB9_0_2.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_6A438AA9_7B14_26AD_41DA_E6208E933B4A"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B",
 "yaw": 155.26,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 27.79,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 5.2
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.71,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C14B04B_2806_EAD8_4189_4F3AC2A29D2A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB",
   "start": "this.viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3443EEC1_27FB_37CB_41BD_E8B66390D568, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3443EEC1_27FB_37CB_41BD_E8B66390D568, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BAVideoPlayer)",
   "player": "this.viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BAVideoPlayer"
  }
 ],
 "id": "PlayList_3443EEC1_27FB_37CB_41BD_E8B66390D568"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D8E6256_2806_EEC8_4190_B71FBA1DADED",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDB23EA_27FB_6DD8_4184_4514516BCA7A",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BA"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window531"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "hfov": 28.53,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B22937C5_A425_F4E0_41CF_9D103D5812DB",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -67.82,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 24.8,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A.mp4"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "camera": "this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_7466340B_61E8_C8FC_41C2_7447557D856A",
 "yaw": -60.45,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7466340B_61E8_C8FC_41C2_7447557D856A_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 16.36,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -1
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C358069_2806_EAD8_41A0_CACB40561C60",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Menuju Rumah Bibit",
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431",
 "hfov": 360,
 "overlays": [
  "this.overlay_EB867347_F852_989C_41ED_ECCFAF091C32",
  "this.overlay_B67E7717_A46F_9560_41E1_5E419BB36AFB",
  "this.popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1",
  "this.overlay_BEDBE532_A424_F5A0_41D9_A07158411CD1",
  "this.overlay_BC08300E_A424_AB60_4191_8475722E34C5",
  "this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 94.07,
   "yaw": -136.29,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CBBFCBB5_DD68_4738_41E5_54543E0BA85F"
 ],
 "thumbnailUrl": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909",
 "yaw": -39.92,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 22.06,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -7.58
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D06B190_2806_EA48_41B3_C60CDD20CE13",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "hfov": 17.94,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -167.68,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": -6.93,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B6B79604_A464_F761_41E2_02467D04CD8D.mp4"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_0.png",
   "width": 1920,
   "height": 1080
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_1.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_2.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_6A7E1AAB_7B14_26AD_41D0_30F19C1F0A21"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.81,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C243059_2806_EAF8_41BE_C7D73C44A86B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.35,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C421078_2806_EAB8_41AF_F68ECEDD7312",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9A6976_DD68_C33B_41EA_791527D2031C",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pos Pantai Tiga Warna",
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF",
 "hfov": 360,
 "overlays": [
  "this.overlay_E44716C9_F8F3_9994_41E7_AF03A9F517E0",
  "this.overlay_B30FBE6C_A425_97A0_41DC_B3F60E050225",
  "this.popup_B22937C5_A425_F4E0_41CF_9D103D5812DB",
  "this.overlay_BD6E543E_A42C_ABA0_41E3_03A5887E6442",
  "this.overlay_BC37A4BD_A42C_94A0_41C8_578B02A492A6",
  "this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -82.34,
   "yaw": -70.53,
   "panorama": "this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 18.86,
   "yaw": 51.63,
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA0BAF9A_DD79_BFEB_41E7_9F7D72804A5A"
 ],
 "thumbnailUrl": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -164.41,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BB91FDC_2806_F5F8_41BF_F9724B4D7BD2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA6DD2B3_DD78_C139_41D6_103E1B265B1A",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA0BAF9A_DD79_BFEB_41E7_9F7D72804A5A",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pantai Gatra",
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335",
 "hfov": 360,
 "overlays": [
  "this.overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
  "this.popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B",
  "this.overlay_B7434C31_A46B_FBA0_4191_A9D4E613BA0B",
  "this.popup_B05FC82B_A465_9BA0_41C3_4AD6BEB2AE3F",
  "this.overlay_B35E209A_A424_AB60_41CA_4EFE3713F6FA",
  "this.overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
  "this.overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
  "this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -135.93,
   "yaw": -40.9,
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -163.8,
   "yaw": 31.11,
   "panorama": "this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA1C8C2F_DD78_4129_41EB_2FB61AE5A223"
 ],
 "thumbnailUrl": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7466340B_61E8_C8FC_41C2_7447557D856A_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7466340B_61E8_C8FC_41C2_7447557D856A_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7466340B_61E8_C8FC_41C2_7447557D856A_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7466340B_61E8_C8FC_41C2_7447557D856A_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_756475E5_652F_DE92_41C7_3B85230CCED7"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C7FB0B7_2806_EA48_41A2_AA86BCFCCDDC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D",
   "start": "this.viewer_uid3B520F8C_2806_F658_418B_6305319623A6VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3441EEC4_27FB_37C8_41A0_FE4030338B4D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3441EEC4_27FB_37C8_41A0_FE4030338B4D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B520F8C_2806_F658_418B_6305319623A6VideoPlayer)",
   "player": "this.viewer_uid3B520F8C_2806_F658_418B_6305319623A6VideoPlayer"
  }
 ],
 "id": "PlayList_3441EEC4_27FB_37C8_41A0_FE4030338B4D"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA413600_DD78_40D7_41DD_9219E3B6C1F3",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B789DF94_A465_B560_41C2_6C889275F933",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5B5F92_2806_F648_41BC_19BBB04CC8F4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5B5F92_2806_F648_41BC_19BBB04CC8F4, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5B5F92_2806_F648_41BC_19BBB04CC8F4"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDA43E8_27FB_6DD8_41B2_5E5EA17DAD03",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window530"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_786243C5_761D_05AE_41B1_A0AFD37EACCB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307",
   "start": "this.viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34435EC3_27FB_37C8_41AD_3D693F65E656, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34435EC3_27FB_37C8_41AD_3D693F65E656, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610VideoPlayer)",
   "player": "this.viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610VideoPlayer"
  }
 ],
 "id": "PlayList_34435EC3_27FB_37C8_41AD_3D693F65E656"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDDA3F0_27FB_6DC8_41BC_2E05562E2FC6",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window537"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B6B79604_A464_F761_41E2_02467D04CD8D",
   "start": "this.viewer_uid3B459F82_2806_F648_41A3_192E41F5023EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34433EC2_27FB_37C8_41C0_E042D3F3EBF3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34433EC2_27FB_37C8_41C0_E042D3F3EBF3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B459F82_2806_F648_41A3_192E41F5023EVideoPlayer)",
   "player": "this.viewer_uid3B459F82_2806_F648_41A3_192E41F5023EVideoPlayer"
  }
 ],
 "id": "PlayList_34433EC2_27FB_37C8_41C0_E042D3F3EBF3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D3511E4_2806_EDC8_41A6_49762A3ACA79",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "easing": "cubic_out",
 "id": "FadeOutEffect_6F9181E3_7B3C_22DD_41AA_12A6E53A1F7E"
},
{
 "rotationY": 0,
 "hfov": 30.36,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B05FC82B_A465_9BA0_41C3_4AD6BEB2AE3F",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -117.81,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 3.57,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B789DF94_A465_B560_41C2_6C889275F933.mp4"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Persimpangan Gatra dan Trekking Mangrove",
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
 "hfov": 360,
 "overlays": [
  "this.overlay_EEE0C026_F8D3_989C_41E4_9DD48E09ECDD",
  "this.overlay_E0F3449D_F8D2_B9AC_41E8_DED63BA6B6E3",
  "this.popup_74C9FA19_6565_75B5_41BE_C983C7B72568",
  "this.overlay_B2DE916A_A427_ADA0_41E1_17BF6F25BC88",
  "this.overlay_BCD933D4_A42B_ACE0_41D2_963CC4F7AD69",
  "this.overlay_BC2FC2A5_A42B_ECA3_41D1_336C80B070B7",
  "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 61.93,
   "yaw": -46.9,
   "panorama": "this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 70.65,
   "yaw": 16.94,
   "panorama": "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.23,
   "yaw": 163.55,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA4878E0_DD78_4156_41E0_3CC60E85C441"
 ],
 "thumbnailUrl": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Masuk Gatra",
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1",
 "hfov": 360,
 "overlays": [
  "this.overlay_E0CCFD3E_F8DE_A8EC_41D3_7CEDA9AEB9FC",
  "this.overlay_B7555626_A46C_F7A0_41E2_99ACB983D166",
  "this.popup_B7512692_A46C_B760_41D9_D1C6B3C2594B",
  "this.overlay_BC04747C_A42C_EBA0_41E2_FD62EFE9B4B2",
  "this.overlay_BC8292FB_A42C_ACA0_41E0_20753CFF3D3C",
  "this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -34.79,
   "yaw": -141.55,
   "panorama": "this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 16.94,
   "yaw": 70.65,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA6DD2B3_DD78_C139_41D6_103E1B265B1A"
 ],
 "thumbnailUrl": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_t.jpg"
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PANTAI GATRA (AWAL)",
 "loop": false,
 "id": "video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
 "width": 1920,
 "thumbnailUrl": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD.mp4"
 }
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PANTAI TIGA WARNA",
 "loop": false,
 "id": "video_B19940AC_A425_ACA0_41D3_253F3C44386A",
 "width": 1920,
 "thumbnailUrl": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B19940AC_A425_ACA0_41D3_253F3C44386A.mp4"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_77589886_6565_D69F_41BC_14158ABEE1A2"
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PANTAI GATRA",
 "loop": false,
 "id": "video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B",
 "width": 1920,
 "thumbnailUrl": "media/video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_77F649E5_657D_569D_4191_6B176FB1A434",
 "yaw": 47.37,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_77F649E5_657D_569D_4191_6B176FB1A434_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 26.22,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 21.28
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotationY": 0,
 "hfov": 24.05,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -148.08,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 4.83,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7F4CB83_A47B_9D60_41DD_61CF0823911C.mp4"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA33A18F_DD79_C3E9_41C6_AE721CDE8A64",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97.mp3",
  "oggUrl": "media/audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97.ogg"
 },
 "id": "audio_FD142736_DD68_CF3B_41E2_0AB8521BBA97",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "easing": "cubic_in",
 "id": "FadeInEffect_C3E07D95_D2A4_076A_41E8_E23DA96AC548"
},
{
 "rotationY": 0,
 "hfov": 27.87,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7512692_A46C_B760_41D9_D1C6B3C2594B",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -56.89,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 17.14,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD.mp4"
 }
},
{
 "rotationY": 0,
 "hfov": 16.79,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B2D15DEB_A42C_B4A0_41B2_AED58724AA97",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": 40.98,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 17.7,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB.mp4"
 }
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA72CBAE_DD78_472B_41E9_691F4B3A0ADA",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_74C9FA19_6565_75B5_41BE_C983C7B72568",
 "yaw": -76.36,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_74C9FA19_6565_75B5_41BE_C983C7B72568_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 24.67,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": -7.61
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBorderSize": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "id": "window_2CDE33ED_27FB_6DD8_41A9_19F412CF0328",
 "closeButtonBorderRadius": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "bodyPaddingLeft": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window534"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45",
   "start": "this.viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3440AEC2_27FB_37C9_41B6_90730E650315, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3440AEC2_27FB_37C9_41B6_90730E650315, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0VideoPlayer)",
   "player": "this.viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0VideoPlayer"
  }
 ],
 "id": "PlayList_3440AEC2_27FB_37C9_41B6_90730E650315"
},
{
 "rotationY": 0,
 "hfov": 14.27,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": 162.9,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": -2.27,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B687A494_A46F_6B61_41E3_4F366B6D5F0D.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BDB800A_2806_EA58_41B7_5C79ABEA1054",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Jalan Menuju CMC",
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C",
 "hfov": 360,
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
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.91,
   "yaw": 15.59,
   "panorama": "this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 30.24,
   "yaw": -168.82,
   "panorama": "this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CB9A6976_DD68_C33B_41EA_791527D2031C"
 ],
 "thumbnailUrl": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BCC9FF9_2806_F5B8_41C1_16143F099556",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "hfov": 32.84,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -54.95,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 6.28,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_69F2C327_78BE_DB25_41A2_719A00122678",
 "yaw": -50.91,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_69F2C327_78BE_DB25_41A2_719A00122678_0_1.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 17.18,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 11.16
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7DD9023_A464_ABA0_41D8_CB7C8AFDD77B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5B9F92_2806_F648_41B6_CBA3122A415D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5B9F92_2806_F648_41B6_CBA3122A415D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5B9F92_2806_F648_41B6_CBA3122A415D"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B6B79604_A464_F761_41E2_02467D04CD8D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B585F91_2806_F648_4194_27ABF9F5A658, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B585F91_2806_F648_4194_27ABF9F5A658, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B585F91_2806_F648_4194_27ABF9F5A658"
},
{
 "rotationY": 0,
 "hfov": 23.53,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7",
 "autoplay": true,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "yaw": -88.29,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "pitch": 17.26,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C7180A6_2806_EA48_41B3_A29669D7C880",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "easing": "cubic_in",
 "id": "FadeInEffect_6F91A1E3_7B3C_22DD_41D3_55090C4DB7A9"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B5A1F92_2806_F648_41B6_623206EE812B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B5A1F92_2806_F648_41B6_623206EE812B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B5A1F92_2806_F648_41B6_623206EE812B"
},
{
 "scaleMode": "fit_inside",
 "class": "Video",
 "label": "PANTAI GATRA",
 "loop": false,
 "id": "video_B789DF94_A465_B560_41C2_6C889275F933",
 "width": 1920,
 "thumbnailUrl": "media/video_B789DF94_A465_B560_41C2_6C889275F933_t.jpg",
 "height": 1080,
 "video": {
  "class": "VideoResource",
  "width": 1920,
  "height": 1080,
  "mp4Url": "media/video_B789DF94_A465_B560_41C2_6C889275F933.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80",
 "yaw": 18.22,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80_0_2.png",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "hfov": 33.78,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "pitch": 16.26
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Pantai Clungup (Surut)",
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
 "hfov": 360,
 "overlays": [
  "this.overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
  "this.popup_74A27224_652B_D593_41D2_80E0F3EBDD8B",
  "this.overlay_B2A74151_A427_ADE0_41D7_AC4B3E6480C5",
  "this.overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
  "this.overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
  "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E390A695_E8F9_754E_4171_FD3023CF395D"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -69.82,
   "yaw": 130.02,
   "panorama": "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CA4723D4_DD67_C77E_41E9_CB8987B2113F"
 ],
 "thumbnailUrl": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/f/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/u/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/r/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/b/2/{row}_{column}.jpg",
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
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "Persimpangan Clungup dan Gatra",
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE",
 "hfov": 360,
 "overlays": [
  "this.overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
  "this.overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
  "this.overlay_B6B7953C_A47D_B5A0_41DB_38EB004F6C19",
  "this.popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D",
  "this.overlay_BE677039_A425_6BA0_41C7_94189E681072",
  "this.overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
  "this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 163.55,
   "yaw": -149.23,
   "panorama": "this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -4.25,
   "yaw": 83.19,
   "panorama": "this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 130.02,
   "yaw": -69.82,
   "panorama": "this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_CBB0FEF7_DD67_C139_4199_43C3586FBB87"
 ],
 "thumbnailUrl": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_t.jpg"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CA78ED01_DD78_40D9_41E9_7A4F9E735253",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_0.jpg",
   "width": 1340,
   "height": 855
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_1.jpg",
   "width": 1024,
   "height": 653
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_6A76B567_6525_5F9E_41D9_156D317DC354_0_2.jpg",
   "width": 512,
   "height": 326
  }
 ],
 "id": "ImageResource_7566D5E5_652F_DE92_41CB_38F7195FCFBD"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.2,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D1701AE_2806_EA58_4170_4ED194184BA0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CAD40F8_2806_EBB8_41C2_0C7662AB72FD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B4873789_A42C_9560_41C9_ABCDD641B19F",
   "start": "this.viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_34459EC1_27FB_37C8_41B9_F62A645C2634, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_34459EC1_27FB_37C8_41B9_F62A645C2634, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0VideoPlayer)",
   "player": "this.viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0VideoPlayer"
  }
 ],
 "id": "PlayList_34459EC1_27FB_37C8_41B9_F62A645C2634"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.89,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3D9CE265_2806_EEC8_41B8_4172F0B34D77",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "easing": "cubic_out",
 "id": "FadeOutEffect_C3E05D95_D2A4_076A_41E5_4B919161BBFB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 139.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3BF9102B_2806_EA58_41A9_814A0E991620",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD",
   "start": "this.viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3440FEC3_27FB_37C8_41B0_F0CC4E0E3CA7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3440FEC3_27FB_37C8_41B0_F0CC4E0E3CA7, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913VideoPlayer)",
   "player": "this.viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913VideoPlayer"
  }
 ],
 "id": "PlayList_3440FEC3_27FB_37C8_41B0_F0CC4E0E3CA7"
},
{
 "class": "PanoramaAudio",
 "loop": true,
 "audio": "this.audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF",
 "id": "audio_CB9F6242_DD68_415B_41D1_FBB643A309E1",
 "autoplay": true,
 "data": {
  "label": "Backsound VFT_ Chill Piano Electronic Music (For Videos) - _Home_ by Neutrin05 \ud83c\uddfa\ud83c\uddf8 (128 kbps)"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67_0_0.png",
   "width": 2400,
   "height": 1350
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67_0_1.png",
   "width": 2048,
   "height": 1152
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67_0_2.png",
   "width": 1024,
   "height": 576
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67_0_3.png",
   "width": 512,
   "height": 288
  }
 ],
 "id": "ImageResource_B6335660_A465_97A0_41D1_DBE9E76E52FF"
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 300,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 550,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": 34,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "backgroundImageUrl": "skin/Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC.png",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent5286"
 },
 "shadow": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage5287"
 },
 "shadow": false,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "layout": "horizontal",
 "data": {
  "name": "CloseButton5288"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "class": "CloseButton",
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderSize": 0,
 "iconColor": "#000000",
 "minHeight": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "top": 10,
 "rollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconColor": "#888888",
 "fontStyle": "normal",
 "paddingTop": 5,
 "iconBeforeLabel": true,
 "visible": false,
 "iconLineWidth": 5,
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_3BC3CFEB_2806_F5D8_41BE_852FF054336C); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.06,
   "hfov": 13.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -29.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AADAB433_A495_3597_41C8_BA81E786E797",
   "yaw": -136.06,
   "pitch": -29.99,
   "distance": 100,
   "hfov": 13.52
  }
 ],
 "id": "overlay_F8F0E502_E908_D74A_41DB_7C5A15A691FA",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_776477FF_78B2_DB26_41DB_617F38CA7FB9, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_6A438AA9_7B14_26AD_41DA_E6208E933B4A, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.7,
   "hfov": 24.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_4_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -2.41
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 75.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_4_0.png",
      "width": 414,
      "height": 270
     }
    ]
   },
   "pitch": -2.41,
   "hfov": 24.52
  }
 ],
 "id": "overlay_B2C2C86D_A425_7BA0_41C7_978BC373C353",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_7564B672_652B_5A76_41AA_3F30A482C74E, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_76502AD4_653D_2AB2_41C1_3C74DB1F1773, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.69,
   "hfov": 21.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_5_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 5.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 134.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_5_0.png",
      "width": 358,
      "height": 224
     }
    ]
   },
   "pitch": 5.07,
   "hfov": 21.13
  }
 ],
 "id": "overlay_B2A1659A_A425_9560_41D2_25539FB6AF0D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.23,
   "hfov": 40.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_6_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -20.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_6_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 47.23,
   "pitch": -20.66,
   "distance": 50,
   "hfov": 40.2
  }
 ],
 "id": "overlay_B3024DB0_A43F_B4A0_4157_67F2AEDECA18",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_3BB91FDC_2806_F5F8_41BF_F9724B4D7BD2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.91,
   "hfov": 12.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_7_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AADBD433_A495_3597_41C8_C1EA519B98C6",
   "yaw": 31.91,
   "pitch": -12,
   "distance": 100,
   "hfov": 12.53
  }
 ],
 "id": "overlay_B3C9ADD4_A43C_B4E0_41D2_88D851F5E39D",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE, this.camera_3BDB800A_2806_EA58_41B7_5C79ABEA1054); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.91,
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -8.3
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EED335F_5CA4_CDD4_41C5_7607946D2B0A",
   "yaw": 7.91,
   "pitch": -8.3,
   "distance": 50,
   "hfov": 11.72
  }
 ],
 "id": "overlay_E4762806_F8F5_E89D_41E7_F3493563DE54",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_77BD0C0B_652D_2D95_41C9_4355D5292F53, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_786133C9_761D_05A6_41D2_39454E67EB31, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.17,
   "hfov": 39.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": 3.57
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 85.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_2_0.png",
      "width": 666,
      "height": 365
     }
    ]
   },
   "pitch": 3.57,
   "hfov": 39.39
  }
 ],
 "id": "overlay_B2DEEC61_A424_BBA0_41C1_A97E43C30EF7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF, this.camera_3BCC9FF9_2806_F5B8_41C1_16143F099556); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.34,
   "hfov": 16.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -3.96
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC1D440_A495_35F1_41DB_058BDC7A1798",
   "yaw": -82.34,
   "pitch": -3.96,
   "distance": 100,
   "hfov": 16.4
  }
 ],
 "id": "overlay_BC889871_A42B_FBA0_41C7_88292034F26A",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.09,
   "hfov": 42.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -11.87
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -69.09,
   "pitch": -11.87,
   "distance": 50,
   "hfov": 42.04
  }
 ],
 "id": "overlay_BD235FA8_A42B_F4A0_41D6_F530158D93E1",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5280"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258",
 "id": "viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_3BF9102B_2806_EA58_41A9_814A0E991620); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.93,
   "hfov": 10.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -25.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEF8361_5CA4_CDEC_41D6_8736D7B6941D",
   "yaw": -135.93,
   "pitch": -25.58,
   "distance": 100,
   "hfov": 10.68
  }
 ],
 "id": "overlay_E037F818_F8D2_E8B4_41D4_588904212997",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.96,
   "hfov": 11.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEF2362_5CA4_CDED_41D2_F78C7FA0F545",
   "yaw": 101.96,
   "pitch": -13.38,
   "distance": 100,
   "hfov": 11.52
  }
 ],
 "id": "overlay_E134175C_F8D6_98AC_41EC_F5374660D843",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.05,
   "hfov": 50.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_2_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -33.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_2_0.png",
      "width": 1023,
      "height": 423
     }
    ]
   },
   "yaw": 102.05,
   "pitch": -33.12,
   "distance": 50,
   "hfov": 50.75
  }
 ],
 "id": "overlay_E14310DA_F8D7_79B4_41D9_8C5DA3330FEF",
 "data": {
  "label": "PANTAI 3 WARNA VIA JALAN KAKI"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_77F649E5_657D_569D_4191_6B176FB1A434, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_786243C5_761D_05AE_41B1_A0AFD37EACCB, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.37,
   "hfov": 26.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_4_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 21.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 47.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_4_0.png",
      "width": 475,
      "height": 335
     }
    ]
   },
   "pitch": 21.28,
   "hfov": 26.22
  }
 ],
 "id": "overlay_B2F19271_A425_AFA0_41D0_6FF5C4F904D5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1, this.camera_3BE8C019_2806_EA78_41B5_1C7D3B07C9C6); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.79,
   "hfov": 9.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_5_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.25
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC2C43D_A495_3593_41A4_BF28B01B151B",
   "yaw": -34.79,
   "pitch": -13.25,
   "distance": 100,
   "hfov": 9.78
  }
 ],
 "id": "overlay_B398DC55_A42F_BBE0_41DA_173BE92B3CE1",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.85,
   "hfov": 39.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_6_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -21.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_6_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -20.85,
   "pitch": -21.42,
   "distance": 50,
   "hfov": 39.99
  }
 ],
 "id": "overlay_BC0A8603_A42F_9767_41D2_D9DAE13D0563",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "AudioResource",
 "mp3Url": "media/audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B.mp3",
 "oggUrl": "media/audio_CB7ABD49_DD68_4369_41E6_3F56EA25E83B.ogg",
 "id": "audioresource_CBA6AB41_DD68_4759_41EB_9B090AB4F0AF"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650",
 "id": "viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C, this.camera_3CE9215D_2806_EAF8_41AF_42E1BF85EFC5); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.24,
   "hfov": 10.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -22.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE76356_5CA4_CDD5_41AE_FAB6C392F648",
   "yaw": 30.24,
   "pitch": -22.84,
   "distance": 100,
   "hfov": 10.91
  }
 ],
 "id": "overlay_F807574A_E90B_53DA_41E8_18595DFBE9A6",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_7466340B_61E8_C8FC_41C2_7447557D856A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_756475E5_652F_DE92_41C7_3B85230CCED7, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.45,
   "hfov": 16.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -60.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_2_0.png",
      "width": 276,
      "height": 263
     }
    ]
   },
   "pitch": -1,
   "hfov": 16.36
  }
 ],
 "id": "overlay_B2F91229_A42B_AFA0_41DE_E91D0DF1F9B2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268, this.camera_3CF6E176_2806_EAC8_4197_2AC40596F016); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.33,
   "hfov": 15.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AADA5432_A495_3591_41DC_DF67F6301946",
   "yaw": -170.33,
   "pitch": -12.37,
   "distance": 100,
   "hfov": 15.46
  }
 ],
 "id": "overlay_B2AD7338_A43B_EDA1_41B6_7569429510D2",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.55,
   "hfov": 40.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -20.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -163.55,
   "pitch": -20.66,
   "distance": 50,
   "hfov": 40.2
  }
 ],
 "id": "overlay_B2928930_A43C_9DA0_41D0_23018CA90124",
 "data": {
  "label": "KEMBALI KE POS 1"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B437F80_2806_F648_41C1_325BD69A6111",
 "id": "viewer_uid3B437F80_2806_F648_41C1_325BD69A6111VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF, this.camera_3D8E6256_2806_EEC8_4190_B71FBA1DADED); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.86,
   "hfov": 11.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEC7361_5CA4_CDEC_41C4_840E20B2F8BC",
   "yaw": 18.86,
   "pitch": -14.9,
   "distance": 100,
   "hfov": 11.44
  }
 ],
 "id": "overlay_E621CB11_F8FE_A8B4_41EC_2E46B0A17B53",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7E3DE67_A45B_B7A0_41C0_2111D02EBF19, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD043F8_27FB_6DC7_4195_B375C208B012, this.video_B07F96F1_A45B_F4A0_41BB_8AA22C68514D, this.PlayList_3441EEC4_27FB_37C8_41A0_FE4030338B4D, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.95,
   "hfov": 32.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_2_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 6.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -54.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_2_0.png",
      "width": 557,
      "height": 468
     }
    ]
   },
   "pitch": 6.28,
   "hfov": 32.84
  }
 ],
 "id": "overlay_B70CE923_A45B_7DA0_41D0_9C5F088CAC6B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335, this.camera_3D9CE265_2806_EEC8_41B8_4172F0B34D77); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.8,
   "hfov": 9.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -45.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC0043E_A495_3591_41E1_EEB53B487A29",
   "yaw": -163.8,
   "pitch": -45.16,
   "distance": 100,
   "hfov": 9.74
  }
 ],
 "id": "overlay_BD5DB5DA_A42D_B4E0_41DF_8D32865E5A79",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.97,
   "hfov": 25.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -54.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -148.97,
   "pitch": -54.08,
   "distance": 50,
   "hfov": 25.2
  }
 ],
 "id": "overlay_BC2960CD_A42D_ECE0_41B7_1BF572661326",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B459F82_2806_F648_41A3_192E41F5023E",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5277"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703F",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5279"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B502F8B_2806_F658_41AB_A86C4DFFC258",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5282"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701, this.camera_3C7180A6_2806_EA48_41B3_A29669D7C880); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.81,
   "hfov": 10.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -22.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEFA364_5CA4_CDF4_41D3_682AC00438D5",
   "yaw": -95.81,
   "pitch": -22.12,
   "distance": 100,
   "hfov": 10.97
  }
 ],
 "id": "overlay_EF1DA820_F8D6_E894_41ED_E7229CB7F714",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7441B0B_A464_9D60_41B6_C28282228370, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDCD3EF_27FB_6DD8_41C0_D54DEE7867E3, this.video_B79A12C6_A464_ACE0_41AD_DB0AD164E307, this.PlayList_34435EC3_27FB_37C8_41AD_3D693F65E656, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.03,
   "hfov": 29.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_2_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 16.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -60.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_2_0.png",
      "width": 513,
      "height": 369
     }
    ]
   },
   "pitch": 16.51,
   "hfov": 29.16
  }
 ],
 "id": "overlay_B685ACD2_A467_94E0_41D7_5C819ED05F38",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_3C61A096_2806_EA48_41A4_E08479D88F94); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.93,
   "hfov": 11.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -17.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC4743A_A495_3591_419F_7E3A8E460CB8",
   "yaw": 61.93,
   "pitch": -17.15,
   "distance": 100,
   "hfov": 11.52
  }
 ],
 "id": "overlay_BC87979E_A42C_9560_41D4_DF6A8036BB0E",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.87,
   "hfov": 38.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -27.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 76.87,
   "pitch": -27.45,
   "distance": 50,
   "hfov": 38.12
  }
 ],
 "id": "overlay_BD99062C_A42C_97A0_419B_06BCA251F23B",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703F",
 "id": "viewer_uid3B480F85_2806_F648_41C0_4A4E54DE703FVideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5284"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.75,
   "hfov": 11.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -17.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE8B35C_5CA4_CDD4_41D1_480D11042D5D",
   "yaw": -106.75,
   "pitch": -17.67,
   "distance": 100,
   "hfov": 11.28
  }
 ],
 "id": "overlay_EBC38BB8_F857_6FF5_41D8_27F413D56112",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.23,
   "hfov": 55.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_1_0_map.gif",
      "width": 95,
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_1_0.png",
      "width": 1064,
      "height": 178
     }
    ]
   },
   "yaw": -99.23,
   "pitch": -27.82,
   "distance": 50,
   "hfov": 55.77
  }
 ],
 "id": "overlay_EB99EF0B_F855_A8AB_41E7_B7FBF98FBCB7",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6AE42DC_A42F_6CE0_41E3_6DFE21B01909, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_B636E65C_A465_97E0_41DC_7D115D38BBC4, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.92,
   "hfov": 22.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -7.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -39.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_5_0.png",
      "width": 375,
      "height": 342
     }
    ]
   },
   "pitch": -7.58,
   "hfov": 22.06
  }
 ],
 "id": "overlay_B708E68C_A42F_F760_41D0_BC1FB6FC95E1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B621FE7D_A464_B7A0_41D4_A5E5C2BC1F1A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD923EC_27FB_6DD8_41B6_71E21BE1F30C, this.video_B6B79604_A464_F761_41E2_02467D04CD8D, this.PlayList_34433EC2_27FB_37C8_41C0_E042D3F3EBF3, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.68,
   "hfov": 17.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_6_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -167.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_6_0.png",
      "width": 305,
      "height": 269
     }
    ]
   },
   "pitch": -6.93,
   "hfov": 17.94
  }
 ],
 "id": "overlay_B6CC5258_A46B_6FE0_41DF_8AFBFEFDA40C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://drive.google.com/file/d/1RCJcd8QI-TbL_bbA1XiRhQlNwfaHFh6h/view?usp=sharing', '_blank')"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.45,
   "hfov": 21.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_7_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -12.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 132.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_7_0.png",
      "width": 366,
      "height": 248
     }
    ]
   },
   "pitch": -12.35,
   "hfov": 21.21
  }
 ],
 "id": "overlay_B2A5C9BD_A424_BCA0_41D0_9459F80C8F4C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_7768FB94_6565_6AB2_41C6_D99B64E1DA13, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_775E6888_6565_D693_41D7_716EB1DA683A, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.67,
   "hfov": 22.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 0.18
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 110.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_3_0.png",
      "width": 382,
      "height": 284
     }
    ]
   },
   "pitch": 0.18,
   "hfov": 22.63
  }
 ],
 "id": "overlay_B2C58137_A424_ADAF_41D8_68DB870EA77C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_76336174_656B_767C_41CF_C00C6053746E, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_786293C3_761D_05AA_41D6_B99F42FFBE46, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.67,
   "hfov": 21.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.36
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -87.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_2_0.png",
      "width": 360,
      "height": 335
     }
    ]
   },
   "pitch": -8.36,
   "hfov": 21.15
  }
 ],
 "id": "overlay_B36D457C_A424_B5A0_41D8_468D4501D926",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_3CCB512A_2806_EA58_418E_B7E189258228); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.91,
   "hfov": 9.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_4_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC4A43B_A495_3597_41D3_B26CBC289F2F",
   "yaw": 109.91,
   "pitch": -23.8,
   "distance": 100,
   "hfov": 9.19
  }
 ],
 "id": "overlay_BCABCCB9_A42D_74A0_41E2_D2E0A41AF8BE",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.1,
   "hfov": 36.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_5_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -31.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_5_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 124.1,
   "pitch": -31.97,
   "distance": 50,
   "hfov": 36.44
  }
 ],
 "id": "overlay_BC2E6FC4_A42D_94E0_41D0_EC100463788A",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_3D24B1CB_2806_EDD8_41BE_56793D5849B6); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.86,
   "hfov": 11.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -18.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EF10366_5CA4_CDF4_41CC_8E6C37CE29AB",
   "yaw": 18.86,
   "pitch": -18.42,
   "distance": 50,
   "hfov": 11.24
  }
 ],
 "id": "overlay_F8CADFE1_E8F7_52C6_41D9_DF0F845216D8",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_742EE7EC_61E7_B734_41BA_356D7C5DCF8C, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_755352E0_61E8_492D_41C3_ADBCC350A60E, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.05,
   "hfov": 14.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_2_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -0.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 92.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_2_0.png",
      "width": 242,
      "height": 174
     }
    ]
   },
   "pitch": -0.99,
   "hfov": 14.34
  }
 ],
 "id": "overlay_75476C85_6198_F9F4_41C7_78D9B05B0517",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B43AA57A_A42C_95A0_41D1_1F7E3E448644, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDA43E8_27FB_6DD8_41B2_5E5EA17DAD03, this.video_B4873789_A42C_9560_41C9_ABCDD641B19F, this.PlayList_34459EC1_27FB_37C8_41B9_F62A645C2634, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.7,
   "hfov": 10.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_4_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 109.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_4_0.png",
      "width": 170,
      "height": 151
     }
    ]
   },
   "pitch": -2.67,
   "hfov": 10.06
  }
 ],
 "id": "overlay_B4CCB425_A43C_EBA0_41E0_5F3E29718DAC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B520F8C_2806_F658_418B_6305319623A6",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5283"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B437F80_2806_F648_41C1_325BD69A6111",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5276"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B56CF90_2806_F648_41C3_AC73C9AF6650",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5285"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_3C7FB0B7_2806_EA48_41A2_AA86BCFCCDDC); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.6,
   "hfov": 8.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -41.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEA135D_5CA4_CDD7_41C8_D6989D07831E",
   "yaw": 151.6,
   "pitch": -41.98,
   "distance": 100,
   "hfov": 8.8
  }
 ],
 "id": "overlay_E601884D_F8F7_A8AC_41B4_FB06A2C583E5",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152,
   "hfov": 11.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_1_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -51.38
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_1_0.png",
      "width": 315,
      "height": 157
     }
    ]
   },
   "yaw": 152,
   "pitch": -51.38,
   "distance": 50,
   "hfov": 11.64
  }
 ],
 "id": "overlay_E7B50844_F8F6_A89D_41D6_2178C1B36F2F",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6214B69_A425_9DA0_41E2_902A5D9D4D80, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_B6CF566B_A465_97A0_41D2_A1C69FD2D7CA, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.22,
   "hfov": 33.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_4_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 16.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 18.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_4_0.png",
      "width": 594,
      "height": 369
     }
    ]
   },
   "pitch": 16.26,
   "hfov": 33.78
  }
 ],
 "id": "overlay_B6313F3D_A425_95A0_41E4_3187489BAE86",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B21E0661_A42D_B7A0_41C4_673EDFFF0EB7, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD083FA_27FB_6DBB_41B3_72560BB5CADF, this.video_B353C22D_A42D_6FA0_41E1_58BDE186E7F0, this.PlayList_34411EC5_27FB_37C8_41B5_BBF7085B57FD, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.29,
   "hfov": 23.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 17.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -88.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_5_0.png",
      "width": 416,
      "height": 386
     }
    ]
   },
   "pitch": 17.26,
   "hfov": 23.53
  }
 ],
 "id": "overlay_B237C7DE_A424_94E0_41E0_3727C9190848",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.55,
   "hfov": 26.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_6_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -51.81
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_6_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 165.55,
   "pitch": -51.81,
   "distance": 50,
   "hfov": 26.56
  }
 ],
 "id": "overlay_B3A6066E_A42B_77A0_41DC_8492CCF2FEDE",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431, this.camera_3C14B04B_2806_EAD8_4189_4F3AC2A29D2A); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.07,
   "hfov": 11.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_0_0_0_map.gif",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -12.86
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE9B35A_5CA4_CDDC_41CB_8B60F30E58B5",
   "yaw": 94.07,
   "pitch": -12.86,
   "distance": 50,
   "hfov": 11.55
  }
 ],
 "id": "overlay_FB05D263_E908_ADCA_41E5_1BD89DC5C896",
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_3C243059_2806_EAF8_41BE_C7D73C44A86B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.25,
   "hfov": 11.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -15.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE9F35A_5CA4_CDDC_41CA_E9BC0FAC165E",
   "yaw": -4.25,
   "pitch": -15.66,
   "distance": 50,
   "hfov": 11.4
  }
 ],
 "id": "overlay_ED294DE5_F873_AB9F_41E9_7871CBE0520A",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B2D15DEB_A42C_B4A0_41B2_AED58724AA97, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDB23EA_27FB_6DD8_4184_4514516BCA7A, this.video_B3E492B5_A42C_ECA0_41DB_E5AF21B72BFB, this.PlayList_3443EEC1_27FB_37CB_41BD_E8B66390D568, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.98,
   "hfov": 16.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 17.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 40.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_4_0.png",
      "width": 297,
      "height": 353
     }
    ]
   },
   "pitch": 17.7,
   "hfov": 16.79
  }
 ],
 "id": "overlay_B378122D_A42C_AFA0_41C8_371854F6E874",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_69F2C327_78BE_DB25_41A2_719A00122678, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_6A7E1AAB_7B14_26AD_41D0_30F19C1F0A21, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.91,
   "hfov": 17.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 11.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -50.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_5_0.png",
      "width": 295,
      "height": 338
     }
    ]
   },
   "pitch": 11.16,
   "hfov": 17.18
  }
 ],
 "id": "overlay_B2D43449_A425_6BE0_41E3_A5048C1E8951",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_3C06D039_2806_EAB8_41AD_48CC874A5889); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.45,
   "hfov": 11.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_6_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAD8C434_A495_3591_41CD_230CCC9D361B",
   "yaw": -136.45,
   "pitch": -11.49,
   "distance": 50,
   "hfov": 11.49
  }
 ],
 "id": "overlay_BD4C927D_A43D_AFA0_41B2_1CC9AF53FFBD",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.09,
   "hfov": 40.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_7_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -20.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_7_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -122.09,
   "pitch": -20.66,
   "distance": 50,
   "hfov": 40.2
  }
 ],
 "id": "overlay_BDA3E416_A43D_6B60_41E3_391B2FE54DA1",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7",
 "id": "viewer_uid3B55AF8D_2806_F658_4194_7702D7814AB7VideoPlayer",
 "displayPlaybackBar": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.35,
   "hfov": 11.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EF1F366_5CA4_CDF4_41D1_8D1F4E098E5A",
   "yaw": 17.35,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 11.53
  }
 ],
 "id": "overlay_ED707C59_F8CE_E8B4_41EC_DE841E40FEB4",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.84,
   "hfov": 47.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_1_0_map.gif",
      "width": 104,
      "height": 16
     }
    ]
   },
   "pitch": -23.3
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_1_0.png",
      "width": 878,
      "height": 135
     }
    ]
   },
   "yaw": 17.84,
   "pitch": -23.3,
   "distance": 50,
   "hfov": 47.76
  }
 ],
 "id": "overlay_EE27C093_F8CF_B9BB_41C9_A751D05BCD69",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6E8F4CA_A427_F4E0_41E3_AFE28AEC4F67, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_B6335660_A465_97A0_41D1_DBE9E76E52FF, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.94,
   "hfov": 29.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_4_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 7.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 113.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_4_0.png",
      "width": 509,
      "height": 365
     }
    ]
   },
   "pitch": 7.84,
   "hfov": 29.88
  }
 ],
 "id": "overlay_B67764B4_A42D_74A0_41E0_2FDF87F7838D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B6BD93B0_A47B_ACA0_41B3_B26124CA28BB, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDFC3EE_27FB_6DD8_41A9_D7809163AC1C, this.video_B7F4CB83_A47B_9D60_41DD_61CF0823911C, this.PlayList_34404EC3_27FB_37C8_41BC_07A7636EA2A1, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.08,
   "hfov": 24.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -148.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_5_0.png",
      "width": 407,
      "height": 407
     }
    ]
   },
   "pitch": 4.83,
   "hfov": 24.05
  }
 ],
 "id": "overlay_B6F8328A_A47B_AF60_41DA_A89DA44D3A2A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E390A695_E8F9_754E_4171_FD3023CF395D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BA",
 "id": "viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BAVideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B41FF7F_2806_F6B8_41B3_7AF0704B90BA",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5275"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.75,
   "hfov": 11.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -12.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE9735A_5CA4_CDDC_41D3_E2E5B2E109CF",
   "yaw": 66.75,
   "pitch": -12.21,
   "distance": 50,
   "hfov": 11.57
  }
 ],
 "id": "overlay_EB867347_F852_989C_41ED_ECCFAF091C32",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B675B9F9_A46F_9CA0_41D7_202A8E13AAC1, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD813EB_27FB_6DD8_41A6_8B89F37DCA45, this.video_B687A494_A46F_6B61_41E3_4F366B6D5F0D, this.PlayList_34438EC2_27FB_37C8_41A8_D83236DF88ED, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.9,
   "hfov": 14.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -2.27
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 162.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_2_0.png",
      "width": 241,
      "height": 217
     }
    ]
   },
   "pitch": -2.27,
   "hfov": 14.27
  }
 ],
 "id": "overlay_B67E7717_A46F_9560_41E1_5E419BB36AFB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_3CDB0144_2806_EAC8_41C3_0E2367BED60F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.29,
   "hfov": 9.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAD90436_A495_3591_41D1_F117A0682701",
   "yaw": -136.29,
   "pitch": -16.77,
   "distance": 100,
   "hfov": 9.62
  }
 ],
 "id": "overlay_BEDBE532_A424_F5A0_41D9_A07158411CD1",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.09,
   "hfov": 39.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -23.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -121.09,
   "pitch": -23.68,
   "distance": 50,
   "hfov": 39.34
  }
 ],
 "id": "overlay_BC08300E_A424_AB60_4191_8475722E34C5",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E398568E_E8FB_555A_41E9_5115CBE6405E, this.camera_3D50F21A_2806_EE78_41BA_F5939200ADC9); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.53,
   "hfov": 10.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -22.65
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EED535F_5CA4_CDD4_41CE_FAB607E4A061",
   "yaw": -70.53,
   "pitch": -22.65,
   "distance": 100,
   "hfov": 10.93
  }
 ],
 "id": "overlay_E44716C9_F8F3_9994_41E7_AF03A9F517E0",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B22937C5_A425_F4E0_41CF_9D103D5812DB, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD153F9_27FB_6DB9_418C_00D886897481, this.video_B19940AC_A425_ACA0_41D3_253F3C44386A, this.PlayList_34418EC4_27FB_37C8_4197_8204327DB8F0, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.82,
   "hfov": 28.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_2_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 24.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -67.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_2_0.png",
      "width": 530,
      "height": 411
     }
    ]
   },
   "pitch": 24.8,
   "hfov": 28.53
  }
 ],
 "id": "overlay_B30FBE6C_A425_97A0_41DC_B3F60E050225",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_3D604229_2806_EE58_41C0_49D6AD51EA1F); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.63,
   "hfov": 9.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC1443F_A495_358F_41C8_1EE421EA2F58",
   "yaw": 51.63,
   "pitch": -13.75,
   "distance": 100,
   "hfov": 9.76
  }
 ],
 "id": "overlay_BD6E543E_A42C_ABA0_41E3_03A5887E6442",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.33,
   "hfov": 38.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 67.33,
   "pitch": -24.93,
   "distance": 50,
   "hfov": 38.95
  }
 ],
 "id": "overlay_BC37A4BD_A42C_94A0_41C8_578B02A492A6",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331, this.camera_3D1701AE_2806_EA58_4170_4ED194184BA0); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.11,
   "hfov": 19.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -8.48
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_782CF393_761D_05AA_41C8_AC9C5442D060",
   "yaw": 31.11,
   "pitch": -8.48,
   "distance": 50,
   "hfov": 19.55
  }
 ],
 "id": "overlay_765325D3_657D_7EB6_41C7_ABE397A7D76D",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B05FC82B_A465_9BA0_41C3_4AD6BEB2AE3F, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CD2A3F6_27FB_6DC8_41C3_5193F8710220, this.video_B789DF94_A465_B560_41C2_6C889275F933, this.PlayList_34406EC4_27FB_37C8_41BE_D230AE9A2E04, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.81,
   "hfov": 30.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_3_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 3.57
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -117.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_3_0.png",
      "width": 513,
      "height": 373
     }
    ]
   },
   "pitch": 3.57,
   "hfov": 30.36
  }
 ],
 "id": "overlay_B7434C31_A46B_FBA0_4191_A9D4E613BA0B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_7634BFD8_657B_2AB2_41C0_C6642B223F3B, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_7863C3C6_761D_05AA_41A6_EFA7A29DC9F4, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.26,
   "hfov": 27.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 5.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": 155.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_4_0.png",
      "width": 471,
      "height": 369
     }
    ]
   },
   "pitch": 5.2,
   "hfov": 27.79
  }
 ],
 "id": "overlay_B35E209A_A424_AB60_41CA_4EFE3713F6FA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE, this.camera_3D06B190_2806_EA48_41B3_C60CDD20CE13); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.9,
   "hfov": 12.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC3243E_A495_3591_41E0_C04A0D68FECE",
   "yaw": -40.9,
   "pitch": -5.46,
   "distance": 100,
   "hfov": 12.86
  }
 ],
 "id": "overlay_BD797A22_A42C_FFA0_41C9_6A883A1CAF04",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.88,
   "hfov": 41.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_6_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -12.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_6_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -26.88,
   "pitch": -12.62,
   "distance": 50,
   "hfov": 41.92
  }
 ],
 "id": "overlay_BD0C72E3_A42C_ECA0_418F_BFC00984816D",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B520F8C_2806_F658_418B_6305319623A6",
 "id": "viewer_uid3B520F8C_2806_F658_418B_6305319623A6VideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5274"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610",
 "id": "viewer_uid3B4A5F86_2806_F648_41A1_907BD9DB7610VideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5281"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B459F82_2806_F648_41A3_192E41F5023E",
 "id": "viewer_uid3B459F82_2806_F648_41A3_192E41F5023EVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1, this.camera_3C421078_2806_EAB8_41AF_F68ECEDD7312); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.94,
   "hfov": 11.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -19.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEB035D_5CA4_CDD7_41C2_9BDEF869CBE5",
   "yaw": 16.94,
   "pitch": -19.21,
   "distance": 100,
   "hfov": 11.18
  }
 ],
 "id": "overlay_EEE0C026_F8D3_989C_41E4_9DD48E09ECDD",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE, this.camera_3C358069_2806_EAD8_41A0_CACB40561C60); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.9,
   "hfov": 11.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -17.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEA835D_5CA4_CDD7_41D2_B6BAB8AF6C2D",
   "yaw": -46.9,
   "pitch": -17.97,
   "distance": 50,
   "hfov": 11.26
  }
 ],
 "id": "overlay_E0F3449D_F8D2_B9AC_41E8_DED63BA6B6E3",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_74C9FA19_6565_75B5_41BE_C983C7B72568, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_77589886_6565_D69F_41BC_14158ABEE1A2, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.36,
   "hfov": 24.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -76.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_3_0.png",
      "width": 420,
      "height": 411
     }
    ]
   },
   "pitch": -7.61,
   "hfov": 24.67
  }
 ],
 "id": "overlay_B2DE916A_A427_ADA0_41E1_17BF6F25BC88",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_3C53B088_2806_EA58_41B2_535B33A4FB64); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.55,
   "hfov": 8.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_4_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -34.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC7343A_A495_3591_41C7_1428D6924BAF",
   "yaw": 163.55,
   "pitch": -34.61,
   "distance": 100,
   "hfov": 8.89
  }
 ],
 "id": "overlay_BCD933D4_A42B_ACE0_41D2_963CC4F7AD69",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.11,
   "hfov": 31.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_5_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -42.52
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_5_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 177.11,
   "pitch": -42.52,
   "distance": 50,
   "hfov": 31.66
  }
 ],
 "id": "overlay_BC2FC2A5_A42B_ECA3_41D1_336C80B070B7",
 "data": {
  "label": "KEMBALI "
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE, this.camera_3D707237_2806_EE48_41BE_12B122FEB887); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.55,
   "hfov": 11.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -17.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEC0362_5CA4_CDED_41B6_46554D7D984C",
   "yaw": -141.55,
   "pitch": -17.75,
   "distance": 100,
   "hfov": 11.28
  }
 ],
 "id": "overlay_E0CCFD3E_F8DE_A8EC_41D3_7CEDA9AEB9FC",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B7512692_A46C_B760_41D9_D1C6B3C2594B, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDDA3F0_27FB_6DC8_41BC_2E05562E2FC6, this.video_B7FF0302_A46B_6D60_41D4_CC920DC69ECD, this.PlayList_3440FEC3_27FB_37C8_41B0_F0CC4E0E3CA7, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.89,
   "hfov": 27.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_2_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 17.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -56.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_2_0.png",
      "width": 492,
      "height": 356
     }
    ]
   },
   "pitch": 17.14,
   "hfov": 27.87
  }
 ],
 "id": "overlay_B7555626_A46C_F7A0_41E2_99ACB983D166",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_3D7EC246_2806_EEC8_41AB_C4013292B685); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.65,
   "hfov": 15.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC5943C_A495_3591_41CB_E3043BF184BE",
   "yaw": 70.65,
   "pitch": -15.76,
   "distance": 100,
   "hfov": 15.83
  }
 ],
 "id": "overlay_BC04747C_A42C_EBA0_41E2_FD62EFE9B4B2",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.92,
   "hfov": 39.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -24.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 85.92,
   "pitch": -24.68,
   "distance": 50,
   "hfov": 39.03
  }
 ],
 "id": "overlay_BC8292FB_A42C_ACA0_41E0_20753CFF3D3C",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0",
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5278"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0",
 "id": "viewer_uid3B44FF83_2806_F648_41C3_6A3C82C90CA0VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55, this.camera_3D3511E4_2806_EDC8_41A6_49762A3ACA79); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.59,
   "hfov": 10.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -23.19
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE6D35A_5CA4_CDDC_41D5_65690E04D847",
   "yaw": 15.59,
   "pitch": -23.19,
   "distance": 100,
   "hfov": 10.89
  }
 ],
 "id": "overlay_FB7C1530_E908_B746_41EC_107D1228B6D8",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6A76B567_6525_5F9E_41D9_156D317DC354, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_7566D5E5_652F_DE92_41CB_38F7195FCFBD, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.72,
   "hfov": 16.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_3_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -91.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_3_0.png",
      "width": 284,
      "height": 222
     }
    ]
   },
   "pitch": -8.18,
   "hfov": 16.66
  }
 ],
 "id": "overlay_B2C3B96F_A424_BDA0_41D7_5D1FED98E3C2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6AC69A02_6524_F596_41A8_CA0F37717BC2, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_756125E6_652F_DE9F_41B3_D985A9DA49E1, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.69,
   "hfov": 12.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -46.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_4_0.png",
      "width": 214,
      "height": 210
     }
    ]
   },
   "pitch": -7.75,
   "hfov": 12.6
  }
 ],
 "id": "overlay_B2CA3761_A424_F5A0_41D1_6528FE8CAFC8",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.79,
   "hfov": 37.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_5_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -30.46
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_5_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": -161.79,
   "pitch": -30.46,
   "distance": 50,
   "hfov": 37.03
  }
 ],
 "id": "overlay_B2E952D9_A43C_ECE0_41CA_99FA57CF46D5",
 "data": {
  "label": "KEMBALI KE POS 2"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD, this.camera_3D4261FD_2806_EDB8_41C1_F3483C940F98); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.82,
   "hfov": 13.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_6_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -19.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AADA9432_A495_3591_41C3_B0BDD956C498",
   "yaw": -168.82,
   "pitch": -19.66,
   "distance": 100,
   "hfov": 13.96
  }
 ],
 "id": "overlay_B3133B4D_A43C_BDE0_41D4_324C43909643",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.7,
   "hfov": 10.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EEB835C_5CA4_CDD4_41D1_82C564C9C92A",
   "yaw": -45.7,
   "pitch": -23.8,
   "distance": 100,
   "hfov": 10.83
  }
 ],
 "id": "overlay_ED66CC3C_F8CD_A8ED_41E7_09DBC9A221D5",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_74A27224_652B_D593_41D2_80E0F3EBDD8B, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_7745A885_6565_D692_41D9_4DFC388CBEA4, null, null, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.6,
   "hfov": 16.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_2_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 17.01
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -48.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_2_0.png",
      "width": 297,
      "height": 242
     }
    ]
   },
   "pitch": 17.01,
   "hfov": 16.84
  }
 ],
 "id": "overlay_B2A74151_A427_ADE0_41D7_AC4B3E6480C5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE, this.camera_3CBD0111_2806_EA48_41BE_D86DF6905513); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.02,
   "hfov": 9.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAC65438_A495_3591_41E2_AC6A8BC45D32",
   "yaw": 130.02,
   "pitch": -17.94,
   "distance": 100,
   "hfov": 9.49
  }
 ],
 "id": "overlay_BC6DAD2F_A427_75A0_418A_8DF10819CE93",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.96,
   "hfov": 37.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_4_0_map.gif",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -27.95
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_4_0.png",
      "width": 725,
      "height": 140
     }
    ]
   },
   "yaw": 145.96,
   "pitch": -27.95,
   "distance": 50,
   "hfov": 37.95
  }
 ],
 "id": "overlay_BCD63E4A_A424_97E0_41DB_92E00B82C33F",
 "data": {
  "label": "KEMBALI"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B, this.camera_3CAD40F8_2806_EBB8_41C2_0C7662AB72FD); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.82,
   "hfov": 11.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE8335C_5CA4_CDD4_41D3_C9CDBFF4D929",
   "yaw": -69.82,
   "pitch": -14.9,
   "distance": 100,
   "hfov": 11.44
  }
 ],
 "id": "overlay_EC01ED18_F852_A8B4_41BA_2567E916FDFF",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F, this.camera_3C8F40C6_2806_EBC8_41C0_0ADAE2C43548); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.23,
   "hfov": 11.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -11.91
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EE8435C_5CA4_CDD4_41C1_6BCFB75AFB78",
   "yaw": -149.23,
   "pitch": -11.91,
   "distance": 50,
   "hfov": 11.59
  }
 ],
 "id": "overlay_EE81F17B_F84E_9B74_41CB_FCBDCD4D5D88",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B6E1F8DD_A47D_7CE0_41CC_CAC280BE620D, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2CDE33ED_27FB_6DD8_41A9_19F412CF0328, this.video_B7199BD7_A47C_9CE0_41D3_0CD947BB3D45, this.PlayList_3440AEC2_27FB_37C9_41B6_90730E650315, '95%', '95%', true, true) }"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.55,
   "hfov": 32.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 5.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -115.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_3_0.png",
      "width": 547,
      "height": 399
     }
    ]
   },
   "pitch": 5.08,
   "hfov": 32.3
  }
 ],
 "id": "overlay_B6B7953C_A47D_B5A0_41DB_38EB004F6C19",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47, this.camera_3C9CE0D5_2806_EBC8_4187_3F23604DC555); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.19,
   "hfov": 9.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_4_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -10.34
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AAD9D438_A495_3591_4193_3A94D5837965",
   "yaw": 83.19,
   "pitch": -10.34,
   "distance": 100,
   "hfov": 9.21
  }
 ],
 "id": "overlay_BE677039_A425_6BA0_41C7_94189E681072",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KEM"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.55,
   "hfov": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_5_0_map.gif",
      "width": 102,
      "height": 16
     }
    ]
   },
   "pitch": -20.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_5_0.png",
      "width": 899,
      "height": 140
     }
    ]
   },
   "yaw": 87.55,
   "pitch": -20.16,
   "distance": 50,
   "hfov": 50
  }
 ],
 "id": "overlay_BEA6D33C_A425_6DA0_41C9_E1C4217102DA",
 "data": {
  "label": "KEMBALI KE PERSIMPANGAN"
 },
 "rollOverDisplay": false
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 58.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0",
 "id": "viewer_uid3B3ACF7B_2806_F6B8_41C1_DF424DF6F7C0VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913",
 "id": "viewer_uid3B4CFF88_2806_F658_41C3_A0B988B64913VideoPlayer",
 "displayPlaybackBar": true
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 66,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "backgroundImageUrl": "skin/Container_7DB20382_7065_343F_4186_6E0B0B3AFF36.png",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "class": "Container",
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "width": 300,
 "borderRadius": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "paddingLeft": 40,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "91.304%",
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "backgroundImageUrl": "skin/Container_22BBC2F4_3075_D173_41B4_71F7A3560C34.png",
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "width": 550,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 138,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 8,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "backgroundImageUrl": "skin/Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255.png",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AADAB433_A495_3597_41C8_BA81E786E797",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AADBD433_A495_3597_41C8_C1EA519B98C6",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E39B0A82_E8FB_7D4A_419A_77B1902EAD55_0_HS_7_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EED335F_5CA4_CDD4_41C5_7607946D2B0A",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC1D440_A495_35F1_41DB_058BDC7A1798",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E398568E_E8FB_555A_41E9_5115CBE6405E_0_HS_3_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEF8361_5CA4_CDEC_41D6_8736D7B6941D",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEF2362_5CA4_CDED_41D2_F78C7FA0F545",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC2C43D_A495_3593_41A4_BF28B01B151B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F746_E8F8_F3CA_41D2_F97866C686EE_0_HS_5_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE76356_5CA4_CDD5_41AE_FAB6C392F648",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AADA5432_A495_3591_41DC_DF67F6301946",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3AD9878_E8FB_5DC6_41E1_FA11D9C341CD_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEC7361_5CA4_CDEC_41C4_840E20B2F8BC",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC0043E_A495_3591_41E1_EEB53B487A29",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4A2EA_E8F8_B2DA_41E8_E551BF69F331_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEFA364_5CA4_CDF4_41D3_682AC00438D5",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC4743A_A495_3591_419F_7E3A8E460CB8",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3919313_E8F8_B34A_41BC_F3B72C2719DE_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE8B35C_5CA4_CDD4_41D1_480D11042D5D",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C41534_E8FB_B74E_41BB_70D6FD021376_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC4A43B_A495_3597_41D3_B26CBC289F2F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C56C7D_E8F8_B5BE_41E5_2A32D0CAF701_0_HS_4_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 33,
 "id": "AnimatedImageResource_4EF10366_5CA4_CDF4_41CC_8E6C37CE29AB",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C512A5_E8F9_AD4E_41EA_82FCDD6CE268_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEA135D_5CA4_CDD7_41C8_D6989D07831E",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E393225F_E8FB_EDFA_41C5_13860A91D4FE_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE9B35A_5CA4_CDDC_41CB_8B60F30E58B5",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_0_0.png",
   "width": 560,
   "height": 300
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE9F35A_5CA4_CDDC_41CA_E9BC0FAC165E",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAD8C434_A495_3591_41CD_230CCC9D361B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4F30F_E8FB_535A_41D9_3494A86E1E47_0_HS_6_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EF1F366_5CA4_CDF4_41D1_8D1F4E098E5A",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E390A695_E8F9_754E_4171_FD3023CF395D_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE9735A_5CA4_CDDC_41D3_E2E5B2E109CF",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAD90436_A495_3591_41D1_F117A0682701",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3ABAC1A_E8FB_557A_41EC_9F0E164CA431_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EED535F_5CA4_CDD4_41CE_FAB607E4A061",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC1443F_A495_358F_41C8_1EE421EA2F58",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3B66779_E8FB_73C6_41E6_2EC481AA65AF_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_782CF393_761D_05AA_41C8_AC9C5442D060",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC3243E_A495_3591_41E0_C04A0D68FECE",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3AE0E4B_E8F8_D5DA_41C1_C33E7337E335_0_HS_5_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEB035D_5CA4_CDD7_41C2_9BDEF869CBE5",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEA835D_5CA4_CDD7_41D2_B6BAB8AF6C2D",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC7343A_A495_3591_41C7_1428D6924BAF",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C47936_E8FB_FF4A_41CA_2CA112A4259F_0_HS_4_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEC0362_5CA4_CDED_41B6_46554D7D984C",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC5943C_A495_3591_41CB_E3043BF184BE",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3A560BE_E8F8_EEBA_41CB_61EB96DB22E1_0_HS_3_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE6D35A_5CA4_CDDC_41D5_65690E04D847",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AADA9432_A495_3591_41C3_B0BDD956C498",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4C195_E8FB_6F4E_41E6_7A6B7272238C_0_HS_6_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EEB835C_5CA4_CDD4_41D1_82C564C9C92A",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAC65438_A495_3591_41E2_AC6A8BC45D32",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3C4475B_E8FB_D3FA_41E6_86A049C5109B_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE8335C_5CA4_CDD4_41D3_C9CDBFF4D929",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4EE8435C_5CA4_CDD4_41C1_6BCFB75AFB78",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_AAD9D438_A495_3591_4193_3A94D5837965",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3A7CE3F_E8FB_B5BA_41D4_1B9EC4E971AE_0_HS_4_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "layout": "absolute",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 36,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 50,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "cursor": "hand"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "horizontalAlign": "left",
 "minWidth": 40,
 "height": "27.69%",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "layout": "vertical",
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
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "verticalAlign": "bottom",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "26.316%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "85%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "width": "50%",
 "borderRadius": 0,
 "paddingRight": 50,
 "overflow": "visible",
 "paddingLeft": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "class": "ThumbnailGrid",
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "width": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "paddingLeft": 70,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMode": "normal",
 "height": "92%",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "paddingRight": 70,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "horizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50
},
{
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "99.975%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "55%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "width": "45%",
 "borderRadius": 0,
 "paddingRight": 60,
 "overflow": "visible",
 "paddingLeft": 60,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "3.619%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "5.843%",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Deskripsi Virtual Field Trip",
 "gap": 5,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.showPopupImage(this.ImageResource_6F9141E3_7B3C_22DD_41B9_CC2C3C927716, null, '90%', '90%', this.FadeInEffect_6F91A1E3_7B3C_22DD_41D3_55090C4DB7A9, this.FadeOutEffect_6F9181E3_7B3C_22DD_41AA_12A6E53A1F7E, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_B54F32A4_A43D_6CA1_41D7_557DD7B8E37F",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Petunjuk Penggunaan VFT",
 "gap": 5,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.showPopupImage(this.ImageResource_B63E764F_A465_97E0_41CC_961DDDC04D4C, null, '90%', '90%', this.FadeInEffect_B63E664F_A465_97E0_41C1_D1F6F996ED87, this.FadeOutEffect_B63E964F_A465_97E0_41D0_652CEE05B4E8, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_B44D5A58_A4B7_3D91_41B7_5ECF2F9904C9",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Tujuan Pembelajaran",
 "gap": 5,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.showPopupImage(this.ImageResource_C3E06D95_D2A4_076A_41BC_FDECDE2D21EC, null, '90%', '90%', this.FadeInEffect_C3E07D95_D2A4_076A_41E8_E23DA96AC548, this.FadeOutEffect_C3E05D95_D2A4_076A_41E5_4B919161BBFB, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_68C15F96_7B3C_1F67_41C8_493E39833CD6",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Lokasi CMC",
 "gap": 5,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.openLink('http://maps.app.goo.gl/t1LbSEbz8XJYLMMx5', '_blank')",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "List Panorama",
 "gap": 23,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Berikan Feedback !",
 "gap": 5,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_F79C9FC6_E412_CBE9_41B1_E65B02E0E5B3",
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Berikan Feedback!",
 "gap": 23,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false); this.openLink('https://forms.gle/6Rf1qHMYBWrYmpk29', '_blank')",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 40,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "height": 2,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 127,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Ilham Adenan Hidayatullah</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>210721611682</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Universitas Negeri Malang</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Jl. Semarang 5 Malang, 65145 Telp. (0341) 551312 Malang, Indonesia</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 42,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 50,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 300,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "height": 30,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 7,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bahnschrift Condensed",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "height": "5%"
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "height": 40,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 180,
 "borderRadius": 50,
 "paddingRight": 0,
 "iconHeight": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "height": 50,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "paddingTop": 0,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "46%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "layout": "horizontal",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "height": "75%"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingBottom": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "75%",
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
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

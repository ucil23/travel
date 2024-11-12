(function(){
    var script = {
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 161.19,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 12.21,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_F7867AAA_FA7E_4855_41E4_BA26B328B9A2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.39,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 161.07,
  "class": "PanoramaCameraPosition",
  "pitch": -6.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_EE880E8D_FA86_C86F_41B7_2FB0968041F4",
   "start": "this.viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D085DC2_1DF0_FE2E_41BB_34855A6822EF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D085DC2_1DF0_FE2E_41BB_34855A6822EF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0VideoPlayer)",
   "player": "this.viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D085DC2_1DF0_FE2E_41BB_34855A6822EF",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_t.jpg",
 "partial": false,
 "id": "panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0",
 "pitch": 0,
 "overlays": [
  "this.overlay_EA65655A_E5C4_5AB7_41B4_5D227BFE58B1",
  "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC",
   "camera": "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 31.68,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 18.81,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6",
 "image": {
  "levels": [
   {
    "url": "media/popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.15
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_t.jpg",
 "partial": false,
 "id": "panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27",
 "pitch": 0,
 "overlays": [
  "this.overlay_FF4D4C5F_EB32_7AD2_4132_102165C9135C",
  "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.13,
  "class": "PanoramaCameraPosition",
  "pitch": -10.45
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 36.07,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 23.45,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566",
 "image": {
  "levels": [
   {
    "url": "media/popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.56
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_t.jpg",
 "partial": false,
 "id": "panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E",
 "pitch": 0,
 "overlays": [
  "this.overlay_E46551D8_EACA_13A5_41D8_553BBEF9F430",
  "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D",
   "start": "this.viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D08BDC2_1DF0_FE2E_41B1_79AF0C13D349, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D08BDC2_1DF0_FE2E_41B1_79AF0C13D349, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499VideoPlayer)",
   "player": "this.viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D08BDC2_1DF0_FE2E_41B1_79AF0C13D349",
 "class": "PlayList"
},
{
 "label": "1105(5)",
 "class": "Video",
 "thumbnailUrl": "media/video_EE880E8D_FA86_C86F_41B7_2FB0968041F4_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_EE880E8D_FA86_C86F_41B7_2FB0968041F4",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_EE880E8D_FA86_C86F_41B7_2FB0968041F4.mp4"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_t.jpg",
 "partial": false,
 "id": "panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD",
 "pitch": 0,
 "overlays": [
  "this.overlay_E5E8119A_EACA_73A5_41DA_1B4286801C81",
  "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 22.69,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.2,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0E0119B5_1A74_F51E_41B0_33909183FF21",
 "image": {
  "levels": [
   {
    "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 8.37
},
{
 "id": "ImageResource_145C5B8E_1A5C_750A_41B3_F0B1BED6B531",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist, 44, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_t.jpg",
 "partial": false,
 "id": "panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B",
 "pitch": 0,
 "overlays": [
  "this.overlay_F1154460_EB32_CAEE_41C9_17EA2C06D47D",
  "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_tcap0"
 ]
},
{
 "label": "DJI_0898",
 "class": "Video",
 "thumbnailUrl": "media/video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A_t.jpg",
 "width": 2688,
 "loop": false,
 "id": "video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A",
 "scaleMode": "fit_inside",
 "height": 1512,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA",
   "start": "this.viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D094DC2_1DF0_FE2E_41BB_C59BDC208DFF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D094DC2_1DF0_FE2E_41BB_C59BDC208DFF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68VideoPlayer)",
   "player": "this.viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D094DC2_1DF0_FE2E_41BB_C59BDC208DFF",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.86,
  "class": "PanoramaCameraPosition",
  "pitch": 1.04
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_camera",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_175DDF65_1DEF_FAEA_4129_68C216697CB8",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window431"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 0.72,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 15.38,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_E9D82766_FA9B_D8DC_41E4_FE588A225830",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 13.01,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648.mp4"
 }
},
{
 "id": "ImageResource_03016F5F_1B63_7AC5_4188_A6FF102C977A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_t.jpg",
 "partial": false,
 "id": "panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593",
 "pitch": 0,
 "overlays": [
  "this.overlay_F0A58BAB_EB12_3E72_41C7_FC0CE48C9C53",
  "this.overlay_16E1FDAB_1934_60C7_4180_BB5925225EED",
  "this.panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_tcap0",
  "this.popup_082622DB_1B6D_2BCE_4183_368029498619"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "1105(2)",
 "class": "Video",
 "thumbnailUrl": "media/video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 41.21,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 20.58,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_082622DB_1B6D_2BCE_4183_368029498619",
 "image": {
  "levels": [
   {
    "url": "media/popup_082622DB_1B6D_2BCE_4183_368029498619_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 10.65
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_t.jpg",
 "partial": false,
 "id": "panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4",
 "pitch": 0,
 "overlays": [
  "this.overlay_FFE9EC63_F13D_78B2_41EC_C41597F912A7",
  "this.overlay_E9C753FE_FA87_BFAD_41EA_43A43CF6D059",
  "this.popup_E8306E00_FA86_C855_41E7_47A15876D0FE",
  "this.overlay_08E28498_193C_A0C0_418E_0D6C733557E4",
  "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_tcap0",
  "this.popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0.42
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3CBD93_1DF0_FE2E_4167_C2C49A362872, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3CBD93_1DF0_FE2E_4167_C2C49A362872, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3CBD93_1DF0_FE2E_4167_C2C49A362872",
 "class": "PlayList"
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -87.82,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.28,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA",
 "image": {
  "levels": [
   {
    "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.17
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 25.39,
  "class": "PanoramaCameraPosition",
  "pitch": -0.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 29.27,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 31.71,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F",
 "image": {
  "levels": [
   {
    "url": "media/popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.39
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -142.5,
  "class": "PanoramaCameraPosition",
  "pitch": -9.79
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_E928EFC9_FA86_47D7_41D7_A54DF588676B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3C7D93_1DF0_FE2E_41A8_D464CF3C2F8D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3C7D93_1DF0_FE2E_41A8_D464CF3C2F8D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3C7D93_1DF0_FE2E_41A8_D464CF3C2F8D",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3D3D93_1DF0_FE2E_41B5_58B57A32D4EA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3D3D93_1DF0_FE2E_41B5_58B57A32D4EA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3D3D93_1DF0_FE2E_41B5_58B57A32D4EA",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_t.jpg",
 "partial": false,
 "id": "panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA",
 "pitch": 0,
 "overlays": [
  "this.overlay_FFE50313_EB36_4E52_41C4_FC5376FFC66E",
  "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -89.12,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.15,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_FE181AD8_F13B_799D_41D3_318756B75DCC",
 "image": {
  "levels": [
   {
    "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -5.9
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_t.jpg",
 "partial": false,
 "id": "panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC",
 "pitch": 0,
 "overlays": [
  "this.overlay_F9938157_EB36_4AD2_41EC_627232BD2454",
  "this.panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_tcap0"
 ]
},
{
 "id": "ImageResource_17A5EB89_1A5C_75F6_41AD_3160DFB24294",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_FE181AD8_F13B_799D_41D3_318756B75DCC_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3C5D93_1DF0_FE2E_41AA_96C91376B7D8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3C5D93_1DF0_FE2E_41AA_96C91376B7D8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3C5D93_1DF0_FE2E_41AA_96C91376B7D8",
 "class": "PlayList"
},
{
 "id": "ImageResource_14576B96_1A5C_751A_4170_31222AEC0DE6",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F_0_0.png",
   "width": 1288,
   "class": "ImageResourceLevel",
   "height": 721
  },
  {
   "url": "media/popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F_0_1.png",
   "width": 1023,
   "class": "ImageResourceLevel",
   "height": 573
  },
  {
   "url": "media/popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F_0_2.png",
   "width": 511,
   "class": "ImageResourceLevel",
   "height": 286
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_t.jpg",
 "partial": false,
 "id": "panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F",
 "pitch": 0,
 "overlays": [
  "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_tcap0",
  "this.overlay_03247A72_1A54_571A_41AA_BBDE1D57926F"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_t.jpg",
 "partial": false,
 "id": "panorama_D99C8827_D3DE_B886_41E2_CA836FF59804",
 "pitch": 0,
 "overlays": [
  "this.overlay_F585D37C_E5C4_DD73_41E5_B1D6173A3169",
  "this.overlay_0ED95198_16F3_A318_41B1_CF6D554A020B",
  "this.overlay_0CA239A8_1693_A331_419E_D972A6BA6924",
  "this.overlay_0A6DEC8A_1696_A1F1_41A7_3C7A57091C75",
  "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_tcap0",
  "this.popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566",
  "this.popup_10219C6D_1DF1_1EF5_41B2_8D5E512AEE29"
 ]
},
{
 "id": "ImageResource_1455AB95_1A5C_751E_41B2_FE2BDB60C99B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "id": "ImageResource_030F6F5B_1B63_7ACD_4185_819F92599F35",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08008494_1B63_2E5B_41A9_22F565413208_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_08008494_1B63_2E5B_41A9_22F565413208_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_08008494_1B63_2E5B_41A9_22F565413208_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "label": "1105(1)",
 "class": "Video",
 "thumbnailUrl": "media/video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA.mp4"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_t.jpg",
 "partial": false,
 "id": "panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96",
 "pitch": 0,
 "overlays": [
  "this.overlay_F78B4B82_EB16_DE2D_41E8_4ADE09669498",
  "this.overlay_E9215FAE_FA9A_47AC_41E9_65FB5A0650FB",
  "this.popup_E9D82766_FA9B_D8DC_41E4_FE588A225830",
  "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.41,
  "class": "PanoramaCameraPosition",
  "pitch": -1.85
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 68.33,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 14.41,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F",
 "image": {
  "levels": [
   {
    "url": "media/popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F_0_1.png",
    "width": 1023,
    "class": "ImageResourceLevel",
    "height": 573
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.63
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_t.jpg",
 "partial": false,
 "id": "panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB",
 "pitch": 0,
 "overlays": [
  "this.overlay_F742909C_E5DC_5BB3_41DA_D16DD4E2C88C",
  "this.overlay_FF924CE6_F134_B9B5_41D1_4352ED0FF39D",
  "this.popup_FE181AD8_F13B_799D_41D3_318756B75DCC",
  "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_tcap0"
 ]
},
{
 "id": "ImageResource_023D16E6_1A6C_DF3A_41B0_C41032670289",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0E0119B5_1A74_F51E_41B0_33909183FF21_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_t.jpg",
 "partial": false,
 "id": "panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE",
 "pitch": 0,
 "overlays": [
  "this.overlay_FC7E93C3_EB32_4E33_41C4_27EBD92D9FD0",
  "this.overlay_0DFBE9D8_195D_A040_41B7_E796C0B55B8C",
  "this.popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA",
  "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_t.jpg",
 "partial": false,
 "id": "panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954",
 "pitch": 0,
 "overlays": [
  "this.overlay_FF1C350C_F13F_6876_41E1_E008D3EE971F",
  "this.overlay_0B890393_1934_60C0_41A2_11C2D98A7457",
  "this.popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F",
  "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_tcap0"
 ]
},
{
 "id": "ImageResource_145E8B90_1A5C_7516_41B0_ADE654FC96F2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3CCD93_1DF0_FE2E_4192_D0AA63324B2F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3CCD93_1DF0_FE2E_4192_D0AA63324B2F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3CCD93_1DF0_FE2E_4192_D0AA63324B2F",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "1105",
 "class": "Video",
 "thumbnailUrl": "media/video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04.mp4"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_t.jpg",
 "partial": false,
 "id": "panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500",
 "pitch": 0,
 "overlays": [
  "this.overlay_F93DEFCC_EB12_5636_41C1_CD8AE3F61578",
  "this.overlay_091A5ABD_192D_E0C0_41A0_FD35B6BD0515",
  "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_camera",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_175A2F66_1DEF_FAF6_41B1_3415D079883F",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EE"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window434"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408",
 "thumbnailUrl": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_t.jpg",
 "pitch": 0,
 "hfovMax": 142,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FF2BCB98_F13F_5F9E_41DE_C3F305FD9985",
  "this.overlay_EB687BB0_FA8A_4FB5_41B9_BD1050B49C9B",
  "this.popup_EB5D9D2F_FA86_C8AC_41E9_A4424944E883",
  "this.panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 29.66,
  "class": "PanoramaCameraPosition",
  "pitch": -1.97
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 15.34,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 11.66,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_10219C6D_1DF1_1EF5_41B2_8D5E512AEE29",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.69,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D.mp4"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_t.jpg",
 "partial": false,
 "id": "panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9",
 "pitch": 0,
 "overlays": [
  "this.overlay_F74DBD39_E5CC_EAF5_41E8_0D8236354187",
  "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_tcap0"
 ]
},
{
 "id": "ImageResource_031D5F68_1B63_7ACB_41A5_676DA0235D09",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0865C50B_1B6D_2E4E_41A0_506356507CFC_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_0865C50B_1B6D_2E4E_41A0_506356507CFC_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0865C50B_1B6D_2E4E_41A0_506356507CFC_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 14.66,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 23.95,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26",
 "image": {
  "levels": [
   {
    "url": "media/popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.86
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_t.jpg",
 "partial": false,
 "id": "panorama_D99FFF11_D3DF_789A_4155_61A926145F2B",
 "pitch": 0,
 "overlays": [
  "this.overlay_EA6AB5C5_E5CD_A59C_41E9_4970F9AF82C6",
  "this.overlay_FF7045F2_F12D_EBAD_41EC_37F85A1140C4",
  "this.popup_FFEBA17B_F12D_6893_41E7_B96B36990C52",
  "this.panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -116.85,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.3,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9",
 "image": {
  "levels": [
   {
    "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -3.14
},
{
 "items": [
  {
   "media": "this.video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3C2D93_1DF0_FE2E_41A9_064A13EE3D9B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3C2D93_1DF0_FE2E_41A9_064A13EE3D9B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3C2D93_1DF0_FE2E_41A9_064A13EE3D9B",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 8.06,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB",
 "image": {
  "levels": [
   {
    "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.05
},
{
 "id": "ImageResource_033CAF4B_1B63_7ACD_4178_2F0CB6E99D70",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0833099E_1B63_2646_41A3_48702DDEFAE2_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_0833099E_1B63_2646_41A3_48702DDEFAE2_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0833099E_1B63_2646_41A3_48702DDEFAE2_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_t.jpg",
 "partial": false,
 "id": "panorama_D989690B_D3DF_B88E_41E6_E2D19291434B",
 "pitch": 0,
 "overlays": [
  "this.overlay_0DF77E5F_1697_A10F_41A5_63C824FB130F",
  "this.panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04",
   "start": "this.viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D0ADDC2_1DF0_FE2E_41BA_5C1383CA91A9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D0ADDC2_1DF0_FE2E_41BA_5C1383CA91A9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738VideoPlayer)",
   "player": "this.viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D0ADDC2_1DF0_FE2E_41BA_5C1383CA91A9",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_t.jpg",
 "partial": false,
 "id": "panorama_D990F61B_D3DF_488E_41E3_2FFE72711398",
 "pitch": 0,
 "overlays": [
  "this.overlay_F5218C42_E5C4_AA97_41EC_2D95108A4373",
  "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.89,
  "class": "PanoramaCameraPosition",
  "pitch": -0.22
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99C8827_D3DE_B886_41E2_CA836FF59804",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_t.jpg",
 "partial": false,
 "id": "panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE",
 "pitch": 0,
 "overlays": [
  "this.overlay_FF6EBD46_F13C_B8F2_41E9_62E99A75D5B4",
  "this.overlay_17BC5CB4_1934_A0C0_41A9_017EFD74692A",
  "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_tcap0",
  "this.popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7"
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_t.jpg",
 "partial": false,
 "id": "panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0",
 "pitch": 0,
 "overlays": [
  "this.overlay_FE04F734_EB32_5656_41E1_B6E915D5487B",
  "this.overlay_16307E25_19F4_A3C0_4189_0FFC62B554E0",
  "this.popup_0E0119B5_1A74_F51E_41B0_33909183FF21",
  "this.panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 70.18,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 21.01,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE",
 "image": {
  "levels": [
   {
    "url": "media/popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 571
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -9.13
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 56.93,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.91,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0FD586A9_16B2_A133_41A7_A810A38A8A54",
 "image": {
  "levels": [
   {
    "url": "media/popup_0FD586A9_16B2_A133_41A7_A810A38A8A54_0_1.jpg",
    "width": 903,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -5.46
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_t.jpg",
 "partial": false,
 "id": "panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33",
 "pitch": 0,
 "overlays": [
  "this.overlay_F46E0710_E5C4_66B3_41E2_49B130F86EB1",
  "this.panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648",
   "start": "this.viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D0E1DC2_1DF0_FE2E_41B3_E2BE35B7FA4B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D0E1DC2_1DF0_FE2E_41B3_E2BE35B7FA4B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7VideoPlayer)",
   "player": "this.viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D0E1DC2_1DF0_FE2E_41B3_E2BE35B7FA4B",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D990F61B_D3DF_488E_41E3_2FFE72711398",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_t.jpg",
 "partial": false,
 "id": "panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0",
 "pitch": 0,
 "overlays": [
  "this.overlay_E832EF47_E5CC_E69D_41E3_39C27BC30D01",
  "this.overlay_0F0A24C6_16B3_6170_41B1_68DE7112D128",
  "this.popup_0FD586A9_16B2_A133_41A7_A810A38A8A54",
  "this.overlay_0D1DA870_1691_6111_41B2_953B3F3BA195",
  "this.panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_tcap0",
  "this.popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 11.08,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 15.36,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46",
 "image": {
  "levels": [
   {
    "url": "media/popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 13.33
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_0369CF71_1B63_7ADD_41A2_EEA3FFAFA409",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_082622DB_1B6D_2BCE_4183_368029498619_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_082622DB_1B6D_2BCE_4183_368029498619_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_082622DB_1B6D_2BCE_4183_368029498619_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 25.98,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 21.82,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C",
 "image": {
  "levels": [
   {
    "url": "media/popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.94
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_t.jpg",
 "partial": false,
 "id": "panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53",
 "pitch": 0,
 "overlays": [
  "this.overlay_FFD7FAB6_EB32_3E55_41E7_E0856A5C6FCB",
  "this.overlay_F56EA542_FA8E_58D5_41D4_02D242A30785",
  "this.overlay_0D7384A7_195B_E0C0_4191_7FC651FE09E7",
  "this.popup_0A78B3DB_195B_A047_41B4_ACFD5C276417",
  "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_t.jpg",
 "partial": false,
 "id": "panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118",
 "pitch": 0,
 "overlays": [
  "this.overlay_F5A44B67_EB12_5EF3_41E3_8A42721F2151",
  "this.overlay_FE5E879C_F13D_5796_41E0_6231BB43D6EB",
  "this.popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB",
  "this.overlay_0E3EB150_1693_A365_4168_5CC694D063A0",
  "this.panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_tcap0",
  "this.popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6"
 ]
},
{
 "items": [
  {
   "media": "this.video_EE880E8D_FA86_C86F_41B7_2FB0968041F4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D3D0D93_1DF0_FE2E_41B3_FF4D374AEDAC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D3D0D93_1DF0_FE2E_41B3_FF4D374AEDAC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0D3D0D93_1DF0_FE2E_41B3_FF4D374AEDAC",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_t.jpg",
 "partial": false,
 "id": "panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1",
 "pitch": 0,
 "overlays": [
  "this.overlay_F79E809A_E5DC_5BB7_41A7_2C0048127D78",
  "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -11.41,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 9.27,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_E8306E00_FA86_C855_41E7_47A15876D0FE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.83,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E928EFC9_FA86_47D7_41D7_A54DF588676B.mp4"
 }
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_t.jpg",
 "partial": false,
 "id": "panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8",
 "pitch": 0,
 "overlays": [
  "this.overlay_F0FB61CC_EB12_CA35_41CC_E6C9682F79B3",
  "this.overlay_08FCB6E3_1934_A040_41B8_A01866C0D606",
  "this.popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46",
  "this.panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_tcap0"
 ]
},
{
 "id": "ImageResource_03673F78_1B63_7ACB_41A4_835C35D8CA0A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "id": "ImageResource_144F2B9B_1A5C_750A_41A3_438F0AC1772E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A",
   "start": "this.viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D099DC2_1DF0_FE2E_41AB_5201D4EFFA81, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D099DC2_1DF0_FE2E_41AB_5201D4EFFA81, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3BVideoPlayer)",
   "player": "this.viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3BVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D099DC2_1DF0_FE2E_41AB_5201D4EFFA81",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -4.26,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.05,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_FFEBA17B_F12D_6893_41E7_B96B36990C52",
 "image": {
  "levels": [
   {
    "url": "media/popup_FFEBA17B_F12D_6893_41E7_B96B36990C52_0_2.jpg",
    "width": 1023,
    "class": "ImageResourceLevel",
    "height": 511
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 16.22
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_03616F76_1B63_7AC7_41B1_099741B9CAB5",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 163.37,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.86,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0833099E_1B63_2646_41A3_48702DDEFAE2",
 "image": {
  "levels": [
   {
    "url": "media/popup_0833099E_1B63_2646_41A3_48702DDEFAE2_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.08
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_03030F5E_1B63_7AC7_4187_9DDF96117ABD",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951",
 "thumbnailUrl": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_t.jpg",
 "label": "Mengare",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_E9EAE870_FA9A_C8B5_41D4_B12CDC083A3D",
  "this.overlay_E9C4916C_FA9A_78AD_41D0_9333FBFFD07B",
  "this.popup_E98C3562_FA9A_B8D4_41D4_678F361AC33E",
  "this.overlay_E9048FE0_FA9A_47D4_41D4_CBF60C2B2D02",
  "this.popup_E9176232_FA86_58B5_41EA_9E0DF7C9D631",
  "this.panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0",
  "this.overlay_EE931016_FA8A_F87D_41ED_224E4C74458F",
  "this.overlay_0F0478C2_16FF_A169_41B2_252F29A3BAA1",
  "this.overlay_0EACCC42_16B2_A173_41A7_48CD0C1E7407",
  "this.overlay_0F671993_16B2_A312_41AC_62E6787929E7",
  "this.popup_0833099E_1B63_2646_41A3_48702DDEFAE2",
  "this.popup_08008494_1B63_2E5B_41A9_22F565413208"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -1.27,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 13.54,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_EB5D9D2F_FA86_C8AC_41E9_A4424944E883",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.1,
 "video": {
  "width": 2688,
  "class": "VideoResource",
  "height": 1512,
  "mp4Url": "media/video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A.mp4"
 }
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_t.jpg",
 "partial": false,
 "id": "panorama_D99D726C_D3DE_C88A_41DD_63906F861D34",
 "pitch": 0,
 "overlays": [
  "this.overlay_F5BC402C_E5C4_FA93_41DE_9F0F6B7E7002",
  "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_t.jpg",
 "partial": false,
 "id": "panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428",
 "pitch": 0,
 "overlays": [
  "this.overlay_FF686563_F134_A8B3_41E1_40D7E83EAC5C",
  "this.overlay_FF5E9D6F_F134_F8B3_41E5_5D3081B1340A",
  "this.overlay_FE4AFE12_F13B_B86D_41E8_D968CE13C1A4",
  "this.popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9",
  "this.popup_F7867AAA_FA7E_4855_41E4_BA26B328B9A2",
  "this.panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_t.jpg",
 "partial": false,
 "id": "panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C",
 "pitch": 0,
 "overlays": [
  "this.overlay_F43F412D_E5DC_7AED_41D9_D7BB76FE6E72",
  "this.panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_tcap0",
  "this.overlay_09FFF1C2_1B6F_263E_41A6_3CCBCDF1099F",
  "this.popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 137.79,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.47,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A78B3DB_195B_A047_41B4_ACFD5C276417",
 "image": {
  "levels": [
   {
    "url": "media/popup_0A78B3DB_195B_A047_41B4_ACFD5C276417_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 23.15
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_14599B8B_1A5C_750A_419B_0A88A7AF18B2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "id": "ImageResource_031BAF63_1B63_7AFD_41BB_283A2C3900F6",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 38.88,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_FE9AB29D_F13B_E997_41E5_AF56512F3821",
 "image": {
  "levels": [
   {
    "url": "media/popup_FE9AB29D_F13B_E997_41E5_AF56512F3821_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.6
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_17414F63_1DEF_FAEE_4180_9261D91D8F85",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window428"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.42,
  "class": "PanoramaCameraPosition",
  "pitch": -2.21
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_t.jpg",
 "partial": false,
 "id": "panorama_D9BF4292_D3DD_499E_41D9_547644832BC5",
 "pitch": 0,
 "overlays": [
  "this.overlay_F857876A_EB32_56FD_41E9_12E725C1B445",
  "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_175CCF65_1DEF_FAEA_417E_3C0B71345368",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3B"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window432"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC",
 "displayPlaybackBar": true,
 "buttonZoomOut": "this.IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomIn": "this.IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20",
 "buttonMoveUp": "this.IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319",
 "buttonMoveDown": "this.IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE",
 "buttonMoveLeft": "this.IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B",
 "mouseControlMode": "drag_rotation"
},
{
 "id": "ImageResource_17A33B87_1A5C_75FA_41B5_6105A0D89A46",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0FD586A9_16B2_A133_41A7_A810A38A8A54_0_0.jpg",
   "width": 1716,
   "class": "ImageResourceLevel",
   "height": 1944
  },
  {
   "url": "media/popup_0FD586A9_16B2_A133_41A7_A810A38A8A54_0_1.jpg",
   "width": 903,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0FD586A9_16B2_A133_41A7_A810A38A8A54_0_2.jpg",
   "width": 451,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_t.jpg",
 "partial": false,
 "id": "panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379",
 "pitch": 0,
 "overlays": [
  "this.overlay_FA39837E_EB12_CED5_41E5_3D5999228280",
  "this.overlay_17AED537_1937_A1CF_41B4_46DF26252D59",
  "this.panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0.88
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_144DAB9A_1A5C_750A_41AC_3B1B74CB1B42",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3376
  },
  {
   "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_t.jpg",
 "partial": false,
 "id": "panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5",
 "pitch": 0,
 "overlays": [
  "this.overlay_FD811FA1_EB3E_566E_41E3_46FC802F8199",
  "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.17,
  "class": "PanoramaCameraPosition",
  "pitch": -0.99
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "targetPitch": -0.99,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -179.17,
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_t.jpg",
 "partial": false,
 "id": "panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B",
 "pitch": 0,
 "overlays": [
  "this.overlay_FBB84747_EB1E_3632_41E7_E826FFBF7D52",
  "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E",
 "thumbnailUrl": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_t.jpg",
 "label": "Setigi",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_E651418A_EB15_CA3D_41E2_8643E2FFA3EE",
  "this.panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_tcap0",
  "this.overlay_0E3682A8_1B6C_EA4B_41AA_DB7204CFA79A",
  "this.popup_0865C50B_1B6D_2E4E_41A0_506356507CFC"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 33.4,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 10.2,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_E98C3562_FA9A_B8D4_41D4_678F361AC33E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.34,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04.mp4"
 }
},
{
 "label": "1105(4)",
 "class": "Video",
 "thumbnailUrl": "media/video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 15.22,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 19.07,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08008494_1B63_2E5B_41A9_22F565413208",
 "image": {
  "levels": [
   {
    "url": "media/popup_08008494_1B63_2E5B_41A9_22F565413208_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.73
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D99D726C_D3DE_C88A_41DD_63906F861D34",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_t.jpg",
 "partial": false,
 "id": "panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85",
 "pitch": 0,
 "overlays": [
  "this.overlay_F55BC07B_E5C7_FB75_41EA_55EE6A39FE72",
  "this.panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.43,
  "class": "PanoramaCameraPosition",
  "pitch": 2.6
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.16,
  "class": "PanoramaCameraPosition",
  "pitch": -2.79
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_t.jpg",
 "partial": false,
 "id": "panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182",
 "pitch": 0,
 "overlays": [
  "this.overlay_FD706008_EB3F_CA3D_41EC_F10D542D7687",
  "this.panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 62.03,
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 9.6,
 "autoplay": true,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_E9176232_FA86_58B5_41EA_9E0DF7C9D631",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.16,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_EE880E8D_FA86_C86F_41B7_2FB0968041F4.mp4"
 }
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_1372CF05_1DF1_1A2A_41A8_0CB7B7AED825",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window2999"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_t.jpg",
 "partial": false,
 "id": "panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87",
 "pitch": 0,
 "overlays": [
  "this.overlay_FC519292_EB36_4E2D_41DD_7B88B5DBD273",
  "this.overlay_FCB872A5_EB37_CE77_416E_1DC04C9E3C4A",
  "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_t.jpg",
 "partial": false,
 "id": "panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2",
 "pitch": 0,
 "overlays": [
  "this.overlay_FF1B72D1_F13F_E9EF_4170_CD95B46BC98C",
  "this.overlay_092731E9_19ED_A040_41A7_E139223FA7E2",
  "this.popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE",
  "this.panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_tcap0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 2.85,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 32.8,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7",
 "image": {
  "levels": [
   {
    "url": "media/popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.84
},
{
 "items": [
  {
   "media": "this.video_E928EFC9_FA86_47D7_41D7_A54DF588676B",
   "start": "this.viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0D0E6DC2_1DF0_FE2E_41BC_DAECB420EC46, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0D0E6DC2_1DF0_FE2E_41BC_DAECB420EC46, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EEVideoPlayer)",
   "player": "this.viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EEVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_0D0E6DC2_1DF0_FE2E_41BC_DAECB420EC46",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BF4292_D3DD_499E_41D9_547644832BC5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_t.jpg",
 "partial": false,
 "id": "panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922",
 "pitch": 0,
 "overlays": [
  "this.overlay_F96ACFF3_EB32_35D3_41D0_B5FB192D2BBB",
  "this.panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_tcap0"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_17406F64_1DEF_FAEA_41A2_CFE9960F3317",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window429"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 47.39,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 19.33,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0865C50B_1B6D_2E4E_41A0_506356507CFC",
 "image": {
  "levels": [
   {
    "url": "media/popup_0865C50B_1B6D_2E4E_41A0_506356507CFC_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.14
},
{
 "id": "ImageResource_03059F62_1B63_7AFF_41AA_4922A44E7155",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
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
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "1105(3)",
 "class": "Video",
 "thumbnailUrl": "media/video_E928EFC9_FA86_47D7_41D7_A54DF588676B_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E928EFC9_FA86_47D7_41D7_A54DF588676B",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E928EFC9_FA86_47D7_41D7_A54DF588676B.mp4"
 }
},
{
 "id": "ImageResource_17A14B85_1A5C_75FE_4178_37246492390A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_FFEBA17B_F12D_6893_41E7_B96B36990C52_0_0.jpg",
   "width": 3919,
   "class": "ImageResourceLevel",
   "height": 1957
  },
  {
   "url": "media/popup_FFEBA17B_F12D_6893_41E7_B96B36990C52_0_1.jpg",
   "width": 2047,
   "class": "ImageResourceLevel",
   "height": 1022
  },
  {
   "url": "media/popup_FFEBA17B_F12D_6893_41E7_B96B36990C52_0_2.jpg",
   "width": 1023,
   "class": "ImageResourceLevel",
   "height": 511
  },
  {
   "url": "media/popup_FFEBA17B_F12D_6893_41E7_B96B36990C52_0_3.jpg",
   "width": 511,
   "class": "ImageResourceLevel",
   "height": 255
  }
 ]
},
{
 "id": "ImageResource_14552B93_1A5C_751A_41B5_933749092FC2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE_0_0.png",
   "width": 1295,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 571
  },
  {
   "url": "media/popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 285
  }
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_t.jpg",
 "partial": false,
 "id": "panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6",
 "pitch": 0,
 "overlays": [
  "this.overlay_F5D5930A_FA8B_B854_41CF_1B9DD180A544",
  "this.panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 136,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_camera",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_175BDF66_1DEF_FAF6_41A1_D9099C3A74C1",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "modal": true,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "shadow": true,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonBackgroundOpacity": 0.3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonPaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 5,
 "data": {
  "name": "Window433"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
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
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#888888",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_t.jpg",
 "partial": false,
 "id": "panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC",
 "pitch": 0,
 "overlays": [
  "this.overlay_FEF5FC2C_F13B_58B6_41DD_7594E374D59C",
  "this.popup_FE9AB29D_F13B_E997_41E5_AF56512F3821",
  "this.panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_tcap0"
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 6,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB",
  "this.IconButton_E3DB9F13_F12D_D892_41D6_2694C9E417C5",
  "this.IconButton_E3DB8F13_F12D_D892_41D9_278A8E1F5EB4",
  "this.IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B",
  "this.Container_E3DBEF13_F12D_D892_41ED_4A3EFB19D588",
  "this.IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC",
  "this.IconButton_E3DB1F13_F12D_D892_41DD_5F53EE11F891",
  "this.IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8",
  "this.IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20"
 ],
 "id": "Container_E3DB4F13_F12D_D892_41E1_0FB7200C4679",
 "scrollBarColor": "#000000",
 "width": 383,
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "right": "34.96%",
 "borderSize": 0,
 "minHeight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "bottom": "3.1%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 20,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "gap": 4,
 "height": 152,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container27661"
 },
 "shadow": false,
 "propagateClick": false,
 "overflow": "hidden",
 "scrollBarWidth": 10
},
{
 "id": "ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391",
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "right": "0%",
 "itemThumbnailOpacity": 1,
 "itemMode": "normal",
 "itemPaddingRight": 3,
 "width": 141,
 "itemLabelFontFamily": "Arial",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "itemBorderRadius": 0,
 "horizontalAlign": "left",
 "paddingRight": 20,
 "minWidth": 20,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.33,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowOpacity": 0.27,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 5,
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "height": "67.149%",
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingLeft": 20,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "class": "ThumbnailList",
 "playList": "this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "16.3%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 13,
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 10,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": true,
 "itemLabelGap": 8,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailWidth": 75,
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailShadowColor": "#000000"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "minWidth": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "borderRadius": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent3519"
 },
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "minWidth": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage3520"
 },
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "backgroundColorRatios": []
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 20,
 "fontColor": "#FFFFFF",
 "minHeight": 0,
 "class": "CloseButton",
 "top": 10,
 "borderColor": "#000000",
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "gap": 5,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "borderRadius": 0,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingBottom": 5,
 "fontStyle": "normal",
 "iconWidth": 20,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "CloseButton3521"
 },
 "fontWeight": "normal",
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8",
 "width": 40,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8.png",
 "rollOverIconURL": "skin/IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8_rollover.png",
 "height": 40,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27672"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0",
 "id": "viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.41,
   "image": "this.AnimatedImageResource_17D47B3E_1A5C_750D_417E_C1116609B88D",
   "pitch": -17,
   "yaw": -179.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA65655A_E5C4_5AB7_41B4_5D227BFE58B1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.41,
   "yaw": -179.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.17,
   "image": "this.AnimatedImageResource_17C04B46_1A5C_757D_41B7_B4D8A7BD95CA",
   "pitch": -13.08,
   "yaw": 21.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF4D4C5F_EB32_7AD2_4132_102165C9135C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.17,
   "yaw": 21.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.08
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.39,
   "image": "this.AnimatedImageResource_17D5CB3D_1A5C_750F_41B0_3BC8863B8969",
   "pitch": -15.63,
   "yaw": -120.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E46551D8_EACA_13A5_41D8_553BBEF9F430",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.39,
   "yaw": -120.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.63
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499",
 "id": "viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_00D8F282_1A54_D7FA_41B7_D961EBDEC3EB",
   "pitch": -20.75,
   "yaw": -170.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_E5E8119A_EACA_73A5_41DA_1B4286801C81",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": -170.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.75
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.08,
   "image": "this.AnimatedImageResource_17F8CB4B_1A5C_750B_41A3_82307FA809AD",
   "pitch": -8.36,
   "yaw": -4.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1154460_EB32_CAEE_41C9_17EA2C06D47D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.08,
   "yaw": -4.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68",
 "id": "viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D482D83_1DF0_FE2E_418C_12FF137D0E68",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3515"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.57,
   "image": "this.AnimatedImageResource_17FB9B4B_1A5C_750B_41B5_CFDD644AD82D",
   "pitch": -13.37,
   "yaw": -15.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0A58BAB_EB12_3E72_41C7_FC0CE48C9C53",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.57,
   "yaw": -15.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_082622DB_1B6D_2BCE_4183_368029498619, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_0369CF71_1B63_7ADD_41A2_EEA3FFAFA409, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.58,
   "image": "this.AnimatedImageResource_17FA0B4C_1A5C_750D_4191_10DE1D1ED09A",
   "pitch": 10.65,
   "yaw": 41.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_16E1FDAB_1934_60C7_4180_BB5925225EED",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.58,
   "yaw": 41.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.65
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.21,
   "image": "this.AnimatedImageResource_00C2F291_1A54_D716_41B5_55B0F328E285",
   "pitch": -17.14,
   "yaw": 114.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFE9EC63_F13D_78B2_41EC_C41597F912A7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.21,
   "yaw": 114.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E8306E00_FA86_C855_41E7_47A15876D0FE, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_175A2F66_1DEF_FAF6_41B1_3415D079883F, this.video_E928EFC9_FA86_47D7_41D7_A54DF588676B, this.PlayList_0D0E6DC2_1DF0_FE2E_41BC_DAECB420EC46, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_1_HS_1_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "yaw": -11.41
  }
 ],
 "id": "overlay_E9C753FE_FA87_BFAD_41EA_43A43CF6D059",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.27,
   "yaw": -11.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_09D481E8_1B6C_E9CA_41A6_C859DA79DB26, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_03616F76_1B63_7AC7_41B1_099741B9CAB5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.95,
   "image": "this.AnimatedImageResource_17FF7B4F_1A5C_750B_41AE_C1DCFA9BA9AF",
   "pitch": -2.86,
   "yaw": 14.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08E28498_193C_A0C0_418E_0D6C733557E4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.95,
   "yaw": 14.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "width": 40,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147.png",
 "rollOverIconURL": "skin/IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147_rollover.png",
 "height": 40,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27668"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_17C14B45_1A5C_757F_41B1_092B13C4B76C",
   "pitch": -19.68,
   "yaw": -68.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFE50313_EB36_4E52_41C4_FC5376FFC66E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.54,
   "yaw": -68.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.68
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.2,
   "image": "this.AnimatedImageResource_17C1FB46_1A5C_757D_41AB_5EFD24F94B34",
   "pitch": -14.81,
   "yaw": -177.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F9938157_EB36_4AD2_41EC_627232BD2454",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.2,
   "yaw": -177.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.81
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.95,
   "image": "this.AnimatedImageResource_0CE94EF6_1B63_7BC6_4190_E09C639C6126",
   "pitch": -21.6,
   "yaw": 144.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_03247A72_1A54_571A_41AA_BBDE1D57926F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.95,
   "yaw": 144.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.04,
   "image": "this.AnimatedImageResource_17D4BB3D_1A5C_750F_41AD_C75FF6347BE9",
   "pitch": -20.85,
   "yaw": -14.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F585D37C_E5C4_DD73_41E5_B1D6173A3169",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.04,
   "yaw": -14.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_10219C6D_1DF1_1EF5_41B2_8D5E512AEE29, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_1372CF05_1DF1_1A2A_41A8_0CB7B7AED825, this.video_10614566_1DF1_2EF6_41BB_44B6A7B0C26D, this.PlayList_0D08BDC2_1DF0_FE2E_41B1_79AF0C13D349, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_1_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.69,
   "yaw": 15.34
  }
 ],
 "id": "overlay_0ED95198_16F3_A318_41B1_CF6D554A020B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.66,
   "yaw": 15.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.52,
   "image": "this.AnimatedImageResource_17D5DB3E_1A5C_750D_41B9_A2847A1339AF",
   "pitch": -15.63,
   "yaw": -101.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0CA239A8_1693_A331_419E_D972A6BA6924",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.52,
   "yaw": -101.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0F5F3406_1B63_2E47_41B3_2F9ADC3FC566, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_03030F5E_1B63_7AC7_4187_9DDF96117ABD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.45,
   "image": "this.AnimatedImageResource_00DB6283_1A54_D7FA_41B3_117C68488069",
   "pitch": 2.56,
   "yaw": 36.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A6DEC8A_1696_A1F1_41A7_3C7A57091C75",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.45,
   "yaw": 36.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.56
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.44,
   "image": "this.AnimatedImageResource_17FC7B4D_1A5C_750F_41AC_F949983DD9C7",
   "pitch": -21.52,
   "yaw": 59.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F78B4B82_EB16_DE2D_41E8_4ADE09669498",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.44,
   "yaw": 59.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E9D82766_FA9B_D8DC_41E4_FE588A225830, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_175BDF66_1DEF_FAF6_41A1_D9099C3A74C1, this.video_E8DFA4E1_FA9B_D9D4_4184_10CBAED8B648, this.PlayList_0D0E1DC2_1DF0_FE2E_41B3_E2BE35B7FA4B, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_1_HS_1_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 234
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.01,
   "yaw": 0.72
  }
 ],
 "id": "overlay_E9215FAE_FA9A_47AC_41E9_65FB5A0650FB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.38,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.01
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.04,
   "image": "this.AnimatedImageResource_17CA8B41_1A5C_7577_41B2_26C813ACE666",
   "pitch": -20.85,
   "yaw": -4.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F742909C_E5DC_5BB3_41DA_D16DD4E2C88C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.04,
   "yaw": -4.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FE181AD8_F13B_799D_41D3_318756B75DCC, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_17A5EB89_1A5C_75F6_41AD_3160DFB24294, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_1_HS_1_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.9,
   "yaw": -89.12
  }
 ],
 "id": "overlay_FF924CE6_F134_B9B5_41D1_4352ED0FF39D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.15,
   "yaw": -89.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_1_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.9
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.28,
   "image": "this.AnimatedImageResource_17C4DB49_1A5C_7577_41B3_567E9A6586EF",
   "pitch": -16.73,
   "yaw": 157.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC7E93C3_EB32_4E33_41C4_27EBD92D9FD0",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.28,
   "yaw": 157.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0AA47A24_195C_63C1_41B7_30AC5D2E2DDA, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_145E8B90_1A5C_7516_41B0_ADE654FC96F2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_1_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17,
   "yaw": -87.82
  }
 ],
 "id": "overlay_0DFBE9D8_195D_A040_41B7_E796C0B55B8C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -87.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.84,
   "image": "this.AnimatedImageResource_17FD7B4C_1A5C_750D_4167_0F84ACE85447",
   "pitch": -27.44,
   "yaw": -4.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF1C350C_F13F_6876_41E1_E008D3EE971F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.84,
   "yaw": -4.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0AD0053C_1954_61C0_41B0_0898F05F9E4F, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_14576B96_1A5C_751A_4170_31222AEC0DE6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_1_HS_1_0.png",
      "width": 243,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.63,
   "yaw": 68.33
  }
 ],
 "id": "overlay_0B890393_1934_60C0_41A2_11C2D98A7457",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.41,
   "yaw": 68.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.63
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_17CE4B44_1A5C_757D_41AC_CEE5AE1EE23C",
   "pitch": -25.64,
   "yaw": -65.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F93DEFCC_EB12_5636_41C1_CD8AE3F61578",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.5,
   "yaw": -65.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.64
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
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "MONUMEN PERESMIAN WISATA \u000d           BUKIT KAPUR SETIGI"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 96.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_1_HS_1_0.png",
      "width": 1625,
      "class": "ImageResourceLevel",
      "height": 244
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.21,
   "yaw": 36.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_091A5ABD_192D_E0C0_41A0_FD35B6BD0515",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 96.26,
   "yaw": 36.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_1_HS_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.21
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EE",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3518"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.27,
   "image": "this.AnimatedImageResource_0D8FB676_1A6C_DF1A_41A4_AA27646D4465",
   "pitch": -24.69,
   "yaw": -176.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF2BCB98_F13F_5F9E_41DE_C3F305FD9985",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.27,
   "yaw": -176.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_EB5D9D2F_FA86_C8AC_41E9_A4424944E883, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_175CCF65_1DEF_FAEA_417E_3C0B71345368, this.video_E8044565_FA86_78DC_41BB_B4D03C7C6F9A, this.PlayList_0D099DC2_1DF0_FE2E_41AB_5201D4EFFA81, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_1_HS_1_0.png",
      "width": 229,
      "class": "ImageResourceLevel",
      "height": 215
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1,
   "yaw": -1.27
  }
 ],
 "id": "overlay_EB687BB0_FA8A_4FB5_41B9_BD1050B49C9B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": -1.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.94,
   "image": "this.AnimatedImageResource_0CEA3EF6_1B63_7BC6_41BA_6A64147E12F8",
   "pitch": -25.48,
   "yaw": 172.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F74DBD39_E5CC_EAF5_41E8_0D8236354187",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.94,
   "yaw": 172.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.41,
   "image": "this.AnimatedImageResource_17D4FB3E_1A5C_750D_41AD_CB7D7F23C960",
   "pitch": -17,
   "yaw": -77.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6AB5C5_E5CD_A59C_41E9_4970F9AF82C6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.41,
   "yaw": -77.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FFEBA17B_F12D_6893_41E7_B96B36990C52, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_17A14B85_1A5C_75FE_4178_37246492390A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.05,
   "image": "this.AnimatedImageResource_17D74B3F_1A5C_750B_4183_A3ED76ECC678",
   "pitch": 16.22,
   "yaw": -4.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF7045F2_F12D_EBAD_41EC_37F85A1140C4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.05,
   "yaw": -4.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.85,
   "image": "this.AnimatedImageResource_0D9C265C_1A6C_DF0E_419D_118F886B708C",
   "pitch": -27.56,
   "yaw": 175.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DF77E5F_1697_A10F_41A5_63C824FB130F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.85,
   "yaw": 175.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.56
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738",
 "id": "viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.22,
   "image": "this.AnimatedImageResource_17C88B40_1A5C_7575_41A8_7A5C8893C96E",
   "pitch": -19,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5218C42_E5C4_AA97_41EC_2D95108A4373",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.22,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.03,
   "image": "this.AnimatedImageResource_00D65285_1A54_D7FE_41A7_6B94FE197227",
   "pitch": -18.86,
   "yaw": -176.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF6EBD46_F13C_B8F2_41E9_62E99A75D5B4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.03,
   "yaw": -176.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_09E4F5EE_1B6D_29C6_41A1_97BF3DEDF9C7, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_03016F5F_1B63_7AC5_4188_A6FF102C977A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.8,
   "image": "this.AnimatedImageResource_0CEDBEF6_1B63_7BC6_41A9_F180CFD3D6E7",
   "pitch": 0.84,
   "yaw": 2.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_17BC5CB4_1934_A0C0_41A9_017EFD74692A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 32.8,
   "yaw": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12,
   "image": "this.AnimatedImageResource_17C0EB46_1A5C_757D_41AA_7F5D44CF37DC",
   "pitch": -10.79,
   "yaw": -71.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE04F734_EB32_5656_41E1_B6E915D5487B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12,
   "yaw": -71.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0E0119B5_1A74_F51E_41B0_33909183FF21, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_023D16E6_1A6C_DF3A_41B0_C41032670289, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.37,
   "yaw": 22.69
  }
 ],
 "id": "overlay_16307E25_19F4_A3C0_4189_0FFC62B554E0",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 22.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.37
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_17CB1B40_1A5C_7575_41A6_02A3F78F95F3",
   "pitch": -19.2,
   "yaw": -6.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F46E0710_E5C4_66B3_41E2_49B130F86EB1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.2,
   "yaw": -6.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7",
 "id": "viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.07,
   "image": "this.AnimatedImageResource_17D61B3F_1A5C_750B_416C_AC63AED1AE3F",
   "pitch": -28.54,
   "yaw": 1.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E832EF47_E5CC_E69D_41E3_39C27BC30D01",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.07,
   "yaw": 1.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0FD586A9_16B2_A133_41A7_A810A38A8A54, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_17A33B87_1A5C_75FA_41B5_6105A0D89A46, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_1_0.png",
      "width": 212,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "yaw": 56.93
  }
 ],
 "id": "overlay_0F0A24C6_16B3_6170_41B1_68DE7112D128",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.54,
   "yaw": 56.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_09E7127B_1B6D_2ACD_41A9_1F5A55A7A74C, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_03059F62_1B63_7AFF_41AA_4922A44E7155, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.82,
   "image": "this.AnimatedImageResource_17D6BB3F_1A5C_750B_41AE_AE5187C13C5D",
   "pitch": -0.94,
   "yaw": 25.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D1DA870_1691_6111_41B2_953B3F3BA195",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.82,
   "yaw": 25.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.88,
   "image": "this.AnimatedImageResource_17C3AB47_1A5C_757B_4158_2937D251618C",
   "pitch": -9.09,
   "yaw": 27.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFD7FAB6_EB32_3E55_41E7_E0856A5C6FCB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.88,
   "yaw": 27.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_17C23B47_1A5C_757B_41AF_A7C88575FCEE",
   "pitch": -5.16,
   "yaw": -31.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F56EA542_FA8E_58D5_41D4_02D242A30785",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.91,
   "yaw": -31.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A78B3DB_195B_A047_41B4_ACFD5C276417, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_145C5B8E_1A5C_750A_41B3_F0B1BED6B531, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.15,
   "yaw": 137.79
  }
 ],
 "id": "overlay_0D7384A7_195B_E0C0_4191_7FC651FE09E7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": 137.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.15
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.68,
   "image": "this.AnimatedImageResource_17FFAB4F_1A5C_750B_4195_BD4E535C179F",
   "pitch": -26.44,
   "yaw": 125.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5A44B67_EB12_5EF3_41E3_8A42721F2151",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": 125.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FFE1BB0C_F13D_5876_41C4_6EA2674409AB, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_144DAB9A_1A5C_750A_41AC_3B1B74CB1B42, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05,
   "yaw": 8.06
  }
 ],
 "id": "overlay_FE5E879C_F13D_5796_41E0_6231BB43D6EB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_09D2AEB1_1B63_1A5D_4161_D40B2D53A3F6, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_03673F78_1B63_7ACB_41A4_835C35D8CA0A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.81,
   "image": "this.AnimatedImageResource_17FE8B50_1A5C_7515_41B8_0945D1726D40",
   "pitch": 0.15,
   "yaw": 31.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E3EB150_1693_A365_4168_5CC694D063A0",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.81,
   "yaw": 31.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.15
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.59,
   "image": "this.AnimatedImageResource_17CBEB41_1A5C_7577_41AB_D154FEFAB26B",
   "pitch": -14.81,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F79E809A_E5DC_5BB7_41A7_2C0048127D78",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.59,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.81
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_17FA9B4C_1A5C_750D_41AB_7EC41759DB15",
   "pitch": -22.8,
   "yaw": -11.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0FB61CC_EB12_CA35_41CC_E6C9682F79B3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": -11.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A8ED221_195C_A3C3_418E_340D8DD6AC46, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_1455AB95_1A5C_751E_41B2_FE2BDB60C99B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0_HS_1_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 303
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.33,
   "yaw": 11.08
  }
 ],
 "id": "overlay_08FCB6E3_1934_A040_41B8_A01866C0D606",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.36,
   "yaw": 11.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.33
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3B",
 "id": "viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3BVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0833099E_1B63_2646_41A3_48702DDEFAE2, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_033CAF4B_1B63_7ACD_4178_2F0CB6E99D70, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "image": "this.AnimatedImageResource_0D99764D_1A6C_DF0E_4190_8571930D4B1D",
   "pitch": 1.08,
   "yaw": 163.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9EAE870_FA9A_C8B5_41D4_B12CDC083A3D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 163.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E98C3562_FA9A_B8D4_41D4_678F361AC33E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_17414F63_1DEF_FAEE_4180_9261D91D8F85, this.video_E92D852D_FA9A_F8AF_41DB_D7A8AE84FB04, this.PlayList_0D0ADDC2_1DF0_FE2E_41BA_5C1383CA91A9, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_1_0.png",
      "width": 172,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.34,
   "yaw": 33.4
  }
 ],
 "id": "overlay_E9C4916C_FA9A_78AD_41D0_9333FBFFD07B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.2,
   "yaw": 33.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E9176232_FA86_58B5_41EA_9E0DF7C9D631, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_17406F64_1DEF_FAEA_41A2_CFE9960F3317, this.video_EE880E8D_FA86_C86F_41B7_2FB0968041F4, this.PlayList_0D085DC2_1DF0_FE2E_41BB_34855A6822EF, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_2_0.png",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.16,
   "yaw": 62.03
  }
 ],
 "id": "overlay_E9048FE0_FA9A_47D4_41D4_CBF60C2B2D02",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.6,
   "yaw": 62.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.16
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.51,
   "image": "this.AnimatedImageResource_05A03446_1B7D_EEC6_41B4_C7D39ADD06C5",
   "pitch": -27.45,
   "yaw": -26.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE931016_FA8A_F87D_41ED_224E4C74458F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.51,
   "yaw": -26.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.45
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
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "VIDEO 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_4_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.74,
   "yaw": 37.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0F0478C2_16FF_A169_41B2_252F29A3BAA1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.32,
   "yaw": 37.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_4_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.74
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
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "VIDEO 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_5_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4,
   "yaw": 66.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0EACCC42_16B2_A173_41A7_48CD0C1E7407",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.34,
   "yaw": 66.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_1_HS_5_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08008494_1B63_2E5B_41A9_22F565413208, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_030F6F5B_1B63_7ACD_4185_819F92599F35, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.07,
   "image": "this.AnimatedImageResource_0D9A2656_1A6C_DF1A_41A9_59B81E1653CF",
   "pitch": 1.73,
   "yaw": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F671993_16B2_A312_41AC_62E6787929E7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.07,
   "yaw": 15.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.37,
   "image": "this.AnimatedImageResource_17C96B40_1A5C_7575_4184_4F4863AC350C",
   "pitch": -26.41,
   "yaw": 1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5BC402C_E5C4_FA93_41DE_9F0F6B7E7002",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.37,
   "yaw": 1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.41
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.37,
   "image": "this.AnimatedImageResource_00D17287_1A54_D7FA_41B5_84B5D8121BDB",
   "pitch": -24.01,
   "yaw": -91.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF686563_F134_A8B3_41E1_40D7E83EAC5C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.37,
   "yaw": -91.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F7867AAA_FA7E_4855_41E4_BA26B328B9A2, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_175DDF65_1DEF_FAEA_4129_68C216697CB8, this.video_F4D32DC3_FA7E_CBDB_41DB_A43AE063C5EA, this.PlayList_0D094DC2_1DF0_FE2E_41BB_C59BDC208DFF, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0_HS_1_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.39,
   "yaw": 161.19
  }
 ],
 "id": "overlay_FF5E9D6F_F134_F8B3_41E5_5D3081B1340A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.21,
   "yaw": 161.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FE3AE616_F13C_E892_41C3_8B55FF95D2E9, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_14599B8B_1A5C_750A_419B_0A88A7AF18B2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_1_HS_2_0.png",
      "width": 224,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14,
   "yaw": -116.85
  }
 ],
 "id": "overlay_FE4AFE12_F13B_B86D_41E8_D968CE13C1A4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -116.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.68,
   "image": "this.AnimatedImageResource_0CE20F05_1B63_7A45_41BA_A4247B883F29",
   "pitch": -24.01,
   "yaw": -3.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F43F412D_E5DC_7AED_41D9_D7BB76FE6E72",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.68,
   "yaw": -3.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.01
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_09984B96_1B6F_3A47_41B5_B9C1C4523D4F, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_031BAF63_1B63_7AFD_41BB_283A2C3900F6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.71,
   "image": "this.AnimatedImageResource_05A91451_1B7D_EEDA_41B3_F3BE9AF0D896",
   "pitch": -0.39,
   "yaw": 29.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09FFF1C2_1B6F_263E_41A6_3CCBCDF1099F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.71,
   "yaw": 29.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39
  }
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D55DD83_1DF0_FE2E_419D_BFA6E87DA738",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3512"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.88,
   "image": "this.AnimatedImageResource_17CEDB45_1A5C_757F_4191_5C4526610826",
   "pitch": -22.22,
   "yaw": 21.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F857876A_EB32_56FD_41E9_12E725C1B445",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.88,
   "yaw": 21.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D362D93_1DF0_FE2E_41BC_A15BDB82AA3B",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3516"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC.png",
 "rollOverIconURL": "skin/IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DB2F13_F12D_D892_41DB_35BE6538A0BC_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27670"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB.png",
 "rollOverIconURL": "skin/IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DBAF13_F12D_D892_41D6_4D4A736223CB_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27662"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20.png",
 "rollOverIconURL": "skin/IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DB5F13_F12D_D892_41C1_3CCBAE426C20_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27673"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319.png",
 "rollOverIconURL": "skin/IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27667"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE.png",
 "rollOverIconURL": "skin/IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27669"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B",
 "width": 32,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B.png",
 "rollOverIconURL": "skin/IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B_rollover.png",
 "height": 32,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E3DBFF13_F12D_D892_41EC_5CC02C93053B_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27665"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "image": "this.AnimatedImageResource_17CF6B44_1A5C_757D_41AB_4C563E9A61BC",
   "pitch": -18.34,
   "yaw": 179.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA39837E_EB12_CED5_41E5_3D5999228280",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.49,
   "yaw": 179.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.34
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
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "TUGU BATU KAPUR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 55.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_1_HS_1_0.png",
      "width": 967,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.1,
   "yaw": 3.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_17AED537_1937_A1CF_41B4_46DF26252D59",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 55.3,
   "yaw": 3.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_1_HS_1_0_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.1
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.1,
   "image": "this.AnimatedImageResource_17C40B48_1A5C_7575_41B4_19B34F281EF6",
   "pitch": -16.97,
   "yaw": 2.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD811FA1_EB3E_566E_41E3_46FC802F8199",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.1,
   "yaw": 2.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.84,
   "image": "this.AnimatedImageResource_17CFFB44_1A5C_757D_41A7_ED8C77B81D88",
   "pitch": -22.63,
   "yaw": -45.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FBB84747_EB1E_3632_41E7_E826FFBF7D52",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.84,
   "yaw": -45.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.63
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_17CCEB43_1A5C_757B_41A1_72D1D0537DFD",
   "pitch": -8.82,
   "yaw": 11.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E651418A_EB15_CA3D_41E2_8643E2FFA3EE",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 11.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0865C50B_1B6D_2E4E_41A0_506356507CFC, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_031D5F68_1B63_7ACB_41A5_676DA0235D09, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.33,
   "image": "this.AnimatedImageResource_05ADB458_1B7D_EECA_4195_FE517640D73D",
   "pitch": 3.14,
   "yaw": 47.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E3682A8_1B6C_EA4B_41AA_DB7204CFA79A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.33,
   "yaw": 47.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.56,
   "image": "this.AnimatedImageResource_17D6EB3F_1A5C_750B_41B0_63607C523EE5",
   "pitch": -24.97,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F55BC07B_E5C7_FB75_41EA_55EE6A39FE72",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.56,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.39,
   "image": "this.AnimatedImageResource_17C59B48_1A5C_7575_4181_5A1C20C068FC",
   "pitch": -11.63,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD706008_EB3F_CA3D_41EC_F10D542D7687",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.39,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.63
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D409D83_1DF0_FE2E_41B2_DEDC9D50F499",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3514"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.52,
   "image": "this.AnimatedImageResource_17C6CB4A_1A5C_7575_417A_7CBEE35E1000",
   "pitch": -16.18,
   "yaw": -2.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC519292_EB36_4E2D_41DD_7B88B5DBD273",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.52,
   "yaw": -2.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.38,
   "image": "this.AnimatedImageResource_17F97B4A_1A5C_7575_4185_CE2C5191538E",
   "pitch": -21.88,
   "yaw": -104.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FCB872A5_EB37_CE77_416E_1DC04C9E3C4A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.38,
   "yaw": -104.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.88
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.56,
   "image": "this.AnimatedImageResource_17F81B4B_1A5C_750B_4191_4D2E423BD53E",
   "pitch": -29.15,
   "yaw": -0.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF1B72D1_F13F_E9EF_4170_CD95B46BC98C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.56,
   "yaw": -0.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08ACDA35_192C_A3C0_41A6_F7074D3702FE, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_14552B93_1A5C_751A_41B5_933749092FC2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_1_HS_1_0.png",
      "width": 359,
      "class": "ImageResourceLevel",
      "height": 285
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.13,
   "yaw": 70.18
  }
 ],
 "id": "overlay_092731E9_19ED_A040_41A7_E139223FA7E2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.01,
   "yaw": 70.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_1_HS_1_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.13
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "buttonPause": "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
 "viewerArea": "this.viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EE",
 "id": "viewer_uid0D397D93_1DF0_FE2E_417A_3C440FCDD4EEVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.17,
   "image": "this.AnimatedImageResource_17CE3B45_1A5C_757F_41B4_4B2BBD34D982",
   "pitch": -13.09,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F96ACFF3_EB32_35D3_41D0_B5FB192D2BBB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.17,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.09
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D5CCD83_1DF0_FE2E_4193_2A70161392A0",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3513"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.69,
   "image": "this.AnimatedImageResource_17C51B48_1A5C_7575_41B7_C12A407AD096",
   "pitch": -14.38,
   "yaw": 56.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5D5930A_FA8B_B854_41CF_1B9DD180A544",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.69,
   "yaw": 56.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.38
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid0D384D93_1DF0_FE2E_41BA_A0C396DE43F7",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "ViewerArea3517"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FE9AB29D_F13B_E997_41E5_AF56512F3821, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_144F2B9B_1A5C_750A_41A3_438F0AC1772E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_1_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.6,
   "yaw": 38.88
  }
 ],
 "id": "overlay_FEF5FC2C_F13B_58B6_41DD_7594E374D59C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 38.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.6
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 60,
 "id": "panorama_D9B0FF27_D3DE_F886_41E9_D744B00A7FAC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB9F13_F12D_D892_41D6_2694C9E417C5",
 "width": 40,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB9F13_F12D_D892_41D6_2694C9E417C5.png",
 "rollOverIconURL": "skin/IconButton_E3DB9F13_F12D_D892_41D6_2694C9E417C5_rollover.png",
 "height": 40,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "pressedIconURL": "skin/IconButton_E3DB9F13_F12D_D892_41D6_2694C9E417C5_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27663"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB8F13_F12D_D892_41D9_278A8E1F5EB4",
 "width": 40,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB8F13_F12D_D892_41D9_278A8E1F5EB4.png",
 "rollOverIconURL": "skin/IconButton_E3DB8F13_F12D_D892_41D9_278A8E1F5EB4_rollover.png",
 "height": 40,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "pressedIconURL": "skin/IconButton_E3DB8F13_F12D_D892_41D9_278A8E1F5EB4_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27664"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_E3DBDF13_F12D_D892_41E1_76E153C3B319",
  "this.IconButton_E3DBCF13_F12D_D892_41ED_CFDF2845E147",
  "this.IconButton_E3DB3F13_F12D_D892_41DF_823857E3FFAE"
 ],
 "id": "Container_E3DBEF13_F12D_D892_41ED_4A3EFB19D588",
 "scrollBarColor": "#000000",
 "width": 40,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minWidth": 20,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "gap": 4,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container27666"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "hidden",
 "propagateClick": false
},
{
 "transparencyActive": false,
 "id": "IconButton_E3DB1F13_F12D_D892_41DD_5F53EE11F891",
 "width": 40,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_E3DB1F13_F12D_D892_41DD_5F53EE11F891.png",
 "rollOverIconURL": "skin/IconButton_E3DB1F13_F12D_D892_41DD_5F53EE11F891_rollover.png",
 "height": 40,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "pressedIconURL": "skin/IconButton_E3DB1F13_F12D_D892_41DD_5F53EE11F891_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Button27671"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99BFAF8_D3DF_598A_41D4_725A7157F9E0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D47B3E_1A5C_750D_417E_C1116609B88D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BFCC30_D3DD_D89A_41BF_04E5D133EA27_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C04B46_1A5C_757D_41B7_B4D8A7BD95CA",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D98B9CB3_D3DF_599E_41DB_9B707EABE71E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D5CB3D_1A5C_750F_41B0_3BC8863B8969",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B1BF15_D3DF_789A_41A0_D15CA002B9AD_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_00D8F282_1A54_D7FA_41B7_D961EBDEC3EB",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0D504_D3D2_C87A_41B0_EE3677C26D8B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17F8CB4B_1A5C_750B_41A3_82307FA809AD",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FB9B4B_1A5C_750B_41B5_CFDD644AD82D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0C06B_D3D2_C88E_41E3_5DA46A37C593_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FA0B4C_1A5C_750D_4191_10DE1D1ED09A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_00C2F291_1A54_D716_41B5_55B0F328E285",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D98D2BA4_D3D3_BFBA_41D1_9BF790BC2BC4_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FF7B4F_1A5C_750B_41AE_C1DCFA9BA9AF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF55D6_D3DD_4B86_41E6_036BDA23C9BA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C14B45_1A5C_757F_41B1_092B13C4B76C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BFB8A3_D3DD_B9BE_41E6_BCD812335CAC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C1FB46_1A5C_757D_41AB_5EFD24F94B34",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B1918B_D3DF_4B8E_41BF_6FD839B2257F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0CE94EF6_1B63_7BC6_4190_E09C639C6126",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D4BB3D_1A5C_750F_41AD_C75FF6347BE9",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D5DB3E_1A5C_750D_41B9_A2847A1339AF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99C8827_D3DE_B886_41E2_CA836FF59804_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_00DB6283_1A54_D7FA_41B3_117C68488069",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B1540E_D3D3_4886_41DF_4765FF838A96_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FC7B4D_1A5C_750F_41AC_F949983DD9C7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9A792B7_D3DF_C986_41E6_C15D3990A4AB_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CA8B41_1A5C_7577_41B2_26C813ACE666",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF5179_D3DD_488A_41BC_F5E54B3D28BE_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C4DB49_1A5C_7577_41B3_567E9A6586EF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0EC5C_D3D2_D88A_41C6_C4C462922954_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FD7B4C_1A5C_750D_4167_0F84ACE85447",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B08C78_D3DD_588A_41BE_F6AFE7431500_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CE4B44_1A5C_757D_41AC_CEE5AE1EE23C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF53FD_D3DD_4F8A_41CF_E571E6C4E408_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0D8FB676_1A6C_DF1A_41A4_AA27646D4465",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B155A9_D3DF_4B8A_41DF_D0D1617CA5E9_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0CEA3EF6_1B63_7BC6_41BA_6A64147E12F8",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D4FB3E_1A5C_750D_41AD_CB7D7F23C960",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99FFF11_D3DF_789A_4155_61A926145F2B_1_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D74B3F_1A5C_750B_4183_A3ED76ECC678",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D989690B_D3DF_B88E_41E6_E2D19291434B_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0D9C265C_1A6C_DF0E_419D_118F886B708C",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D990F61B_D3DF_488E_41E3_2FFE72711398_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C88B40_1A5C_7575_41A8_7A5C8893C96E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_00D65285_1A54_D7FE_41A7_6B94FE197227",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99C5E2D_D3DE_F88A_41E5_6C5A4FA949EE_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0CEDBEF6_1B63_7BC6_41A9_F180CFD3D6E7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BFFF9C_D3DD_F78A_41DE_294BDFA016A0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C0EB46_1A5C_757D_41AA_7F5D44CF37DC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D98CE9C9_D3DF_BB8A_41E7_1B590D1A2A33_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CB1B40_1A5C_7575_41A6_02A3F78F95F3",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D61B3F_1A5C_750B_416C_AC63AED1AE3F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D991B290_D3DF_499A_41E3_B11F1575AFC0_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D6BB3F_1A5C_750B_41AE_AE5187C13C5D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C3AB47_1A5C_757B_4158_2937D251618C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BFD152_D3DD_C89E_41E6_031679E54C53_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C23B47_1A5C_757B_41AF_A7C88575FCEE",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FFAB4F_1A5C_750B_4195_BD4E535C179F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0ACA9_D3DE_D98A_41D4_8A2CD785F118_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FE8B50_1A5C_7515_41B8_0945D1726D40",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9A7CEC6_D3DF_F986_41C3_D1CD968DE1A1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CBEB41_1A5C_7577_41AB_D154FEFAB26B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0C8D1_D3D2_F99A_41D7_1BCDC737AFF8_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17FA9B4C_1A5C_750D_41AB_7EC41759DB15",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_0_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0D99764D_1A6C_DF0E_4190_8571930D4B1D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_05A03446_1B7D_EEC6_41B4_C7D39ADD06C5",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0B96B_D3DE_B88E_41D2_29ACA01E1951_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0D9A2656_1A6C_DF1A_41A9_59B81E1653CF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D99D726C_D3DE_C88A_41DD_63906F861D34_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C96B40_1A5C_7575_4184_4F4863AC350C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D997C55A_D3DF_C88E_4175_66EEE24FB428_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_00D17287_1A54_D7FA_41B5_84B5D8121BDB",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0CE20F05_1B63_7A45_41BA_A4247B883F29",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9920BAE_D3DF_DF86_41D3_37C8E7B5141C_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_05A91451_1B7D_EEDA_41B3_F3BE9AF0D896",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF4292_D3DD_499E_41D9_547644832BC5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CEDB45_1A5C_757F_4191_5C4526610826",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B08938_D3DE_B88A_41E6_31FB8D36E379_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CF6B44_1A5C_757D_41AB_4C563E9A61BC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF7D01_D3DD_587A_41D4_7DC251E6C6A5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C40B48_1A5C_7575_41B4_19B34F281EF6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B08599_D3DE_CB8A_41C1_D5538E84453B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CFFB44_1A5C_757D_41A7_ED8C77B81D88",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CCEB43_1A5C_757B_41A1_72D1D0537DFD",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0E10A_D3DE_C88E_41C1_A2B464AEDE0E_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_05ADB458_1B7D_EECA_4195_FE517640D73D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9A664B2_D3DE_C99E_41DB_8F3482742C85_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17D6EB3F_1A5C_750B_41B0_63607C523EE5",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF4930_D3DD_B89A_41C3_81D4170BE182_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C59B48_1A5C_7575_4181_5A1C20C068FC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C6CB4A_1A5C_7575_417A_7CBEE35E1000",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9B0CCFB_D3D2_B98E_41B0_CF8EE57F8F87_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17F97B4A_1A5C_7575_4185_CE2C5191538E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF388D_D3DD_598A_41E5_9F391003EFA2_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17F81B4B_1A5C_750B_4191_4D2E423BD53E",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF4ED3_D3DD_799E_41E2_4A2C3D805922_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17CE3B45_1A5C_757F_41B4_4B2BBD34D982",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9BF353B_D3DD_C88E_41E2_BA2736C8C1B6_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_17C51B48_1A5C_7575_41B7_C12A407AD096",
 "frameCount": 22,
 "frameDuration": 41
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_E3DB4F13_F12D_D892_41E1_0FB7200C4679",
  "this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.8,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_E9CCF87B_F15B_D892_41C3_AC174E4E3391_playlist,this.mainPlayList])",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "class": "Player",
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "downloadEnabled": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "shadow": false,
 "propagateClick": false,
 "buttonToggleMute": "this.IconButton_E3DB0F13_F12D_D892_41E7_C56B31DB2ED8",
 "overflow": "visible",
 "data": {
  "name": "Player450"
 }
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

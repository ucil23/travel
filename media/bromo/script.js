(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7202B0A9_62ED_F638_41AF_7F34CF3EC6C2",
  "this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C",
  "this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
  "this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
  "this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
  "this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
  "this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
  "this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
  "this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
  "this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
  "this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
  "this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
  "this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
  "this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
  "this.HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
  "this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19",
  "this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16",
  "this.Container_513BE56B_46AA_9412_41C3_3829F9217118",
  "this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197",
  "this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4",
  "this.Container_42848592_4C54_C73E_41AA_9D00359141D7",
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
 "buttonToggleMute": "this.IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -104.74,
  "class": "PanoramaCameraPosition",
  "pitch": 13.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_EA553615_F9DB_4F10_41CA_F672B6502E0F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/1/{row}_{column}.jpg",
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
 "label": "11",
 "hfovMin": "150%",
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
 "overlays": [
  "this.overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
  "this.overlay_E8966A22_F9AD_5217_419B_D3B00E036954",
  "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A084DD1_60F6_BBBB_419F_793758F073C9",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window469"
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
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "start": "this.viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DB7D3F3_60F5_6F8F_41AC_087A93D74DA1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DB7D3F3_60F5_6F8F_41AC_087A93D74DA1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289VideoPlayer)",
   "player": "this.viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DB7D3F3_60F5_6F8F_41AC_087A93D74DA1",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 167.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0.26
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
 "id": "panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/1/{row}_{column}.jpg",
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
 "label": "30",
 "hfovMin": "135%",
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
 "overlays": [
  "this.overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
  "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.35,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 4.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/1/{row}_{column}.jpg",
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
 "label": "4",
 "hfovMin": "150%",
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
 "overlays": [
  "this.overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
  "this.overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3",
  "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_49742A3A_507A_EC94_41D2_84D6E00FC003",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0/l/2/{row}_{column}.jpg",
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
 "label": "32",
 "hfovMin": "135%",
 "id": "panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221",
 "overlays": [
  "this.overlay_581B6E5A_40F2_55C8_41BC_1F4DD5EE4AE9",
  "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0/l/2/{row}_{column}.jpg",
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
 "label": "36",
 "hfovMin": "135%",
 "id": "panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D",
 "overlays": [
  "this.overlay_58593B8A_40F6_7348_4197_DA70E0622ECD",
  "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -43.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0.08
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
 "id": "panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0/l/2/{row}_{column}.jpg",
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
 "label": "19",
 "hfovMin": "135%",
 "id": "panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E",
 "overlays": [
  "this.overlay_50369097_40D2_4D58_41CD_A28355D24F13",
  "this.panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_tcap0",
  "this.overlay_5A8CB2D6_4BCC_F261_41CC_735BF987C639"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -169.37,
  "class": "PanoramaCameraPosition",
  "pitch": 9.1
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
 "id": "panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 12.75,
  "class": "PanoramaCameraPosition",
  "pitch": 10.48
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 99.01,
  "class": "PanoramaCameraPosition",
  "pitch": 5.93
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
 "id": "panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0/l/2/{row}_{column}.jpg",
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
 "label": "14",
 "hfovMin": "135%",
 "id": "panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F",
 "overlays": [
  "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_tcap0",
  "this.overlay_5728E8F5_459D_9DF1_41C3_3199E245B25B",
  "this.overlay_5700106B_459D_8C11_4180_FFBDDE03C329",
  "this.popup_5C8ACD0A_47BA_B412_41CC_EF852A6AF6B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_0/l/2/{row}_{column}.jpg",
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
 "label": "5",
 "hfovMin": "135%",
 "id": "panorama_49742A3A_507A_EC94_41D2_84D6E00FC003",
 "overlays": [
  "this.overlay_4B71969F_506A_A58C_41CD_3727F4A698F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -48.78,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5E59790D_46AD_BC11_41A8_1511C97999F2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 11.39,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.77,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4A89E_60FD_F9B6_41D5_29A802B8932C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4A89E_60FD_F9B6_41D5_29A802B8932C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4A89E_60FD_F9B6_41D5_29A802B8932C",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_6A6D902C_4957_94E7_41C9_A0A8BCE925DD",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "thumbnailUrl": "media/video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC_t.jpg",
 "id": "video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC",
 "width": 2688,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "DJI_0414",
 "class": "Video",
 "height": 1512,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 100.18,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 18.53,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.91
},
{
 "initialPosition": {
  "yaw": -45.15,
  "class": "PanoramaCameraPosition",
  "pitch": 10.95
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
 "id": "panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/1/{row}_{column}.jpg",
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
 "label": "16",
 "hfovMin": "120%",
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
 "overlays": [
  "this.overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
  "this.overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F",
  "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_tcap0",
  "this.overlay_451C4043_4BC7_0E66_41CC_1B25029E339E",
  "this.overlay_44250455_4BFD_3663_41B5_636627C23BB6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0/l/2/{row}_{column}.jpg",
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
 "label": "13",
 "hfovMin": "135%",
 "id": "panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3",
 "overlays": [
  "this.overlay_50AEA599_40D6_D748_41C8_258026EF29A3",
  "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3_t.jpg",
 "id": "video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "1001",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -169.57,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_FB933291_EF0F_BC03_41DB_FC2C048DC812",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 11.31,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.92
},
{
 "duration": 1000,
 "id": "effect_6A657027_4957_94E1_41AB_1C861075DC71",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "thumbnailUrl": "media/video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215_t.jpg",
 "id": "video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "1001 (3)",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 160.82,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5735A99B_494A_97A0_4174_E678E5F71A9F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_3.jpg",
    "width": 1023,
    "class": "ImageResourceLevel",
    "height": 684
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 9.4,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.83
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "levels": [
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_0.jpg",
   "width": 5107,
   "class": "ImageResourceLevel",
   "height": 3405
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/1/{row}_{column}.jpg",
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
 "label": "48",
 "hfovMin": "150%",
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
 "overlays": [
  "this.overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
  "this.overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9",
  "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/1/{row}_{column}.jpg",
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
 "label": "27",
 "hfovMin": "150%",
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
 "overlays": [
  "this.overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
  "this.overlay_E96BE402_F9AD_7617_41EC_AD197FB44158",
  "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_tcap0",
  "this.overlay_5B71CDB2_4BDD_F621_41AD_0B0B352D7720",
  "this.overlay_42482D66_5027_E4BC_41C4_D11B2212F861"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -49.65,
  "class": "PanoramaCameraPosition",
  "pitch": 6.25
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
 "id": "panorama_4974C404_507A_E47C_41BC_894D594BCD10_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB5389E_60FD_F9B6_41D0_80AC6356C18C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB5389E_60FD_F9B6_41D0_80AC6356C18C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB5389E_60FD_F9B6_41D0_80AC6356C18C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 164.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 6.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215",
   "start": "this.viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DB663F3_60F5_6F8F_41CD_AD71A05358B4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DB663F3_60F5_6F8F_41CD_AD71A05358B4, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27VideoPlayer)",
   "player": "this.viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DB663F3_60F5_6F8F_41CD_AD71A05358B4",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -2.99,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 11.59,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.3
},
{
 "initialPosition": {
  "yaw": -6.02,
  "class": "PanoramaCameraPosition",
  "pitch": -1.31
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_5CD2E566_5029_A4BC_41CF_B5F83D0A462C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 107.41,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5D927410_47BB_B40E_41D0_C61444B18853",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 7.48,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.44,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5C7C18DB_47BB_9C32_41C8_80298101B8ED.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 104.91,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": 2.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_EA558615_F9DB_4F10_41E3_4AAA34777955",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -162.03,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 2000,
 "showDuration": 2000,
 "id": "popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 15.71,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.24,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "levels": [
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_0.jpg",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -78.85,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": -3.91
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 29.97,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 7.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -21.05,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -1.3
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 168.3,
  "class": "PanoramaCameraPosition",
  "pitch": 13.21
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
 "id": "panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/1/{row}_{column}.jpg",
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
 "label": "7",
 "hfovMin": "150%",
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
 "overlays": [
  "this.overlay_E8903F24_F9AD_5213_4185_6991E358B22B",
  "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_tcap0",
  "this.overlay_54FAEF73_4595_94F2_41C2_7F6B7EE5873C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4974C404_507A_E47C_41BC_894D594BCD10",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0/l/2/{row}_{column}.jpg",
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
 "label": "26",
 "hfovMin": "135%",
 "id": "panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F",
 "overlays": [
  "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_tcap0",
  "this.overlay_5263A51F_466E_9431_41C8_9F2AB53907AA",
  "this.overlay_5263C7C4_466A_9416_41C4_A944415F6B96",
  "this.popup_5E59790D_46AD_BC11_41A8_1511C97999F2",
  "this.overlay_462892F5_50D9_9D9C_41BB_76B0BA59E8DB",
  "this.overlay_48E29B4B_50E6_6CF4_41C6_2EC87443A8CA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0/l/2/{row}_{column}.jpg",
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
 "label": "43",
 "hfovMin": "135%",
 "id": "panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012",
 "overlays": [
  "this.overlay_5BDFEAAC_40D2_FD48_41C9_FB1912228097",
  "this.overlay_5D7A7ADB_40D5_D2C8_41C3_DB73D4A6E68D",
  "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_t.jpg",
 "hfovMax": 130
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
 "id": "panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC",
   "start": "this.viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DC913F3_60F5_6F8F_41BF_71DA1F781D01, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DC913F3_60F5_6F8F_41BF_71DA1F781D01, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5VideoPlayer)",
   "player": "this.viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DC913F3_60F5_6F8F_41BF_71DA1F781D01",
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
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_5E58452B_47B5_F411_41AF_0D21118D349F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4889E_60FD_F9B6_41AB_8963810683C4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4889E_60FD_F9B6_41AB_8963810683C4, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4889E_60FD_F9B6_41AB_8963810683C4",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 105.86,
  "hfov": 115,
  "class": "PanoramaCameraPosition",
  "pitch": -1.96
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 3.18,
  "hfov": 113,
  "class": "PanoramaCameraPosition",
  "pitch": 11.46
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
 "id": "panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "RotationalCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 10,
 "automaticZoomSpeed": 10,
 "class": "RotationalCamera",
 "manualZoomSpeed": 1,
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera",
 "manualRotationSpeed": 1800
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A0FBDD1_60F6_BB8A_41C2_1B3D4D7160DA",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11D"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window465"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/1/{row}_{column}.jpg",
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
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
 "overlays": [
  "this.overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
  "this.overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
  "this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812",
  "this.overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53",
  "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -3.84,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -5.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": -323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera",
 "class": "PanoramaCamera"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
 "buttonZoomOut": "this.IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
 "buttonMoveUp": "this.IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "buttonMoveDown": "this.IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB",
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "buttonMoveLeft": "this.IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
 "class": "PanoramaPlayer",
 "buttonZoomIn": "this.IconButton_720280A9_62ED_F638_41B4_BE1FE291A440"
},
{
 "duration": 1000,
 "id": "effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -37.87,
  "hfov": 115,
  "class": "PanoramaCameraPosition",
  "pitch": 10.38
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/1/{row}_{column}.jpg",
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
 "label": "46",
 "hfovMin": "150%",
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
 "overlays": [
  "this.overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
  "this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3",
  "this.overlay_833CD5F5_9195_EA1A_41C0_2C2A6714CD83",
  "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4489E_60FD_F9B6_41D1_99D59DA17E25, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4489E_60FD_F9B6_41D1_99D59DA17E25, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4489E_60FD_F9B6_41D1_99D59DA17E25",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 116.85,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5E03848A_47B7_9412_41B0_4A9DF27C68D3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 10.84,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.65,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5E58452B_47B5_F411_41AF_0D21118D349F.mp4",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/1/{row}_{column}.jpg",
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
 "label": "28",
 "hfovMin": "130%",
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
 "overlays": [
  "this.overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
  "this.overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7",
  "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_tcap0",
  "this.overlay_53144BEC_494A_AB60_41D1_DA2376F3BCC6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/1/{row}_{column}.jpg",
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
 "label": "29",
 "hfovMin": "150%",
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
 "overlays": [
  "this.overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
  "this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
  "this.overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
  "this.overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20",
  "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_tcap0",
  "this.overlay_56239021_4957_74E1_417D_575E0D977ECE",
  "this.popup_5735A99B_494A_97A0_4174_E678E5F71A9F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/1/{row}_{column}.jpg",
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
 "label": "17",
 "hfovMin": "120%",
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
 "overlays": [
  "this.overlay_9C0C5EAF_8F30_B7A4_41DE_F146D75D55A5",
  "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_tcap0",
  "this.overlay_5AC0EF50_4BC7_3261_41D0_D11EA3E128AC",
  "this.overlay_447BBBD9_4BC7_1263_41CD_2E8CFADDC656"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0/l/2/{row}_{column}.jpg",
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
 "label": "34",
 "hfovMin": "135%",
 "id": "panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC",
 "overlays": [
  "this.overlay_57214C1B_40FD_B54F_41C2_033427A1D6A9",
  "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_tcap0",
  "this.overlay_6E8F4876_6068_CE2B_41C6_78082C474BE8",
  "this.popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -176.82,
  "class": "PanoramaCameraPosition",
  "pitch": 8.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_0.jpg",
   "width": 6024,
   "class": "ImageResourceLevel",
   "height": 4024
  },
  {
   "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_1.jpg",
   "width": 4095,
   "class": "ImageResourceLevel",
   "height": 2736
  },
  {
   "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_2.jpg",
   "width": 2047,
   "class": "ImageResourceLevel",
   "height": 1368
  },
  {
   "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_3.jpg",
   "width": 1023,
   "class": "ImageResourceLevel",
   "height": 684
  },
  {
   "url": "media/popup_5735A99B_494A_97A0_4174_E678E5F71A9F_0_4.jpg",
   "width": 511,
   "class": "ImageResourceLevel",
   "height": 342
  }
 ],
 "id": "ImageResource_6A8C0014_4957_94A7_41C5_51D6BA22C667",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0/l/2/{row}_{column}.jpg",
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
 "label": "25",
 "hfovMin": "135%",
 "id": "panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1",
 "overlays": [
  "this.overlay_55A40ED4_40F2_52D8_41CB_4D573968FF29",
  "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0/l/2/{row}_{column}.jpg",
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
 "label": "37",
 "hfovMin": "135%",
 "id": "panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06",
 "overlays": [
  "this.overlay_5846F6E7_40F5_F2F9_41B4_B2305A77869C",
  "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_73A9AEBD_6078_C219_41C5_AC50B9DEEA36",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -16.07,
  "class": "PanoramaCameraPosition",
  "pitch": 3.42
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
 "id": "panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0/l/2/{row}_{column}.jpg",
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
 "label": "45",
 "hfovMin": "135%",
 "id": "panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC",
 "overlays": [
  "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_tcap0",
  "this.overlay_738D5286_6068_42EB_41D7_019ED9289B11",
  "this.overlay_73D91906_6068_CFEB_41C7_EF1F4267CA30"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2_t.jpg",
 "id": "video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2",
 "width": 2688,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "DJI_0429",
 "class": "Video",
 "height": 1512,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "initialPosition": {
  "yaw": 7.38,
  "class": "PanoramaCameraPosition",
  "pitch": 3.54
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -85.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0.81
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
 "id": "panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -79.71,
  "class": "PanoramaCameraPosition",
  "pitch": 11.86
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
 "id": "panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04_t.jpg",
 "id": "video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
 "width": 1080,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "lv_0_20240725012539",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/1/{row}_{column}.jpg",
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
 "label": "9",
 "hfovMin": "150%",
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
 "overlays": [
  "this.overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
  "this.overlay_E8975959_F9AD_DE35_41D1_A668059F0D18",
  "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
 "hfovMax": 138
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0/l/2/{row}_{column}.jpg",
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
 "label": "38",
 "hfovMin": "135%",
 "id": "panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA",
 "overlays": [
  "this.overlay_59311A70_40EE_BDD8_41A1_AF94901AB502",
  "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_t.jpg",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A0CFDD1_60F6_BB8A_4187_16351FBF8C2C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window466"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -171.37,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5C8ACD0A_47BA_B412_41CC_EF852A6AF6B5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 9.09,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.3,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "initialPosition": {
  "yaw": 25.61,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0.52
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/1/{row}_{column}.jpg",
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
 "label": "10",
 "hfovMin": "150%",
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
 "overlays": [
  "this.overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8",
  "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_tcap0",
  "this.overlay_5740DD48_459B_741E_41C5_4468697D1519"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_554D18B8_4936_95E0_4197_ADCC4E72693C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FCF587F_60FD_F977_41BC_B3E00A0F69C6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FCF587F_60FD_F977_41BC_B3E00A0F69C6, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FCF587F_60FD_F977_41BC_B3E00A0F69C6",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -28.66,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 10.01,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.64
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/1/{row}_{column}.jpg",
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
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
 "overlays": [
  "this.overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
  "this.overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C",
  "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_tcap0",
  "this.overlay_5F95A7D1_47BA_9431_41D1_500975EE1264",
  "this.popup_5F1DD508_47BE_941E_41C2_0C2B1E0B9C0F",
  "this.overlay_5D8D2F45_47BA_9416_41CF_C143D515B2F4",
  "this.popup_5D927410_47BB_B40E_41D0_C61444B18853",
  "this.overlay_5C4C17E2_47AE_B413_41C3_0096F7A8CD51",
  "this.overlay_441B10BB_4BC3_0E27_41A3_B1F7DA133576",
  "this.overlay_5B2C80A6_4BC3_0E21_41D0_37F3DF096249"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -5.65,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 1.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_E0ACC507_EF04_C40F_41BB_E263F28DD758",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 8.75,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4B7D6C9E_505A_658C_41D3_AEB39EB23A77",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 10.3,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.02,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "duration": 1000,
 "id": "effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "thumbnailUrl": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945_t.jpg",
 "id": "video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
 "width": 1080,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "20240720_181204_534",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "duration": 1000,
 "id": "effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0/l/2/{row}_{column}.jpg",
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
 "label": "15",
 "hfovMin": "135%",
 "id": "panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08",
 "overlays": [
  "this.overlay_52BE9515_40DD_F758_41CF_8C0A2B5CDA56",
  "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 153.03,
  "class": "PanoramaCameraPosition",
  "pitch": 5.31
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
 "id": "panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_0.jpg",
   "width": 3816,
   "class": "ImageResourceLevel",
   "height": 2544
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/1/{row}_{column}.jpg",
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
 "label": "12",
 "hfovMin": "120%",
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
 "overlays": [
  "this.overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77",
  "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_tcap0",
  "this.overlay_542FDBF0_459A_9C0E_41C5_7C9B93E999AB",
  "this.overlay_5EE9A2E0_47B6_8C0E_41C4_F53709B603D0",
  "this.popup_5E03848A_47B7_9412_41B0_4A9DF27C68D3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
 "hfovMax": 139
},
{
 "initialPosition": {
  "yaw": 121.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0.72
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
 "id": "panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DB6F3F3_60F5_6F8F_4193_C26EB8993622, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DB6F3F3_60F5_6F8F_4193_C26EB8993622, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313VideoPlayer)",
   "player": "this.viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DB6F3F3_60F5_6F8F_4193_C26EB8993622",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0/l/2/{row}_{column}.jpg",
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
 "label": "31",
 "hfovMin": "135%",
 "id": "panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD",
 "overlays": [
  "this.overlay_57501E9C_40F2_5548_41BA_E2BAD57C886B",
  "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_tcap0",
  "this.overlay_5EB3C636_4C57_4566_41CD_BADE6B5309EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -19.29,
  "class": "PanoramaCameraPosition",
  "pitch": -0.06
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
 "id": "panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_camera",
 "class": "PanoramaCamera"
},
{
 "label": "lv_0_20240725012539",
 "hfovMin": 60,
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
 "loop": false,
 "partial": false,
 "hfov": 360,
 "class": "Video360",
 "vfov": 180,
 "thumbnailUrl": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_t.jpg",
 "pitch": 0,
 "hfovMax": 140,
 "video": [
  {
   "width": 1080,
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.m3u8",
   "framerate": 30,
   "type": "application/x-mpegurl",
   "class": "Video360Resource",
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg",
   "height": 1920
  },
  {
   "width": 1080,
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.mp4",
   "bitrate": 4665,
   "framerate": 30,
   "type": "video/mp4",
   "class": "Video360Resource",
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg",
   "height": 1920
  }
 ]
},
{
 "thumbnailUrl": "media/video_5E58452B_47B5_F411_41AF_0D21118D349F_t.jpg",
 "id": "video_5E58452B_47B5_F411_41AF_0D21118D349F",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "1001 (1)",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5E58452B_47B5_F411_41AF_0D21118D349F.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "duration": 1000,
 "id": "effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_5CD2F566_5029_A4BC_41C3_370175AF9F9F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/1/{row}_{column}.jpg",
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
 "label": "21",
 "hfovMin": "150%",
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
 "overlays": [
  "this.overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
  "this.overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E",
  "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_tcap0",
  "this.overlay_44706AD2_4BC7_7261_41BC_41787E8EB7C7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -65.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0.94
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
 "id": "panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -21.59,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_FBF6B71E_EF05_4401_41EC_66F81499F846",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 10.56,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.75
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -11.38,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_9E77805A_8F10_EAEC_41AD_8016F3A99543",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 16.17,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -25.48,
 "video": {
  "width": 1080,
  "mp4Url": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04.mp4",
  "class": "VideoResource",
  "height": 1920
 }
},
{
 "duration": 1000,
 "id": "effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_554D78B8_4936_95E0_41C4_2E29192368AD",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0/l/2/{row}_{column}.jpg",
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
 "label": "35",
 "hfovMin": "135%",
 "id": "panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C",
 "overlays": [
  "this.overlay_586F94B3_40F2_D558_41BE_9756D163DCF5",
  "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_tcap0",
  "this.overlay_47F403C5_50DB_A3FC_4199_1A58163E76AF",
  "this.popup_4B7D6C9E_505A_658C_41D3_AEB39EB23A77"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/1/{row}_{column}.jpg",
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
 "label": "1",
 "hfovMin": "150%",
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
 "overlays": [
  "this.overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
  "this.overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E",
  "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0",
  "this.overlay_4BB85698_45F5_F43F_41C6_0D2BA5CF2919"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
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
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BF6ADE0_60F6_BB8A_41C6_3550A01EA3FB",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window471"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0/l/2/{row}_{column}.jpg",
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
 "label": "39",
 "hfovMin": "135%",
 "id": "panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7",
 "overlays": [
  "this.overlay_5A30925B_40EE_CDC8_41B6_644A64AD5F76",
  "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0/l/2/{row}_{column}.jpg",
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
 "label": "20",
 "hfovMin": "135%",
 "id": "panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D",
 "overlays": [
  "this.overlay_55E386F8_40EE_B2C9_41C0_F9B0FF2E3C46",
  "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "end": "this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false, -1, this.effect_554D18B8_4936_95E0_4197_ADCC4E72693C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 0, 1); this.keepComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false); this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, true, -1, this.effect_554D78B8_4936_95E0_41C4_2E29192368AD, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "media": "this.panorama_49742A3A_507A_EC94_41D2_84D6E00FC003",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_camera"
  },
  {
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  {
   "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
  },
  {
   "media": "this.panorama_4974C404_507A_E47C_41BC_894D594BCD10",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4974C404_507A_E47C_41BC_894D594BCD10_camera"
  },
  {
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  {
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "end": "this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false, -1, this.effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 10, 11); this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false); this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true, -1, this.effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "media": "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_camera"
  },
  {
   "media": "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_camera"
  },
  {
   "media": "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_camera"
  },
  {
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "end": "this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false, -1, this.effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 15, 16); this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false); this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true, -1, this.effect_ED9D1309_F9DD_46F0_41DD_11622910FACC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "end": "this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_B475348D_A664_D525_41A5_A9D6A470E420, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 16, 17); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_B475448D_A664_D525_41D1_4B99DB627216, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "end": "this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false, -1, this.effect_6A628027_4957_94E1_41BE_67DF9446498C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 17, 18); this.keepComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false); this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, true, -1, this.effect_6A657027_4957_94E1_41AB_1C861075DC71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "media": "this.panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_camera"
  },
  {
   "media": "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D",
   "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_4B9EE465_475B_77EE_41C7_2743BA7962AB, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 19, 20); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_4B9D0465_475B_77EE_41BD_D0E49CA4F805, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_camera"
  },
  {
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false, -1, this.effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 23, 24); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true, -1, this.effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "media": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_camera"
  },
  {
   "media": "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_camera"
  },
  {
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "end": "this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false, -1, this.effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F, 'hideEffect', false); this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false, -1, this.effect_4B934468_475B_77E6_41B3_CF6FDE9ACE03, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true); this.keepComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 26, 27); this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false); this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true, -1, this.effect_EA558615_F9DB_4F10_41E3_4AAA34777955, 'showEffect', false); this.keepComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false); this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, true, -1, this.effect_4B936468_475B_77E6_41B1_9CBECA824634, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  {
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "end": "this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false, -1, this.effect_6A6D902C_4957_94E7_41C9_A0A8BCE925DD, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 27, 28); this.keepComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false); this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, true, -1, this.effect_6A6C702C_4957_94E7_41C2_D07A9489FE3B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "end": "this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false, -1, this.effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 28, 29); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true, -1, this.effect_EA553615_F9DB_4F10_41CA_F672B6502E0F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
  },
  {
   "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 29, 30); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
  },
  {
   "media": "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD",
   "end": "this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false, -1, this.effect_5CD2E566_5029_A4BC_41CF_B5F83D0A462C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 30, 31); this.keepComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false); this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, true, -1, this.effect_5CD2F566_5029_A4BC_41C3_370175AF9F9F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_camera"
  },
  {
   "media": "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_camera"
  },
  {
   "media": "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_camera"
  },
  {
   "media": "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_camera"
  },
  {
   "media": "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_camera"
  },
  {
   "media": "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_camera"
  },
  {
   "media": "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_camera"
  },
  {
   "media": "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_camera"
  },
  {
   "media": "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_camera"
  },
  {
   "media": "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_camera"
  },
  {
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "media": "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_camera"
  },
  {
   "media": "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_camera"
  },
  {
   "media": "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_camera"
  },
  {
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false, -1, this.effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 44, 45); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true, -1, this.effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 45, 46); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 48, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  }
 ],
 "id": "ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -14.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0.47
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
 "id": "panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/1/{row}_{column}.jpg",
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
 "label": "47",
 "hfovMin": "115%",
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
 "overlays": [
  "this.overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
  "this.overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
  "this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846",
  "this.overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C",
  "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4E89E_60FD_F9B6_41B4_E1E155527C28, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4E89E_60FD_F9B6_41B4_E1E155527C28, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4E89E_60FD_F9B6_41B4_E1E155527C28",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_4B936468_475B_77E6_41B1_9CBECA824634",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 44.02,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5F1DD508_47BE_941E_41C2_0C2B1E0B9C0F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "hfov": 5.11,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.7,
 "video": {
  "width": 2688,
  "mp4Url": "media/video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC.mp4",
  "class": "VideoResource",
  "height": 1512
 }
},
{
 "initialPosition": {
  "yaw": -18.17,
  "class": "PanoramaCameraPosition",
  "pitch": -0.18
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
 "id": "panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_5C7C18DB_47BB_9C32_41C8_80298101B8ED_t.jpg",
 "id": "video_5C7C18DB_47BB_9C32_41C8_80298101B8ED",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "1001 (2)",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_5C7C18DB_47BB_9C32_41C8_80298101B8ED.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6BF79DE0_60F6_BB8A_4199_B507C8E7852A",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window472"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/1/{row}_{column}.jpg",
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
 "label": "2",
 "hfovMin": "155%",
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
 "overlays": [
  "this.overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
  "this.overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382",
  "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/1/{row}_{column}.jpg",
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
 "label": "24",
 "hfovMin": "120%",
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
 "overlays": [
  "this.overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
  "this.overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
  "this.overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
  "this.overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C",
  "this.popup_9E77805A_8F10_EAEC_41AD_8016F3A99543",
  "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_tcap0",
  "this.overlay_44428326_4BC7_1221_419A_6D1630F6AD6D",
  "this.overlay_47936974_502A_EC9C_41C2_5F6E663B64DB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
 "hfovMax": 139
},
{
 "duration": 1000,
 "id": "effect_6A628027_4957_94E1_41BE_67DF9446498C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB5689E_60FD_F9B6_41C4_095F0801C4FC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB5689E_60FD_F9B6_41C4_095F0801C4FC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem",
   "camera": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera"
  }
 ],
 "id": "playList_6FB5689E_60FD_F9B6_41C4_095F0801C4FC",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_B475348D_A664_D525_41A5_A9D6A470E420",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "end": "this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false, -1, this.effect_554D18B8_4936_95E0_4197_ADCC4E72693C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false); this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, true, -1, this.effect_554D78B8_4936_95E0_41C4_2E29192368AD, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "media": "this.panorama_49742A3A_507A_EC94_41D2_84D6E00FC003",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_camera"
  },
  {
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  {
   "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
  },
  {
   "media": "this.panorama_4974C404_507A_E47C_41BC_894D594BCD10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4974C404_507A_E47C_41BC_894D594BCD10_camera"
  },
  {
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  {
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "end": "this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false, -1, this.effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false); this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true, -1, this.effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "media": "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_camera"
  },
  {
   "media": "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_camera"
  },
  {
   "media": "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_camera"
  },
  {
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "end": "this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false, -1, this.effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false); this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true, -1, this.effect_ED9D1309_F9DD_46F0_41DD_11622910FACC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "end": "this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_B475348D_A664_D525_41A5_A9D6A470E420, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_B475448D_A664_D525_41D1_4B99DB627216, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "end": "this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false, -1, this.effect_6A628027_4957_94E1_41BE_67DF9446498C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false); this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, true, -1, this.effect_6A657027_4957_94E1_41AB_1C861075DC71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "media": "this.panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_camera"
  },
  {
   "media": "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D",
   "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_4B9EE465_475B_77EE_41C7_2743BA7962AB, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_4B9D0465_475B_77EE_41BD_D0E49CA4F805, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_camera"
  },
  {
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false, -1, this.effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true, -1, this.effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "media": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_camera"
  },
  {
   "media": "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_camera"
  },
  {
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "end": "this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false, -1, this.effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F, 'hideEffect', false); this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false, -1, this.effect_4B934468_475B_77E6_41B3_CF6FDE9ACE03, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true); this.keepComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false); this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true, -1, this.effect_EA558615_F9DB_4F10_41E3_4AAA34777955, 'showEffect', false); this.keepComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false); this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, true, -1, this.effect_4B936468_475B_77E6_41B1_9CBECA824634, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  {
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "end": "this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false, -1, this.effect_6A6D902C_4957_94E7_41C9_A0A8BCE925DD, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false); this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, true, -1, this.effect_6A6C702C_4957_94E7_41C2_D07A9489FE3B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "end": "this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false, -1, this.effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true, -1, this.effect_EA553615_F9DB_4F10_41CA_F672B6502E0F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
  },
  {
   "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
  },
  {
   "media": "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD",
   "end": "this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false, -1, this.effect_5CD2E566_5029_A4BC_41CF_B5F83D0A462C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31); this.keepComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false); this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, true, -1, this.effect_5CD2F566_5029_A4BC_41C3_370175AF9F9F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_camera"
  },
  {
   "media": "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_camera"
  },
  {
   "media": "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_camera"
  },
  {
   "media": "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_camera"
  },
  {
   "media": "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_camera"
  },
  {
   "media": "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_camera"
  },
  {
   "media": "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_camera"
  },
  {
   "media": "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_camera"
  },
  {
   "media": "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_camera"
  },
  {
   "media": "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_camera"
  },
  {
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "media": "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_camera"
  },
  {
   "media": "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_camera"
  },
  {
   "media": "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_camera"
  },
  {
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false, -1, this.effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true, -1, this.effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0/l/2/{row}_{column}.jpg",
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
 "label": "44",
 "hfovMin": "135%",
 "id": "panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9",
 "overlays": [
  "this.overlay_5EF1C7EA_40D2_52CB_41BC_97E66FB48FA3",
  "this.panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_t.jpg",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A097DE0_60F6_BB8A_41C4_DFACEFBF9F26",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029B"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window470"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 91.46,
  "class": "PanoramaCameraPosition",
  "pitch": 2.13
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
 "id": "panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_5C7C18DB_47BB_9C32_41C8_80298101B8ED",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4189E_60FD_F9B6_41D7_33654229C16E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4189E_60FD_F9B6_41D7_33654229C16E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4189E_60FD_F9B6_41D7_33654229C16E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -171.42,
  "class": "PanoramaCameraPosition",
  "pitch": 7.72
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
 "id": "panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_camera",
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
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_B475448D_A664_D525_41D1_4B99DB627216",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.video_5E58452B_47B5_F411_41AF_0D21118D349F",
   "start": "this.viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DCAE3F3_60F5_6F8F_41D7_02DDD8836640, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DCAE3F3_60F5_6F8F_41D7_02DDD8836640, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11DVideoPlayer)",
   "player": "this.viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11DVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DCAE3F3_60F5_6F8F_41D7_02DDD8836640",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_6A6C702C_4957_94E7_41C2_D07A9489FE3B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -7.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_0/l/2/{row}_{column}.jpg",
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
 "label": "8",
 "hfovMin": "135%",
 "id": "panorama_4974C404_507A_E47C_41BC_894D594BCD10",
 "overlays": [
  "this.overlay_4A6225CF_5066_678C_41C5_02BCE6C73860"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/1/{row}_{column}.jpg",
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
 "label": "49",
 "hfovMin": "150%",
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
 "overlays": [
  "this.overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2",
  "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2",
   "start": "this.viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DC993F3_60F5_6F8F_41D3_3946602DAED3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DC993F3_60F5_6F8F_41D3_3946602DAED3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0VideoPlayer)",
   "player": "this.viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DC993F3_60F5_6F8F_41D3_3946602DAED3",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/1/{row}_{column}.jpg",
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
 "label": "6",
 "hfovMin": "150%",
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
 "overlays": [
  "this.overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
  "this.overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
  "this.overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
  "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_tcap0",
  "this.overlay_744049FD_6068_CE19_41D4_A9E7D9CB8620",
  "this.overlay_71300149_6069_FE79_41D3_408D15E37057"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/1/{row}_{column}.jpg",
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
 "label": "42",
 "hfovMin": "150%",
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
 "overlays": [
  "this.overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
  "this.overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
  "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_tcap0",
  "this.overlay_7306E139_6068_3E19_41D1_D9AEEFDFD7AD",
  "this.overlay_756CBB02_6068_43EB_41CE_20757449E4C2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
 "hfovMax": 130
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
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1500,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 4000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "initialPosition": {
  "yaw": -165.54,
  "class": "PanoramaCameraPosition",
  "pitch": 19.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_0/l/2/{row}_{column}.jpg",
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
 "label": "40",
 "hfovMin": "135%",
 "id": "panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A",
 "overlays": [
  "this.overlay_5A6A1770_40ED_D3D7_4190_7F2851CFB47A",
  "this.panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3",
   "start": "this.viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DB743F3_60F5_6F8F_41CC_5C6F03DE4CBE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DB743F3_60F5_6F8F_41CC_5C6F03DE4CBE, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029BVideoPlayer)",
   "player": "this.viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029BVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DB743F3_60F5_6F8F_41CC_5C6F03DE4CBE",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/1/{row}_{column}.jpg",
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
 "label": "23",
 "hfovMin": "150%",
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
 "overlays": [
  "this.overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
  "this.overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C",
  "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 56.4,
  "class": "PanoramaCameraPosition",
  "pitch": -7.04
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
 "id": "panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_4B9EE465_475B_77EE_41C7_2743BA7962AB",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -43.11,
  "class": "PanoramaCameraPosition",
  "pitch": 4.83
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_4B934468_475B_77E6_41B3_CF6FDE9ACE03",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_4B9D0465_475B_77EE_41BD_D0E49CA4F805",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 6.16,
  "class": "PanoramaCameraPosition",
  "pitch": 15.44
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_5C7C18DB_47BB_9C32_41C8_80298101B8ED",
   "start": "this.viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DC883F3_60F5_6F8F_41C2_605C4C3D2CFF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DC883F3_60F5_6F8F_41C2_605C4C3D2CFF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BEVideoPlayer)",
   "player": "this.viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BEVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6DC883F3_60F5_6F8F_41C2_605C4C3D2CFF",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/b/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0/l/2/{row}_{column}.jpg",
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
 "label": "41",
 "hfovMin": "135%",
 "id": "panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5",
 "overlays": [
  "this.panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_tcap0",
  "this.overlay_73CA9C8F_6069_C6F9_41B0_D96E2010A274",
  "this.overlay_729386B5_6068_C229_41CD_EECD26E707B1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_ED9D1309_F9DD_46F0_41DD_11622910FACC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6FB4089E_60FD_F9B6_41CD_45DBF32F6240, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6FB4089E_60FD_F9B6_41CD_45DBF32F6240, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_6FB4089E_60FD_F9B6_41CD_45DBF32F6240",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -158.29,
  "class": "PanoramaCameraPosition",
  "pitch": 7.89
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
 "id": "panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/1/{row}_{column}.jpg",
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
 "label": "50",
 "hfovMin": "135%",
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
 "overlays": [
  "this.overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E",
  "this.overlay_9CF6E23E_8F30_AEA5_41DE_8805144AAA8B",
  "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A0DFDD1_60F6_BB8A_4198_E5B984ED58C4",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window467"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6A0AFDD1_60F6_BB8A_41A5_1E9631234B6C",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
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
 "shadowVerticalLength": 0,
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
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BE"
 ],
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
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
  "name": "Window468"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/1/{row}_{column}.jpg",
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/1/{row}_{column}.jpg",
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
 "label": "3",
 "hfovMin": "140%",
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
 "overlays": [
  "this.overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
  "this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C",
  "this.overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6",
  "this.overlay_9D3DF091_8F13_AA7F_41B4_3D08DC5ECBC4",
  "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
 "hfovMax": 150
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
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
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
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
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#000000",
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
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_7202B0A9_62ED_F638_41AF_7F34CF3EC6C2",
 "backgroundOpacity": 0,
 "width": 382.93,
 "scrollBarVisible": "rollOver",
 "right": "34.96%",
 "children": [
  "this.IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
  "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
  "this.IconButton_720240A9_62ED_F638_41D4_DC15D6509E83",
  "this.IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
  "this.Container_720210A9_62ED_F638_4197_67B812528813",
  "this.IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
  "this.IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675",
  "this.IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
  "this.IconButton_720280A9_62ED_F638_41B4_BE1FE291A440"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "3.1%",
 "scrollBarWidth": 10,
 "height": 152.13,
 "minWidth": 20,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container27661"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C",
 "backgroundOpacity": 0.33,
 "width": 141.4,
 "itemBorderRadius": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "ThumbnailList",
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "itemThumbnailShadowHorizontalLength": 3,
 "height": "67.149%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.27,
 "rollOverItemLabelFontWeight": "bold",
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemLabelGap": 8,
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "bottom": "16.3%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
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
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
 "left": "1.77%",
 "width": 400,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "2.98%",
 "scrollBarWidth": 10,
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Komoditas Pertanian</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Pada umumnya masyarakat disekitar Taman Nasional Bromo Tengger Semeru (TNBTS) hidup pada sektor pertanian. Kondisi tanah di daerah ini memiliki tanah yang subur akibat aktivitas vulkanik yang terjadi, sehingga masyarakat yang tinggal di kawasan ini memanfaatkannya sebagai lahan pertanian. Uniknya lahan pertanian yang berada dikawasan ini terletak pada lereng-lereng yang cukup ekstrem. Komoditas pertanian yang ditanam di disekitar TNBTS berupa tanaman kentang, daun bawang, kubis, jagung, dan wortel. Komoditas kentang sendiri merupakan salah satu komoditas terbesar yang dihasilkan dari lahan pertanian disekitar TNBTS.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Pertanian"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
 "left": "1.77%",
 "width": 400,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "2.98%",
 "scrollBarWidth": 10,
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Aktivitas Keagamaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\">Sebagian besar penduduk asli Tengger menganut agama Hindu. Oleh karena itu, kalian dapat dengan mudah menemukan sejumlah Pura Hindu di sekitar wilayah Taman Nasional Bromo Tengger Semeru (TNBTS). Aktivitas keagamaan umat hindu untuk melakukan persembahyangan di pura-pura yang berada di kawasan TNBTS tak hanya dilakukan oleh penduduk asli Tengger, tetapi juga banyak berasal dari umat hindu yang berada di Bali. </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Hindu"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
 "left": "1.77%",
 "width": 400,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "2.98%",
 "scrollBarWidth": 10,
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Kawasan TNBTS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Taman Nasional Bromo Tengger Semeru merupakan satu-satunya kawasan konservasi di Indonesia yang memiliki lautan pasir seluas 10 km yang disebut Tengger, tempat dimana empat anak gunung berapi baru berada. Anak gunung berapi tersebut adalah Gunung Batok (2.470 m), Gunung Kursi (2.581 m), Gunung Watangan (2.661 m), dan Gunung Widodaren (2.650 m). Namun, dari deretan gunung tersebut, hanya Gunung Bromo lah satu-satunya gunung yang masih aktif.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Deskripsi"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
 "left": "1.77%",
 "width": 400,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "2.98%",
 "scrollBarWidth": 10,
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Daya Tarik Wisata</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Gunung Bromo di Jawa Timur, Kalian mungkin sudah sering mendengar cerita salah satu tempat wisata terkenal yang ada di Indonesia ini, bukan? Ya, satu-satunya gunung berapi aktif di kawasan Taman Nasional Bromo Tengger Semeru ini memang punya pemandangan dan suasana yang menakjubkan, karena hamparan kawah yang luas serta kabut yang menyejukkan. Bersama dengan padang pasir yang lapang, bukit-bukit yang mudah didaki, suhu di puncak yang dingin dan sejuk, tentu membuat banyak wisatawan berbondong-bondong mengunjungi tempat ini.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Wisata"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Ranu Pane 2"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
 "backgroundOpacity": 0.91,
 "width": 350,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pura Ulun Danu Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Pura Ulun Danu"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pos Jemplang</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Jemplang"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Penanjakan Bromo</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Penanjakan Bromo"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
 "backgroundOpacity": 0.91,
 "width": 350,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>View Gn. Batok dan Gn. Widodaren</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Batok Widodaren"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Kawah Bromo"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Savana Bromo</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Savana"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
 "backgroundOpacity": 0.91,
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Bukit Teletubbies</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Teletubies"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
 "backgroundOpacity": 0.91,
 "width": "18.416%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "0.98%",
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "3.65%",
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "height": "8.394%",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Aliran Lahar"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "shadowVerticalLength": 2,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19",
 "left": "1.77%",
 "width": 400,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.91,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "top": "2.97%",
 "scrollBarWidth": 10,
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Konservasi</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Konservasi lahan adalah upaya untuk menjaga dan memelihara kualitas serta fungsi lahan agar tetap berkelanjutan dan tidak mengalami penurunan. Ini melibatkan berbagai strategi dan tindakan untuk melindungi lahan dari kerusakan, degradasi, dan pencemaran. Tujuan utama dari konservasi lahan adalah untuk menjaga keberlanjutan ekosistem, meningkatkan produktivitas tanah, dan mengurangi dampak negatif terhadap lingkungan. Contohnya seperti Taman Nasional, Cagar Alam, Suaka Marga Satwa, Taman Hutan Raya, dan Kawasan Ekowisata. Setiap jenis kawasan konservasi ini memiliki tujuan spesifik dan metode pengelolaan yang berbeda, namun semuanya berfokus pada pelestarian sumber daya alam dan perlindungan keanekaragaman hayati.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Konservasi"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowHorizontalLength": 2
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16",
 "left": "0%",
 "children": [
  "this.Container_539143FB_473A_90DA_41BE_20935CC199E2",
  "this.Container_62F64D68_4157_F7C8_41BA_5CEEA561142E"
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
 "click": "this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "TNBTS"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_513BE56B_46AA_9412_41C3_3829F9217118",
 "left": "0%",
 "children": [
  "this.Container_5F24177D_5026_A48C_41C9_60C5D6211ED7",
  "this.Container_513B056B_46AA_9412_419C_C564BCE3B669"
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
 "click": "this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Danau Vulkanik"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197",
 "left": "0%",
 "children": [
  "this.Container_5C6E9D47_47B7_B411_41A2_27921D18435B",
  "this.Container_5C6E3D48_47B7_B41F_41C8_A60D424FDAAC"
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
 "click": "this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Halo"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4",
 "left": "0%",
 "children": [
  "this.Container_528F6C63_474D_77E9_41C7_2CFD7641DDD8",
  "this.Container_528FCC64_474D_77EF_41CE_0C8A6638673B"
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
 "click": "this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Agama"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_42848592_4C54_C73E_41AA_9D00359141D7",
 "left": "0%",
 "children": [
  "this.Container_5C6A5DCF_4C6D_4726_41A3_72861E046B6D",
  "this.Container_5CEBB60D_4C53_452A_41B9_FEDBB352FBF3",
  "this.Container_4284E592_4C54_C73E_41D2_54CCCBAF2B0D"
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
 "click": "this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Edelwise"
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
  "name": "UIComponent2029"
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
  "name": "ZoomImage2030"
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
  "name": "CloseButton2031"
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
 "id": "IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3.png",
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
   "hfov": 12.78,
   "yaw": 2.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.09
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
   "yaw": 2.86,
   "image": "this.AnimatedImageResource_679686F8_40B5_B2D7_41AD_7422E01E58BD",
   "pitch": -12.09,
   "hfov": 12.78,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 50.48,
 "bleaching": 0.7,
 "id": "overlay_E8966A22_F9AD_5217_419B_D3B00E036954",
 "yaw": 136.83
},
{
 "inertia": false,
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2025"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289",
 "id": "viewer_uid6FCED87F_60FD_F977_41B3_9CB9BABF1289VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.57,
   "yaw": 150.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.13
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
   "yaw": 150.64,
   "image": "this.AnimatedImageResource_3D766B56_2DDC_2A5C_41C6_CD8196F5D794",
   "pitch": -2.13,
   "hfov": 7.57,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 12.68,
   "yaw": -105.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.1
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
   "yaw": -105.1,
   "image": "this.AnimatedImageResource_3D45FB3B_2DDC_2BD4_41B2_13B6A8338872",
   "pitch": -6.1,
   "hfov": 12.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 37.59,
 "bleaching": 0.7,
 "id": "overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3",
 "yaw": -117.95
},
{
 "inertia": false,
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.16,
   "yaw": -16.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.08
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
   "yaw": -16.71,
   "image": "this.AnimatedImageResource_67820707_40B5_B339_41C7_C554FA5E5589",
   "pitch": -29.08,
   "hfov": 11.16,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_581B6E5A_40F2_55C8_41BC_1F4DD5EE4AE9",
 "data": {
  "label": "Arrow 02 Left-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 9.44,
   "yaw": -68.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.04
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
   "yaw": -68.31,
   "image": "this.AnimatedImageResource_67809708_40B5_B337_41C4_87D85E9014F8",
   "pitch": -39.04,
   "hfov": 9.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58593B8A_40F6_7348_4197_DA70E0622ECD",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.77,
   "yaw": 107.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.49
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
   "yaw": 107.2,
   "image": "this.AnimatedImageResource_679B26FA_40B5_B2CB_41CB_A42BDAD971A0",
   "pitch": -8.49,
   "hfov": 11.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_50369097_40D2_4D58_41CD_A28355D24F13",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 33.84,
   "yaw": 121.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0_HS_1_0_map.gif",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.65
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
      "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0_HS_1_0.png",
      "width": 614,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.65,
   "hfov": 33.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 121.99
  }
 ],
 "id": "overlay_5A8CB2D6_4BCC_F261_41CC_735BF987C639",
 "data": {
  "label": "Pura Luhur Poten Bromo"
 }
},
{
 "inertia": false,
 "id": "panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 10.5,
   "yaw": -10.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78
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
   "yaw": -10.74,
   "image": "this.AnimatedImageResource_4B61E3E1_475B_70E6_41AE_02DB13E2E9F7",
   "pitch": -6.78,
   "hfov": 10.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5728E8F5_459D_9DF1_41C3_3199E245B25B",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.09,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5C8ACD0A_47BA_B412_41CC_EF852A6AF6B5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A0CFDD1_60F6_BB8A_4187_16351FBF8C2C, this.video_5FF1FCBD_47BA_9476_41B2_B0640FEEAFC2, this.PlayList_6DC993F3_60F5_6F8F_41D3_3946602DAED3, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0_HS_2_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.3,
   "yaw": -171.37
  }
 ],
 "id": "overlay_5700106B_459D_8C11_4180_FFBDDE03C329",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.61,
   "yaw": 84.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.94
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
   "yaw": 84.83,
   "image": "this.AnimatedImageResource_735F8E30_6078_C227_41D6_A153C7E9C94C",
   "pitch": -13.94,
   "hfov": 11.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B71969F_506A_A58C_41CD_3727F4A698F7",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.65,
   "yaw": -42.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.87
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
   "yaw": -42.61,
   "image": "this.AnimatedImageResource_3D785B43_2DDC_2BB4_41B3_B52CFF220FA5",
   "pitch": -3.87,
   "hfov": 8.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 48.01,
 "bleaching": 0.7,
 "id": "overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F",
 "yaw": -75.67
},
{
 "inertia": false,
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 24.96,
   "yaw": 4.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_4_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.06
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_4_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.06,
   "hfov": 24.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 4.23
  }
 ],
 "id": "overlay_451C4043_4BC7_0E66_41CC_1B25029E339E",
 "data": {
  "label": "Gunung Batok"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.73,
   "yaw": 58.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_5_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.97
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_5_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.97,
   "hfov": 25.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 58.56
  }
 ],
 "id": "overlay_44250455_4BFD_3663_41B5_636627C23BB6",
 "data": {
  "label": "Gunung Widodaren"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.05,
   "yaw": -27.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.56
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
   "yaw": -27.44,
   "image": "this.AnimatedImageResource_679586F8_40B5_B2D7_4199_7E7250CA6B3D",
   "pitch": -8.56,
   "hfov": 9.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_50AEA599_40D6_D748_41C8_258026EF29A3",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "id": "IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27663"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6.png",
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
   "hfov": 6.84,
   "yaw": 99.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 99.74,
   "image": "this.AnimatedImageResource_3D6B3B58_2DDC_2A54_41AA_5EB354EE1B3B",
   "pitch": -38.55,
   "hfov": 6.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 34.57,
 "bleaching": 0.7,
 "id": "overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9",
 "yaw": -120.42
},
{
 "inertia": false,
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.66,
   "yaw": 106.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.06
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
   "yaw": 106.02,
   "image": "this.AnimatedImageResource_3D70FB55_2DDC_2A5C_4180_8F3B16ADBAD5",
   "pitch": -4.06,
   "hfov": 11.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 59.54,
 "bleaching": 0.7,
 "id": "overlay_E96BE402_F9AD_7617_41EC_AD197FB44158",
 "yaw": -107.79
},
{
 "inertia": false,
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 26.25,
   "yaw": -51.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_2_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_2_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02,
   "hfov": 26.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -51.04
  }
 ],
 "id": "overlay_5B71CDB2_4BDD_F621_41AD_0B0B352D7720",
 "data": {
  "label": "Ranu Pane"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.83,
   "yaw": -56.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -56.52,
   "image": "this.AnimatedImageResource_7327CE40_6078_C267_41C1_66C552C5B2A8",
   "pitch": 6.39,
   "hfov": 18.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_42482D66_5027_E4BC_41C4_D11B2212F861",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27",
 "id": "viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27VideoPlayer"
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 56.25,
 "bleaching": 0.7,
 "id": "overlay_E8903F24_F9AD_5213_4185_6991E358B22B",
 "yaw": -145.68
},
{
 "inertia": false,
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.85,
   "yaw": -115.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.96
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
   "yaw": -115.37,
   "image": "this.AnimatedImageResource_4B6993DB_475B_70DA_41A3_723DDD6E961A",
   "pitch": -18.96,
   "hfov": 11.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54FAEF73_4595_94F2_41C2_7F6B7EE5873C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "inertia": false,
 "id": "panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.39,
   "yaw": -48.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5E59790D_46AD_BC11_41A8_1511C97999F2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A097DE0_60F6_BB8A_41C4_DFACEFBF9F26, this.video_5F5700CF_46AD_8C11_41C2_29A7B53F81F3, this.PlayList_6DB743F3_60F5_6F8F_41CC_5C6F03DE4CBE, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_1_0.png",
      "width": 192,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.77,
   "yaw": -48.78
  }
 ],
 "id": "overlay_5263A51F_466E_9431_41C8_9F2AB53907AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.5,
   "yaw": -0.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37
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
   "yaw": -0.03,
   "image": "this.AnimatedImageResource_4B7AC3E9_475B_70E6_41C8_F54549FA9384",
   "pitch": -6.37,
   "hfov": 10.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5263C7C4_466A_9416_41C4_A944415F6B96",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.24,
   "yaw": -46.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_3_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.05
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
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_3_0.png",
      "width": 396,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.05,
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -46.43
  }
 ],
 "id": "overlay_462892F5_50D9_9D9C_41BB_76B0BA59E8DB",
 "data": {
  "label": "Lautan Pasir"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.95,
   "yaw": 1.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_4_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.83
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_4_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.83,
   "hfov": 29.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 1.67
  }
 ],
 "id": "overlay_48E29B4B_50E6_6CF4_41C6_2EC87443A8CA",
 "data": {
  "label": "Menuju Ranu Pane"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.51,
   "yaw": -7.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.47
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
   "yaw": -7.95,
   "image": "this.AnimatedImageResource_6785570A_40B5_B34B_41C8_9764BC3F260C",
   "pitch": -14.47,
   "hfov": 15.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5BDFEAAC_40D2_FD48_41C9_FB1912228097",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.34,
   "yaw": 69.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.83
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
   "yaw": 69.63,
   "image": "this.AnimatedImageResource_6784B70A_40B5_B34B_41BF_6DEDF9503591",
   "pitch": -17.83,
   "hfov": 16.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5D7A7ADB_40D5_D2C8_41C3_DB73D4A6E68D",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5",
 "id": "viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5VideoPlayer"
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11D",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2021"
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
   "hfov": 8.1,
   "yaw": -157.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72
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
   "yaw": -157.27,
   "image": "this.AnimatedImageResource_3D7F9B4A_2DDC_2BB4_41B7_D306D68D5B9F",
   "pitch": -4.72,
   "hfov": 8.1,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.31,
   "yaw": -169.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_2_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.92,
   "yaw": -169.57
  }
 ],
 "id": "overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.1,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 52.4,
 "bleaching": 0.7,
 "id": "overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53",
 "yaw": 107.18
},
{
 "inertia": false,
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "id": "IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27670"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27662"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27667"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27665"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_720280A9_62ED_F638_41B4_BE1FE291A440",
 "backgroundOpacity": 0,
 "width": 32,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27673"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.01,
   "yaw": -28.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36, null, null, 10000, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_4_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64,
   "yaw": -28.66
  }
 ],
 "id": "overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.97,
   "yaw": -168.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.98
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
   "yaw": -168.11,
   "image": "this.AnimatedImageResource_3D740B57_2DDC_2A5C_41B5_7EB0BB837207",
   "pitch": -26.98,
   "hfov": 7.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_833CD5F5_9195_EA1A_41C0_2C2A6714CD83",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 13.17,
   "yaw": 97.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.7
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
   "yaw": 97.24,
   "image": "this.AnimatedImageResource_3D77AB55_2DDC_2A5C_41B9_DA725FA8144B",
   "pitch": -14.7,
   "hfov": 13.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.09,
 "bleaching": 0.7,
 "id": "overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7",
 "yaw": 120.35
},
{
 "inertia": false,
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 25.91,
   "yaw": -40.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -40.75,
   "image": "this.AnimatedImageResource_7338FE40_6078_C267_41D5_F8BA840BAE44",
   "pitch": 1.38,
   "hfov": 25.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53144BEC_494A_AB60_41D1_DA2376F3BCC6",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.71,
   "yaw": -162.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BF6ADE0_60F6_BB8A_41C6_3550A01EA3FB, this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945, this.PlayList_6DB6F3F3_60F5_6F8F_4193_C26EB8993622, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24,
   "yaw": -162.03
  }
 ],
 "id": "overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": 125.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_1_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.79
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
   "yaw": 125.51,
   "image": "this.AnimatedImageResource_3D76DB56_2DDC_2A5C_41B2_1F5232E63E24",
   "pitch": -15.79,
   "hfov": 12.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 59.81,
 "bleaching": 0.7,
 "id": "overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20",
 "yaw": -128.93
},
{
 "inertia": false,
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 9.4,
   "yaw": 160.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5735A99B_494A_97A0_4174_E678E5F71A9F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6A8C0014_4957_94A7_41C5_51D6BA22C667, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_6_0.png",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "yaw": 160.82
  }
 ],
 "id": "overlay_56239021_4957_74E1_417D_575E0D977ECE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": 111.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.29
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
   "yaw": 111.03,
   "image": "this.AnimatedImageResource_3D7FBB44_2DDC_2BBC_41BA_1781098B7C6D",
   "pitch": -7.29,
   "hfov": 12.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9C0C5EAF_8F30_B7A4_41DE_F146D75D55A5",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 25.33,
   "yaw": 108.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_4_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.27
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_4_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.27,
   "hfov": 25.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 108.66
  }
 ],
 "id": "overlay_5AC0EF50_4BC7_3261_41D0_D11EA3E128AC",
 "data": {
  "label": "Gunung Batok"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.69,
   "yaw": 154.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_5_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.22
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
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_5_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.22,
   "hfov": 25.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 154.47
  }
 ],
 "id": "overlay_447BBBD9_4BC7_1263_41CD_2E8CFADDC656",
 "data": {
  "label": "Gunung Widodaren"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.7,
   "yaw": -110.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.4
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
   "yaw": -110.2,
   "image": "this.AnimatedImageResource_67818707_40B5_B339_41B2_CB45CACC17AF",
   "pitch": -21.4,
   "hfov": 14.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57214C1B_40FD_B54F_41C2_033427A1D6A9",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 18.53,
   "yaw": 100.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6F2B95A8_606B_C627_41B1_3EBBCA6A4F7F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_73A9AEBD_6078_C219_41C5_AC50B9DEEA36, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 100.18,
   "image": "this.AnimatedImageResource_733B7E40_6078_C267_41CB_65C7D98085E6",
   "pitch": 0.91,
   "hfov": 18.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E8F4876_6068_CE2B_41C6_78082C474BE8",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": -6.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.51
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
   "yaw": -6.42,
   "image": "this.AnimatedImageResource_679E3704_40B5_B33F_41CC_497B6165743D",
   "pitch": -18.51,
   "hfov": 12.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55A40ED4_40F2_52D8_41CB_4D573968FF29",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 13.56,
   "yaw": -48.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.04
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
   "yaw": -48.35,
   "image": "this.AnimatedImageResource_67800708_40B5_B337_418F_F495AC61AE96",
   "pitch": -25.04,
   "hfov": 13.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5846F6E7_40F5_F2F9_41B4_B2305A77869C",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 8.83,
   "yaw": 20.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0_HS_0_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.22
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
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0_HS_0_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.22,
   "yaw": 20.3
  }
 ],
 "id": "overlay_738D5286_6068_42EB_41D7_019ED9289B11",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.66,
   "yaw": 22.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0_HS_1_0_map.gif",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.88
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CDD93EC_2DEC_3A4C_41C2_DEC0152554EC_0_HS_1_0.png",
      "width": 743,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.88,
   "hfov": 35.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 22.86
  }
 ],
 "id": "overlay_73D91906_6068_CFEB_41C7_EF1F4267CA30",
 "data": {
  "label": "Menuju Penanjakan Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.64,
   "yaw": 175.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.43
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
   "yaw": 175.02,
   "image": "this.AnimatedImageResource_42A8CAF9_4C2F_42EA_41B6_0441DB4138F2",
   "pitch": -12.43,
   "hfov": 14.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.86,
 "bleaching": 0.7,
 "id": "overlay_E8975959_F9AD_DE35_41D1_A668059F0D18",
 "yaw": -110.54
},
{
 "inertia": false,
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.64,
   "yaw": 102.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.04
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
   "yaw": 102.23,
   "image": "this.AnimatedImageResource_6787B708_40B5_B337_41B4_315594F3F3DC",
   "pitch": -32.04,
   "hfov": 11.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59311A70_40EE_BDD8_41A1_AF94901AB502",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2022"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 50.21,
 "bleaching": 0.7,
 "id": "overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8",
 "yaw": 100.59
},
{
 "inertia": false,
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 10.82,
   "yaw": 31.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.3
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
   "yaw": 31.83,
   "image": "this.AnimatedImageResource_4B6A23DC_475B_70DE_41CB_10BB39A096AC",
   "pitch": -5.3,
   "hfov": 10.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5740DD48_459B_741E_41C5_4468697D1519",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.39,
   "yaw": 3.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.05
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
   "yaw": 3.36,
   "image": "this.AnimatedImageResource_4B63D3E2_475B_70EA_41C1_B1D77EA1FC9F",
   "pitch": -3.05,
   "hfov": 8.39,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 59.54,
 "bleaching": 0.7,
 "id": "overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C",
 "yaw": -134.15
},
{
 "inertia": false,
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 5.11,
   "yaw": 44.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5F1DD508_47BE_941E_41C2_0C2B1E0B9C0F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A0DFDD1_60F6_BB8A_4198_E5B984ED58C4, this.video_5FCC6306_47BF_8C12_41CB_9D05920E6BAC, this.PlayList_6DC913F3_60F5_6F8F_41BF_71DA1F781D01, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_3_0.png",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 28
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.7,
   "yaw": 44.02
  }
 ],
 "id": "overlay_5F95A7D1_47BA_9431_41D1_500975EE1264",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.48,
   "yaw": 107.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5D927410_47BB_B40E_41D0_C61444B18853, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A0AFDD1_60F6_BB8A_41A5_1E9631234B6C, this.video_5C7C18DB_47BB_9C32_41C8_80298101B8ED, this.PlayList_6DC883F3_60F5_6F8F_41C2_605C4C3D2CFF, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_4_0.png",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.44,
   "yaw": 107.41
  }
 ],
 "id": "overlay_5D8D2F45_47BA_9416_41CF_C143D515B2F4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.58,
   "yaw": -35.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -35.93,
   "image": "this.AnimatedImageResource_4B6403E4_475B_70EE_41BE_DE2016115A89",
   "pitch": 1.57,
   "hfov": 16.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C4C17E2_47AE_B413_41C3_0096F7A8CD51",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.45,
   "yaw": 120.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_6_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.8
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_6_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.8,
   "hfov": 23.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 120.91
  }
 ],
 "id": "overlay_441B10BB_4BC3_0E27_41A3_B1F7DA133576",
 "data": {
  "label": "Gunung Batok"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.78,
   "yaw": 48.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_7_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.91
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
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_7_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.91,
   "hfov": 25.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 48.71
  }
 ],
 "id": "overlay_5B2C80A6_4BC3_0E21_41D0_37F3DF096249",
 "data": {
  "label": "Gunung Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.2,
   "yaw": -87.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89
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
   "yaw": -87.84,
   "image": "this.AnimatedImageResource_6794B6F9_40B5_B2C9_41CF_D8327386D4B5",
   "pitch": -5.89,
   "hfov": 13.2,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52BE9515_40DD_F758_41CF_8C0A2B5CDA56",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
    "width": 2440,
    "class": "ImageResourceLevel",
    "height": 2440
   }
  ],
  "class": "ImageResource"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 48.29,
 "bleaching": 0.7,
 "id": "overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77",
 "yaw": 108.27
},
{
 "inertia": false,
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 11.91,
   "yaw": -9.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.39
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
   "yaw": -9.22,
   "image": "this.AnimatedImageResource_4B6B13DC_475B_70DE_41D1_5F33D2CFB558",
   "pitch": -13.39,
   "hfov": 11.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_542FDBF0_459A_9C0E_41C5_7C9B93E999AB",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 116.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5E03848A_47B7_9412_41B0_4A9DF27C68D3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A0FBDD1_60F6_BB8A_41C2_1B3D4D7160DA, this.video_5E58452B_47B5_F411_41AF_0D21118D349F, this.PlayList_6DCAE3F3_60F5_6F8F_41D7_02DDD8836640, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_4_0.png",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "yaw": 116.85
  }
 ],
 "id": "overlay_5EE9A2E0_47B6_8C0E_41C4_F53709B603D0",
 "data": {
  "label": "Image"
 }
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313",
 "id": "viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.84,
   "yaw": -163.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.02
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
   "yaw": -163.75,
   "image": "this.AnimatedImageResource_67826707_40B5_B339_41CF_7D2E0081189B",
   "pitch": -22.02,
   "hfov": 11.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57501E9C_40F2_5548_41BA_E2BAD57C886B",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 28.59,
   "yaw": -112.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -112.14,
   "image": "this.AnimatedImageResource_5C72D4F8_5029_A594_41C8_1F623965A0E1",
   "pitch": 4.72,
   "hfov": 28.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5EB3C636_4C57_4566_41CD_BADE6B5309EC",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.13,
   "yaw": -143.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23
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
   "yaw": -143.82,
   "image": "this.AnimatedImageResource_3D7EBB44_2DDC_2BBC_41B6_986D1ED07B77",
   "pitch": -8.23,
   "hfov": 9.13,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "bleachingDistance": 0.1,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 54.33,
 "bleaching": 0.7,
 "id": "overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E",
 "yaw": 173.62
},
{
 "inertia": false,
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 30.66,
   "yaw": 11.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0_HS_2_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.78
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
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0_HS_2_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.78,
   "hfov": 30.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 11.94
  }
 ],
 "id": "overlay_44706AD2_4BC7_7261_41BC_41787E8EB7C7",
 "data": {
  "label": "Aliran Lahar Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.18,
   "yaw": -66.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.46
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
   "yaw": -66.78,
   "image": "this.AnimatedImageResource_6780F707_40B5_B339_41C4_386EFA13336E",
   "pitch": -12.46,
   "hfov": 9.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_586F94B3_40F2_D558_41BE_9756D163DCF5",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 10.3,
   "yaw": 8.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4B7D6C9E_505A_658C_41D3_AEB39EB23A77, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6BF79DE0_60F6_BB8A_4199_B507C8E7852A, this.video_4C5B8A7B_505A_AC94_41B4_3B9A0B44A215, this.PlayList_6DB663F3_60F5_6F8F_41CD_AD71A05358B4, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.02,
   "yaw": 8.75
  }
 ],
 "id": "overlay_47F403C5_50DB_A3FC_4199_1A58163E76AF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.95,
   "yaw": 13.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.63
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
   "yaw": 13.09,
   "image": "this.AnimatedImageResource_3D470B39_2DDC_2BD4_41C0_D524A1322A27",
   "pitch": -7.63,
   "hfov": 12.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "bleachingDistance": 0.04,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 26.06,
 "bleaching": 0.58,
 "id": "overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E",
 "yaw": 31.68
},
{
 "inertia": false,
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 16.88,
   "yaw": -37.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -37.74,
   "image": "this.AnimatedImageResource_554B3BAE_45ED_7C12_41C0_33B7C3CFE30A",
   "pitch": 1.99,
   "hfov": 16.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4BB85698_45F5_F43F_41C6_0D2BA5CF2919",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FC5688E_60FD_F996_41C4_99DE38074313",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2027"
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
   "hfov": 15.82,
   "yaw": 138.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.77
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
   "yaw": 138.27,
   "image": "this.AnimatedImageResource_67873708_40B5_B337_41A9_C87DD865F410",
   "pitch": -22.77,
   "hfov": 15.82,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A30925B_40EE_CDC8_41B6_644A64AD5F76",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 14.19,
   "yaw": -175.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10
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
   "yaw": -175.54,
   "image": "this.AnimatedImageResource_679AB6FA_40B5_B2CB_41B9_06D1DAF6A6D1",
   "pitch": -10,
   "hfov": 14.19,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55E386F8_40EE_B2C9_41C0_F9B0FF2E3C46",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 9.21,
   "yaw": 70.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.39
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
   "yaw": 70.3,
   "image": "this.AnimatedImageResource_3D746B58_2DDC_2A54_41B2_CEB40E78CB2E",
   "pitch": -24.39,
   "hfov": 9.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.56,
   "yaw": -21.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_1_0.png",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.75,
   "yaw": -21.59
  }
 ],
 "id": "overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 35.39,
 "bleaching": 0.7,
 "id": "overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C",
 "yaw": -132.5
},
{
 "inertia": false,
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FB8888E_60FD_F996_4194_498ECC76EA27",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2028"
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
   "hfov": 13.58,
   "yaw": -151.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.99
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
   "yaw": -151.09,
   "image": "this.AnimatedImageResource_3D46AB3A_2DDC_2BD4_4199_B900BBB1A3A1",
   "pitch": -3.99,
   "hfov": 13.58,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 58.44,
 "bleaching": 0.7,
 "id": "overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382",
 "yaw": 126.67
},
{
 "inertia": false,
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 8.19,
   "yaw": -110.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.83
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
   "yaw": -110.9,
   "image": "this.AnimatedImageResource_3D7EFB4A_2DDC_2BB4_41BE_4C0BB5C24BDF",
   "pitch": -14.83,
   "hfov": 8.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.17,
   "yaw": -11.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_6FCF587F_60FD_F977_41BC_B3E00A0F69C6, 0, this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B); this.MainViewerVideoPlayer.play()",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabled": false,
 "items": [
  {
   "hfov": 16.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_4_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48,
   "yaw": -11.38
  }
 ],
 "id": "overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.17,
   "yaw": -11.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9E77805A_8F10_EAEC_41AD_8016F3A99543, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6A084DD1_60F6_BBBB_419F_793758F073C9, this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04, this.PlayList_6DB7D3F3_60F5_6F8F_41AC_087A93D74DA1, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_5_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48,
   "yaw": -11.38
  }
 ],
 "id": "overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 57.07,
 "bleaching": 0.7,
 "id": "overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C",
 "yaw": -161.07
},
{
 "inertia": false,
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 28.38,
   "yaw": -111.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_6_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.7
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_6_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.7,
   "hfov": 28.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -111.21
  }
 ],
 "id": "overlay_44428326_4BC7_1221_419A_6D1630F6AD6D",
 "data": {
  "label": "Menuju Lautan Pasir"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.39,
   "yaw": -7.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_7_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.78
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_7_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.78,
   "hfov": 25.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -7.79
  }
 ],
 "id": "overlay_47936974_502A_EC9C_41C2_5F6E663B64DB",
 "data": {
  "label": "Kawah Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.68,
   "yaw": -106.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92
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
   "yaw": -106.63,
   "image": "this.AnimatedImageResource_6785A70B_40B5_B349_41C8_A376DF80A4C3",
   "pitch": -4.92,
   "hfov": 13.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5EF1C7EA_40D2_52CB_41BC_97E66FB48FA3",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029B",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2026"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11D",
 "id": "viewer_uid6FD5A86F_60FD_F896_41C0_C85715D6F11DVideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": -76.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.14
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
   "yaw": -76.37,
   "image": "this.AnimatedImageResource_73523E30_6078_C227_41CE_A117FA441AB9",
   "pitch": -15.14,
   "hfov": 7.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4A6225CF_5066_678C_41C5_02BCE6C73860",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": 110.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
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
   "yaw": 110.48,
   "image": "this.AnimatedImageResource_3D6ABB5B_2DDC_2A54_41BC_BC952DF6C741",
   "pitch": -7.21,
   "hfov": 8.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "inertia": false,
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0",
 "id": "viewer_uid6FD4386F_60FD_F896_41D2_8BC27080B9E0VideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.74,
   "yaw": -0.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.4
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
   "yaw": -0.93,
   "image": "this.AnimatedImageResource_73501E30_6078_C227_41D1_64599DF8D4AD",
   "pitch": -12.4,
   "hfov": 8.74,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.59,
   "yaw": -28.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.66
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
   "yaw": -28.57,
   "image": "this.AnimatedImageResource_3D443B41_2DDC_2BB4_41BC_A19DE8C799B3",
   "pitch": -14.66,
   "hfov": 7.59,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 57.07,
 "bleaching": 0.7,
 "id": "overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
 "yaw": -115.48
},
{
 "inertia": false,
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 42.57,
   "yaw": -40.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_11_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.37
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_11_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.37,
   "hfov": 42.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -40.48
  }
 ],
 "id": "overlay_744049FD_6068_CE19_41D4_A9E7D9CB8620",
 "data": {
  "label": "Menuju Bromo via Malang"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.77,
   "yaw": 13.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_12_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_12_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21,
   "hfov": 29.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 13.01
  }
 ],
 "id": "overlay_71300149_6069_FE79_41D3_408D15E37057",
 "data": {
  "label": "Menuju Ranu Pane"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.99,
   "yaw": -9.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.83
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
   "yaw": -9.22,
   "image": "this.AnimatedImageResource_7BD7A3CE_6057_C27B_41C0_C2104DA5BD65",
   "pitch": -12.83,
   "hfov": 8.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.87,
   "yaw": 135.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.81
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
   "yaw": 135.83,
   "image": "this.AnimatedImageResource_3D754B57_2DDC_2A5C_41C0_F1F4320377E5",
   "pitch": 0.81,
   "hfov": 10.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 43.72,
   "yaw": 138.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_5_0_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.67
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_5_0.png",
      "width": 256,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.67,
   "hfov": 43.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 138.17
  }
 ],
 "id": "overlay_7306E139_6068_3E19_41D1_D9AEEFDFD7AD",
 "data": {
  "label": "Menuju Penanjakan Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.9,
   "yaw": -5.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_6_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_6_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72,
   "hfov": 34.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -5.59
  }
 ],
 "id": "overlay_756CBB02_6068_43EB_41CE_20757449E4C2",
 "data": {
  "label": "Menuju Kawah Bromo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.15,
   "yaw": 104.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.99
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
   "yaw": 104.02,
   "image": "this.AnimatedImageResource_6786C709_40B5_B349_41CA_CAFEAE11283F",
   "pitch": -27.99,
   "hfov": 15.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A6A1770_40ED_D3D7_4190_7F2851CFB47A",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "inertia": false,
 "id": "panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029B",
 "id": "viewer_uid6FC0D88E_60FD_F996_41B0_AFD69DB5029BVideoPlayer"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.39,
   "yaw": -3.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.77
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
   "yaw": -3.04,
   "image": "this.AnimatedImageResource_3D7F6B4A_2DDC_2BB4_41B8_9CBB8E33D0D4",
   "pitch": 8.77,
   "hfov": 9.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "bleachingDistance": 0.1,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.97,
 "bleaching": 0.7,
 "id": "overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C",
 "yaw": -134.43
},
{
 "inertia": false,
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "viewerArea": "this.viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BE",
 "id": "viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BEVideoPlayer"
},
{
 "inertia": false,
 "id": "panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
   "hfov": 14.21,
   "yaw": -178.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.67
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
   "yaw": -178.7,
   "image": "this.AnimatedImageResource_7BE893CE_6057_C27B_419E_C8FAD3E2D798",
   "pitch": -14.67,
   "hfov": 14.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73CA9C8F_6069_C6F9_41B0_D96E2010A274",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 48.98,
   "yaw": -167.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0_HS_1_0_map.gif",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37
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
   "image": {
    "levels": [
     {
      "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0_HS_1_0.png",
      "width": 832,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37,
   "hfov": 48.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -167.03
  }
 ],
 "id": "overlay_729386B5_6068_C229_41CD_EECD26E707B1",
 "data": {
  "label": "Menuju Bromo via Pasuruan"
 }
},
{
 "bleachingDistance": 0.1,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 44.17,
 "bleaching": 0.7,
 "id": "overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E",
 "yaw": -75.67
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.04,
   "yaw": -152.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
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
   "yaw": -152.4,
   "image": "this.AnimatedImageResource_3D6A5B5B_2DDC_2A54_41B2_8F244D0867A3",
   "pitch": -7.67,
   "hfov": 14.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9CF6E23E_8F30_AEA5_41DE_8805144AAA8B",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 60,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FC8886F_60FD_F896_41B3_E503E500E7B5",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2023"
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid6FC8787F_60FD_F977_41BE_EB52603351BE",
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
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
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
 "progressBorderColor": "#000000",
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
  "name": "ViewerArea2024"
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
   "hfov": 11.59,
   "yaw": -2.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84, null, null, 10000, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_1_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3,
   "yaw": -2.99
  }
 ],
 "id": "overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.2,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 34.29,
 "bleaching": 0.7,
 "id": "overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6",
 "yaw": -115.48
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.76,
   "yaw": -62.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.36
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
   "yaw": -62.21,
   "image": "this.AnimatedImageResource_3D459B3B_2DDC_2BD4_4191_7AF06F40DBB4",
   "pitch": -12.36,
   "hfov": 12.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9D3DF091_8F13_AA7F_41B4_3D08DC5ECBC4",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "inertia": false,
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_tcap0.png",
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
 "id": "IconButton_720240A9_62ED_F638_41D4_DC15D6509E83",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "iconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83.png",
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
 "id": "Container_720210A9_62ED_F638_4197_67B812528813",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
  "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
  "this.IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB"
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
  "name": "Container27666"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675",
 "backgroundOpacity": 0,
 "width": 40,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "iconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675.png",
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
 "id": "Container_539143FB_473A_90DA_41BE_20935CC199E2",
 "left": "10.05%",
 "children": [
  "this.Image_556627C4_495D_FBA0_41AA_7E4D2A9A11BB",
  "this.Container_53A343CD_473A_913E_41CE_E6752DCF1BCD"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "9.95%",
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
 "top": "8.73%",
 "verticalAlign": "top",
 "bottom": "15.53%",
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
 "shadowHorizontalLength": 0,
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
 "id": "Container_62F64D68_4157_F7C8_41BA_5CEEA561142E",
 "left": "10.04%",
 "children": [
  "this.IconButton_62F67D68_4157_F7C8_41CD_BD3334944500"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10.02%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "8.69%",
 "verticalAlign": "top",
 "bottom": "85.33%",
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
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5F24177D_5026_A48C_41C9_60C5D6211ED7",
 "left": "15.23%",
 "children": [
  "this.Container_5ED5573E_5026_A48C_41BB_3D18442804CD"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "14.21%",
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
 "top": "5.64%",
 "verticalAlign": "top",
 "bottom": "8.31%",
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
 "shadowHorizontalLength": 0,
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
 "id": "Container_513B056B_46AA_9412_419C_C564BCE3B669",
 "left": "15.36%",
 "children": [
  "this.IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "14.27%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.81%",
 "verticalAlign": "top",
 "bottom": "82.32%",
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
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5C6E9D47_47B7_B411_41A2_27921D18435B",
 "left": "10%",
 "children": [
  "this.Image_6D1D4777_48D5_9B61_41D0_E4CE4336E45C",
  "this.Container_5C6EAD47_47B7_B411_41BD_F74B3D5F2B5C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
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
 "shadowHorizontalLength": 0,
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
 "id": "Container_5C6E3D48_47B7_B41F_41C8_A60D424FDAAC",
 "left": "10%",
 "children": [
  "this.IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.98%",
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
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_528F6C63_474D_77E9_41C7_2CFD7641DDD8",
 "left": "29.94%",
 "children": [
  "this.Container_528F2C64_474D_77EF_41C8_3391432CE84F"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "30%",
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
 "top": "3.55%",
 "verticalAlign": "top",
 "bottom": "6.45%",
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
 "shadowHorizontalLength": 0,
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
 "id": "Container_528FCC64_474D_77EF_41CE_0C8A6638673B",
 "left": "29.99%",
 "children": [
  "this.IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "30.16%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "3.59%",
 "verticalAlign": "top",
 "bottom": "86.6%",
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
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5C6A5DCF_4C6D_4726_41A3_72861E046B6D",
 "left": "15.33%",
 "children": [
  "this.Container_5C776DA2_4C6D_471E_4193_038ACE99A2DC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "14.11%",
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
 "top": "5.64%",
 "verticalAlign": "top",
 "bottom": "8.31%",
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
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5CEBB60D_4C53_452A_41B9_FEDBB352FBF3",
 "left": "10.2%",
 "children": [
  "this.Image_5CCF45D2_4C53_473F_41D2_B455D6FA0E23",
  "this.Container_5CCF95D2_4C53_473F_41A8_262B35D5FAEC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "9.8%",
 "shadowOpacity": 0.3,
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
 "propagateClick": false,
 "minHeight": 1,
 "top": "5.07%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "4.93%",
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
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_4284E592_4C54_C73E_41D2_54CCCBAF2B0D",
 "left": "15.33%",
 "children": [
  "this.IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "14.14%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.69%",
 "verticalAlign": "top",
 "bottom": "87.41%",
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
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679686F8_40B5_B2D7_41AD_7422E01E58BD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D766B56_2DDC_2A5C_41C6_CD8196F5D794",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D45FB3B_2DDC_2BD4_41B2_13B6A8338872",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD21759_2DEC_3A57_41B1_A6B00AF60221_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_67820707_40B5_B339_41C7_C554FA5E5589",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD3FE16_2DEC_2DDC_41C2_8C69E90BE28D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_67809708_40B5_B337_41C4_87D85E9014F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD26636_2DEC_1DDC_41C4_6F19B32EB32E_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_679B26FA_40B5_B2CB_41CB_A42BDAD971A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CA75102_2DEC_F7B4_41A1_5DA033F97B2F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4B61E3E1_475B_70E6_41AE_02DB13E2E9F7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_49742A3A_507A_EC94_41D2_84D6E00FC003_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_735F8E30_6078_C227_41D6_A153C7E9C94C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D785B43_2DDC_2BB4_41B3_B52CFF220FA5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CA34936_2DEC_17DC_41BB_06EDA25596B3_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_679586F8_40B5_B2D7_4199_7E7250CA6B3D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_3D6B3B58_2DDC_2A54_41AA_5EB354EE1B3B",
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D70FB55_2DDC_2A5C_4180_8F3B16ADBAD5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_7327CE40_6078_C267_41C1_66C552C5B2A8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4B6993DB_475B_70DA_41A3_723DDD6E961A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CA34DCA_2DEC_6EB4_41C5_767D89A7EF4F_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4B7AC3E9_475B_70E6_41C8_F54549FA9384",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_6785570A_40B5_B34B_41C8_9764BC3F260C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2A754_2DEC_1A5C_41C5_1F3C32351012_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6784B70A_40B5_B34B_41BF_6DEDF9503591",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D7F9B4A_2DDC_2BB4_41B7_D306D68D5B9F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D740B57_2DDC_2A5C_41B5_7EB0BB837207",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D77AB55_2DDC_2A5C_41B9_DA725FA8144B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_7338FE40_6078_C267_41D5_F8BA840BAE44",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D76DB56_2DDC_2A5C_41B2_1F5232E63E24",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D7FBB44_2DDC_2BBC_41BA_1781098B7C6D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_67818707_40B5_B339_41B2_CB45CACC17AF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD20D17_2DEC_2FDC_4191_0570D54888DC_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_733B7E40_6078_C267_41CB_65C7D98085E6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2ACCC_2DEC_2E4D_41C5_884B971DB0B1_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679E3704_40B5_B33F_41CC_497B6165743D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD3F2D3_2DEC_1A54_41C2_48D4AF8D0F06_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_67800708_40B5_B337_418F_F495AC61AE96",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_42A8CAF9_4C2F_42EA_41B6_0441DB4138F2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD3D3DA_2DEC_1A54_414D_8223B36BDDEA_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_6787B708_40B5_B337_41B4_315594F3F3DC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4B6A23DC_475B_70DE_41CB_10BB39A096AC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4B63D3E2_475B_70EA_41C1_B1D77EA1FC9F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4B6403E4_475B_70EE_41BE_DE2016115A89",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CA84609_2DEC_3DB4_41B3_4DF6FD48FA08_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_6794B6F9_40B5_B2C9_41CF_D8327386D4B5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4B6B13DC_475B_70DE_41D1_5F33D2CFB558",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_67826707_40B5_B339_41CF_7D2E0081189B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2021C_2DEC_15CC_41C1_EBC96F6768AD_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_5C72D4F8_5029_A594_41C8_1F623965A0E1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D7EBB44_2DDC_2BBC_41B6_986D1ED07B77",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD217C7_2DEC_7ABC_41B6_542D3B46755C_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6780F707_40B5_B339_41C4_386EFA13336E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D470B39_2DDC_2BD4_41C0_D524A1322A27",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_554B3BAE_45ED_7C12_41C0_33B7C3CFE30A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD229CB_2DED_F6B4_41BC_FC9E23D63AE7_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_67873708_40B5_B337_41A9_C87DD865F410",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD22BB5_2DEC_6ADC_4198_6C2D9164F33D_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679AB6FA_40B5_B2CB_41B9_06D1DAF6A6D1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_3D746B58_2DDC_2A54_41B2_CEB40E78CB2E",
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D46AB3A_2DDC_2BD4_4199_B900BBB1A3A1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_3D7EFB4A_2DDC_2BB4_41BE_4C0BB5C24BDF",
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD296FF_2DEC_1A4C_41B3_E8DD648BD1D9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_6785A70B_40B5_B349_41C8_A376DF80A4C3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4974C404_507A_E47C_41BC_894D594BCD10_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_73523E30_6078_C227_41CE_A117FA441AB9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_3D6ABB5B_2DDC_2A54_41BC_BC952DF6C741",
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_73501E30_6078_C227_41D1_64599DF8D4AD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D443B41_2DDC_2BB4_41BC_A19DE8C799B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_7BD7A3CE_6057_C27B_41C0_C2104DA5BD65",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D754B57_2DDC_2A5C_41C0_F1F4320377E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD24FB4_2DED_EADC_419D_FD1AD9615C2A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6786C709_40B5_B349_41CA_CAFEAE11283F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D7F6B4A_2DDC_2BB4_41B8_9CBB8E33D0D4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD2751D_2DEC_1FCC_41BA_D061ABA789E5_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_7BE893CE_6057_C27B_419E_C8FAD3E2D798",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D6A5B5B_2DDC_2A54_41B2_8F244D0867A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D459B3B_2DDC_2BD4_4191_7AF06F40DBB4",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "center",
 "maxHeight": 1224,
 "maxWidth": 979,
 "id": "Image_556627C4_495D_FBA0_41AA_7E4D2A9A11BB",
 "backgroundOpacity": 0,
 "width": "41.287%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_556627C4_495D_FBA0_41AA_7E4D2A9A11BB.JPG",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19252"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_53A343CD_473A_913E_41CE_E6752DCF1BCD",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_53A363CD_473A_913E_41C9_F3FF6B694D2C",
  "this.HTMLText_539C63D2_473A_912A_41CA_039AD2A0BB51",
  "this.Container_539C23D3_473A_912A_41CC_AC50E06FB07B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "57.81%",
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
 "id": "IconButton_62F67D68_4157_F7C8_41CD_BD3334944500",
 "backgroundOpacity": 0,
 "width": "4.924%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_62F67D68_4157_F7C8_41CD_BD3334944500_rollover.jpg",
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_62F67D68_4157_F7C8_41CD_BD3334944500_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_62F66D68_4157_F7C8_41B6_EA88BD87CA16, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_62F67D68_4157_F7C8_41CD_BD3334944500.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_62F67D68_4157_F7C8_41CD_BD3334944500_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_5ED5573E_5026_A48C_41BB_3D18442804CD",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_5ED5773E_5026_A48C_41CB_54EC0BCCDF6F",
  "this.Image_40C839AF_5029_AF8C_419C_ED55457191CE",
  "this.HTMLText_5ED2674E_5026_A48C_41D1_A7B632C11E4F",
  "this.Container_5ED2374E_5026_A48C_41BF_4BA36860036B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.843%",
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
 "id": "IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D",
 "backgroundOpacity": 0,
 "width": "5.705%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D_rollover.jpg",
 "propagateClick": false,
 "height": "80.582%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_513BE56B_46AA_9412_41C3_3829F9217118, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_513B156B_46AA_9412_41C4_8B93DA8B856D_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1077,
 "maxWidth": 603,
 "id": "Image_6D1D4777_48D5_9B61_41D0_E4CE4336E45C",
 "backgroundOpacity": 0,
 "width": "34.243%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_6D1D4777_48D5_9B61_41D0_E4CE4336E45C.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image28954"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_5C6EAD47_47B7_B411_41BD_F74B3D5F2B5C",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_5C6E5D47_47B7_B411_41D0_39AF6D5900DD",
  "this.Container_5C6E4D48_47B7_B41F_41C2_ED9038D28D67",
  "this.Container_5C6E0D48_47B7_B41F_41B6_29C10331B1B3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "57.81%",
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
 "id": "IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62",
 "backgroundOpacity": 0,
 "width": "4.684%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62_rollover.jpg",
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_5C6FDD48_47B7_B41F_41CF_ECBCCDFBC197, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_5C6E2D48_47B7_B41F_4180_45130F22EE62_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_528F2C64_474D_77EF_41C8_3391432CE84F",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_528F1C64_474D_77EF_41C8_8C5B6A1FC858",
  "this.HTMLText_528FFC64_474D_77EF_41CB_038C0538BC3F",
  "this.Container_528F0C64_474D_77EF_4193_4450FD0B7110"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.843%",
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
 "id": "IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_528FAC64_474D_77EF_41CE_FCAC0F5B7BA4, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_528FBC64_474D_77EF_41B7_620C64F1B0F2_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_5C776DA2_4C6D_471E_4193_038ACE99A2DC",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_5C768DA2_4C6D_471E_41AF_9D28A08D23A8",
  "this.HTMLText_5C708DA6_4C6D_4766_41C2_668DA00309C6",
  "this.Container_5C70DDA6_4C6D_4766_41CF_91EE03CAC6BE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.843%",
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
 "maxHeight": 1077,
 "maxWidth": 603,
 "id": "Image_5CCF45D2_4C53_473F_41D2_B455D6FA0E23",
 "backgroundOpacity": 0,
 "width": "34.243%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_5CCF45D2_4C53_473F_41D2_B455D6FA0E23.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image28954"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_5CCF95D2_4C53_473F_41A8_262B35D5FAEC",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_5CCFF5D2_4C53_473F_4183_015F81FDA6D3",
  "this.Container_5CC815D2_4C53_473F_41C4_2588E6A1D094",
  "this.Container_5CCB15D2_4C53_473F_41BF_451C14B174D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "57.81%",
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
 "id": "IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_42848592_4C54_C73E_41AA_9D00359141D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_42849592_4C54_C73E_41C7_2EF2A5E722C5_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_53A363CD_473A_913E_41C9_F3FF6B694D2C",
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
 "height": 99.2,
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
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_539C63D2_473A_912A_41CA_039AD2A0BB51",
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
 "height": "66.922%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.78vh;\"><B>Kawasan TNBTS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.04vh;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Taman Nasional Bromo Tengger Semeru merupakan gabungan dari beberapa kawasan yang disatukan. Kawasan tersebut sebelumnya merupakan cagar alam, taman wisata, hutan produksi dan hutan lindung. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Sesuai definisinya Taman Nasional adalah kawasan pelestarian alam yang mempunyai ekosistem asli, dikelola dengan sistem zonasi yang dimanfaatkan untuk tujuan penelitian, ilmu pengetahuan, pendidikan, menunjang budidaya, pariwisata, dan rekreasi. Dari 50.276,3 hektare kawasan TNBTS dibagi menjadi tujuh zonasi. Yakni zona inti, rimba, pemanfaatan, tradisional, rehabilitasi, khusus, dan religi.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_539C23D3_473A_912A_41CC_AC50E06FB07B",
 "backgroundOpacity": 0.3,
 "width": 489,
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
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_5ED5773E_5026_A48C_41CB_54EC0BCCDF6F",
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
 "height": 45.6,
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
 "horizontalAlign": "center",
 "maxHeight": 688,
 "maxWidth": 1225,
 "id": "Image_40C839AF_5029_AF8C_419C_ED55457191CE",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_40C839AF_5029_AF8C_419C_ED55457191CE.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "48.827%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4022"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_5ED2674E_5026_A48C_41D1_A7B632C11E4F",
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
 "height": "41.182%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.78vh;\"><B>Danau Vulkanik</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.04vh;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Ranu Pani merupakan danau yang terbentuk akibat aktivitas gunung berapi oleh karena itu termasuk dalam kategori danau vulkanik yang letaknya berdekatan dengan 2 danau vulkanik lainnya yakni Ranu Regulo dan Ranu Kumbolo. Ranu merupakan sebutan masyarakat lokal untuk sebuah danau. Ranu Pani, Ranu Regulo, dan Ranu Kumbolo adalah bagian dari Taman Nasional Bromo Tengger Semeru (TNBTS). Luas Ranu Pani mencapai 1 hektar, namun kini diperkirakan luas Ranu Pani tinggal 0,75 hektar karena laju sedimentasi yang cepat.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_5ED2374E_5026_A48C_41BF_4BA36860036B",
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
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "35.384%",
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
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_5C6E5D47_47B7_B411_41D0_39AF6D5900DD",
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
 "id": "Container_5C6E4D48_47B7_B41F_41C2_ED9038D28D67",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_5C6E6D48_47B7_B41F_41CA_8A7C16DF0251"
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
 "height": "89.362%",
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
 "id": "Container_5C6E0D48_47B7_B41F_41B6_29C10331B1B3",
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
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
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
 "scrollBarOpacity": 0.5,
 "id": "Container_528F1C64_474D_77EF_41C8_8C5B6A1FC858",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_52A49264_4935_9560_41C2_96E12A7B1943"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 375.2,
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
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_528FFC64_474D_77EF_41CB_038C0538BC3F",
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
 "height": "35.384%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.49vh;\"><B>Aktivitas Keagamaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.03vh;\">Sebagian besar penduduk asli Tengger menganut agama Hindu. Oleh karena itu, kalian dapat dengan mudah menemukan sejumlah Pura Hindu di sekitar wilayah Taman Nasional Bromo Tengger Semeru (TNBTS).</SPAN><SPAN STYLE=\"font-size:2.03vh;\"> Aktivitas keagamaan umat hindu untuk melakukan persembahyangan di pura-pura yang berada di kawasan TNBTS tak hanya dilakukan oleh penduduk asli Tengger, tetapi juga banyak berasal dari umat hindu yang berada di Bali. </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_528F0C64_474D_77EF_4193_4450FD0B7110",
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
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "35.384%",
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
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_5C768DA2_4C6D_471E_41AF_9D28A08D23A8",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_5C1851D7_4C6C_FF26_41D1_5F6F823FF800"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 293.6,
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
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_5C708DA6_4C6D_4766_41C2_668DA00309C6",
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
 "height": "46.989%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.78vh;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.04vh;\"><B>di Eduwisata Taman Edelweis</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis, atau yang dikenal dengan nama ilmiah Anaphalis javanica, merupakan tanaman yang tumbuh di daerah dataran tinggi, termasuk di Taman Nasional Bromo Tengger Semeru (TNBTS). Bunga ini memiliki penampilan yang khas, dengan kelopak putih keperakan dengan tekstur berbulu dan berbentuk bintang yang terlihat seperti kapas. Pada bagian dalamnya terdapat bunga-bunga kecil berwarna kuning. Meskipun ukurannya tidak besar, tampilannya yang unik dan indah menjadikan edelweis sebagai simbol ketangguhan dan keindahan alam.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis di TNBTS tumbuh di ketinggian antara 2.000 hingga 3.700 meter di atas permukaan laut, terutama di sekitar Gunung Bromo dan Gunung Semeru. Tanaman ini biasanya ditemukan di padang rumput dan lereng-lereng pegunungan yang memiliki kondisi tanah berpasir dan miskin nutrisi, namun bunga ini dapat tumbuh subur di tempat tersebut. Edelweis di kawasan TNBTS tumbuh subur di tanah yang kaya akan abu vulkanik dari letusan gunung berapi di sekitarnya. Lingkungan pegunungan yang sejuk, dengan suhu yang rendah dan sinar matahari yang intens, juga berperan dalam kelangsungan hidup bunga ini.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Edelweis di kawasan TNBTS sering disebut \"bunga abadi\" karena kemampuannya untuk tetap terlihat segar meski setelah dipetik dan dikeringkan. Bunga ini juga dianggap sebagai simbol keabadian, cinta, dan keteguhan. Bagi para pendaki, menemukan edelweis di gunung seringkali menjadi salah satu bagian paling berkesan dari perjalanan mereka, karena edelweis melambangkan ketahanan hidup di lingkungan yang keras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis di TNBTS dilindungi oleh hukum, dan memetik atau merusak tanaman ini adalah tindakan yang dilarang. Konservasi edelweis menjadi penting karena bunga ini sering diambil oleh wisatawan yang tidak bertanggung jawab, yang dapat mengancam kelangsungan hidupnya di alam liar. Pihak pengelola TNBTS bersama dengan komunitas pecinta alam telah melakukan upaya edukasi dan perlindungan untuk menjaga populasi edelweis tetap lestari.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_5C70DDA6_4C6D_4766_41CF_91EE03CAC6BE",
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
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "35.384%",
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
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_5CCFF5D2_4C53_473F_4183_015F81FDA6D3",
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
 "id": "Container_5CC815D2_4C53_473F_41C4_2588E6A1D094",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_5CCA85D2_4C53_473F_41D0_B9E2476F61FF"
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
 "height": "89.362%",
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
 "id": "Container_5CCB15D2_4C53_473F_41BF_451C14B174D7",
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
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
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
 "id": "HTMLText_5C6E6D48_47B7_B41F_41CA_8A7C16DF0251",
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.78vh;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.04vh;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Taman Nasional Bromo Tengger Semeru (TNBTS) adalah salah satu taman nasional yang paling terkenal di Indonesia dan terletak di Provinsi Jawa Timur. TNBTS terletak di empat kabupaten di Jawa Timur, yaitu Kabupaten Malang, Kabupaten Lumajang, Kabupaten Probolinggo, dan Kabupaten Pasuruan. Luas wilayah taman nasional ini mencapai sekitar 50.276,3 hektar, mencakup berbagai tipe ekosistem dari savana hingga pegunungan tropis. Taman nasional ini mencakup kawasan pegunungan yang meliputi Gunung Bromo, Gunung Semeru, dan Pegunungan Tengger, dengan bentang alam yang indah dan kaya akan keanekaragaman hayati. TNBTS memiliki peran penting baik dari segi ekologi, budaya, maupun ekonomi, antara lain:</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">1.TNBTS merupakan tempat pelestarian keanekaragaman hayati. Contohnya adalah macan tutul Jawa (Panthera pardus melas), kijang, elang Jawa, dan bunga edelweis (Anaphalis javanica). Kawasan ini menjadi tempat perlindungan bagi spesies endemik dan membantu menjaga keseimbangan ekosistem alami di kawasan pegunungan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">2.TNBTS memiliki fungsi penting dalam menjaga keseimbangan ekosistem, termasuk pengaturan sumber daya air. Pegunungan di TNBTS adalah sumber utama air bagi daerah sekitarnya. Gunung Semeru dan pegunungan lainnya di taman ini menyuplai air ke berbagai sungai yang digunakan untuk irigasi pertanian dan kebutuhan masyarakat.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">3.Hutan di TNBTS memainkan peran penting dalam pengendalian iklim. Vegetasi di kawasan ini menyerap karbon dioksida (CO2), membantu mengurangi dampak perubahan iklim. Selain itu, kawasan pegunungan seperti di TNBTS membantu menjaga stabilitas iklim lokal dengan menyerap dan menyimpan air hujan, serta mengurangi risiko banjir dan longsor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">4.TNBTS juga penting secara budaya, terutama bagi Suku Tengger, masyarakat adat yang mendiami kawasan sekitar Gunung Bromo. Tradisi dan budaya mereka, seperti upacara Yadnya Kasada, menjadi salah satu warisan budaya yang masih lestari hingga saat ini. Perlindungan kawasan ini membantu melestarikan budaya lokal yang sudah ada selama ratusan tahun. Suku Tengger juga memiliki hubungan spiritual yang kuat dengan Gunung Bromo dan sekitarnya. Menjaga TNBTS berarti juga melindungi warisan budaya dan spiritual yang memiliki nilai tinggi bagi masyarakat lokal.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">5.TNBTS juga merupakan contoh penting bagaimana kawasan alam dapat dikelola untuk ekowisata. Ekowisata di TNBTS memungkinkan wisatawan untuk menikmati keindahan alam sambil tetap menjaga kelestariannya. Pengelolaan yang baik terhadap taman nasional ini mendorong kesadaran lingkungan dan perlindungan alam, sekaligus mendukung tujuan pariwisata yang berkelanjutan.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_52A49264_4935_9560_41C2_96E12A7B1943",
 "backgroundOpacity": 0,
 "width": "99.722%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_52A49264_4935_9560_41C2_96E12A7B1943.JPG",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "99.944%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image13918"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 821,
 "maxWidth": 1460,
 "id": "Image_5C1851D7_4C6C_FF26_41D1_5F6F823FF800",
 "backgroundOpacity": 0,
 "width": "183.187%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_5C1851D7_4C6C_FF26_41D1_5F6F823FF800.JPG",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5986"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_5CCA85D2_4C53_473F_41D0_B9E2476F61FF",
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.78vh;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.04vh;\"><B>di Eduwisata Taman Edelweis</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis, atau yang dikenal dengan nama ilmiah Anaphalis javanica, merupakan tanaman yang tumbuh di daerah dataran tinggi, termasuk di Taman Nasional Bromo Tengger Semeru (TNBTS). Bunga ini memiliki penampilan yang khas, dengan kelopak putih keperakan dengan tekstur berbulu dan berbentuk bintang yang terlihat seperti kapas. Pada bagian dalamnya terdapat bunga-bunga kecil berwarna kuning. Meskipun ukurannya tidak besar, tampilannya yang unik dan indah menjadikan edelweis sebagai simbol ketangguhan dan keindahan alam.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis di TNBTS tumbuh di ketinggian antara 2.000 hingga 3.700 meter di atas permukaan laut, terutama di sekitar Gunung Bromo dan Gunung Semeru. Tanaman ini biasanya ditemukan di padang rumput dan lereng-lereng pegunungan yang memiliki kondisi tanah berpasir dan miskin nutrisi, namun bunga ini dapat tumbuh subur di tempat tersebut. Edelweis di kawasan TNBTS tumbuh subur di tanah yang kaya akan abu vulkanik dari letusan gunung berapi di sekitarnya. Lingkungan pegunungan yang sejuk, dengan suhu yang rendah dan sinar matahari yang intens, juga berperan dalam kelangsungan hidup bunga ini.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Edelweis di kawasan TNBTS sering disebut \"bunga abadi\" karena kemampuannya untuk tetap terlihat segar meski setelah dipetik dan dikeringkan. Bunga ini juga dianggap sebagai simbol keabadian, cinta, dan keteguhan. Bagi para pendaki, menemukan edelweis di gunung seringkali menjadi salah satu bagian paling berkesan dari perjalanan mereka, karena edelweis melambangkan ketahanan hidup di lingkungan yang keras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;\">Bunga edelweis di TNBTS dilindungi oleh hukum, dan memetik atau merusak tanaman ini adalah tindakan yang dilarang. Konservasi edelweis menjadi penting karena bunga ini sering diambil oleh wisatawan yang tidak bertanggung jawab, yang dapat mengancam kelangsungan hidupnya di alam liar. Pihak pengelola TNBTS bersama dengan komunitas pecinta alam telah melakukan upaya edukasi dan perlindungan untuk menjaga populasi edelweis tetap lestari.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player435"
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

(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_88DDD1A8_938A_EBFE_41D0_6C5047F65100",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderRadius": 0,
 "minHeight": 20,
 "definitions": [{
 "height": 1920,
 "label": "Desain tanpa judul",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0_t.jpg",
 "width": 1080,
 "loop": false,
 "id": "video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0",
 "class": "Video",
 "video": {
  "width": 1080,
  "height": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0.mp4"
 }
},
{
 "height": 523,
 "duration": 5000,
 "class": "Photo",
 "label": "images",
 "id": "photo_E23B4AD7_F7B4_F633_41DF_5C298F5F55E7",
 "thumbnailUrl": "media/photo_E23B4AD7_F7B4_F633_41DF_5C298F5F55E7_t.jpg",
 "width": 586,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E23B4AD7_F7B4_F633_41DF_5C298F5F55E7.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 768,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur Lapindo 2026.jpg",
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_4",
 "thumbnailUrl": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_4_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_camera"
},
{
 "label": "Photo Album 20260620_103816",
 "id": "album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49",
 "thumbnailUrl": "media/album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": -14.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC203EDA_D29D_64B7_41C4_834659F1307A"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_8B3FAC89_9387_19BE_41A7_663213D9CB7E",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window23591"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD358D70_D29D_6472_41E9_514270BE8130"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": 178.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC125EB1_D29D_64F2_41BB_131D17ECFEC8"
},
{
 "height": 1110,
 "duration": 25000,
 "class": "Photo",
 "label": "20260618_121112",
 "id": "album_9D28B7ED_9387_37D6_41D1_D868D8F010E1",
 "width": 1973,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9D28B7ED_9387_37D6_41D1_D868D8F010E1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 1110,
 "duration": 5000,
 "class": "Photo",
 "label": "20260618_132204",
 "id": "photo_9E2783B6_9387_6FB2_41DA_F688F93A0C55",
 "thumbnailUrl": "media/photo_9E2783B6_9387_6FB2_41DA_F688F93A0C55_t.jpg",
 "width": 1973,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_9E2783B6_9387_6FB2_41DA_F688F93A0C55.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -50.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCABEE35_D29D_67FD_41E2_765339ED6A03"
},
{
 "initialPosition": {
  "yaw": -17.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC3CAECA_D29D_6497_41C5_7171E6091ABF"
},
{
 "label": "Photo Album Lokasi Lumpur Lapindo",
 "id": "album_E013B05F_F874_3202_41B9_D50B38B9771F",
 "thumbnailUrl": "media/album_E013B05F_F874_3202_41B9_D50B38B9771F_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E013B05F_F874_3202_41B9_D50B38B9771F_AlbumPlayList"
},
{
 "height": 768,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur lapindo 2011",
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_1",
 "thumbnailUrl": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_1_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_8902FDBB_9487_1BD1_41E1_81B4647F9460",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window34587"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD2CDD80_D29D_6492_41E1_7BE437673D54"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_82ACE0B0_9387_284E_41DA_9C59CB57FAAB",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window7327"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "CP dan Tujuan Pembelajaran",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_82ACA0B0_9387_284E_41CB_AED8B88D0E28"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": 103.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC471F0A_D29D_6596_41C5_4F659B2C55DD"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E2CD21C3_F88C_327D_41E3_AC982C176098",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window63582"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Deskripsi Singkat Lumpur Lapindo",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_E2CB61C3_F88C_327D_41D5_1FD52891D64C"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E3D9C12D_F78C_5271_41E1_B9673E388232",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 9.38,
 "showEasing": "cubic_in",
 "yaw": -37.89,
 "pitch": 23.27,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E3D9C12D_F78C_5271_41E1_B9673E388232_0_1.jpeg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "initialPosition": {
  "yaw": 29.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DD91DF29_D29D_6592_41CD_DA7F1332419B"
},
{
 "initialPosition": {
  "yaw": 87.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC061EBD_D29D_64F2_41D0_DC4AFB4548B4"
},
{
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "label": "Photo Album Screenshot 2026-06-24 152205",
 "id": "album_C16A5A2A_F994_3631_41E2_596376131D6D",
 "thumbnailUrl": "media/album_C16A5A2A_F994_3631_41E2_596376131D6D_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_C16A5A2A_F994_3631_41E2_596376131D6D_AlbumPlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 144.25,
   "yaw": -150.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553"
  }
 ],
 "label": "25. ramayana",
 "id": "panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0",
 "overlays": [
  "this.overlay_E39C49ED_F289_3A34_41CC_7C5EA4CDC3E2",
  "this.overlay_DA799691_F388_D616_41D6_EF3BAA1A15E8",
  "this.overlay_EE928C54_F794_5202_41B4_60155300EEBE"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 1836,
 "duration": 5000,
 "class": "Photo",
 "label": "20260620_103816",
 "id": "album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_0",
 "thumbnailUrl": "media/album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_0_t.jpg",
 "width": 3264,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "label": "Photo Album 20260620_102010",
 "id": "album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5",
 "thumbnailUrl": "media/album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_AlbumPlayList"
},
{
 "height": 1421,
 "duration": 5000,
 "class": "Photo",
 "label": "kayutangan-heritage-221237181",
 "id": "photo_E0AC15B8_F78F_D207_41E2_2CF60438765E",
 "thumbnailUrl": "media/photo_E0AC15B8_F78F_D207_41E2_2CF60438765E_t.jpg",
 "width": 800,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E0AC15B8_F78F_D207_41E2_2CF60438765E.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E1147026_F87F_D202_41DD_F55A2A82DA18",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window59708"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD3CCD65_D29D_659D_41DB_CA9816A90E93"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "height": 768,
 "duration": 25000,
 "class": "Photo",
 "label": "PL 2011",
 "id": "photo_BE36A184_948E_EBB6_41B9_87F9098FCCF9",
 "thumbnailUrl": "media/photo_BE36A184_948E_EBB6_41B9_87F9098FCCF9_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_BE36A184_948E_EBB6_41B9_87F9098FCCF9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E5A98A62_F894_5635_41E1_C0FF7B71BBB7",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window83476"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "footerBorderColor": "#000000",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "layout": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "closeButtonPaddingRight": 0,
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "title": "Muara Tlocor",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "closeButtonPaddingTop": 0,
 "footerBackgroundOpacity": 1,
 "children": [
  "this.htmlText_E5AFCA62_F894_5635_41EA_CE124C3E5054",
  "this.image_uidDD223D80_D29D_6492_41D8_E20E17E99E8C_1"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -97.99,
   "yaw": -57.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802"
  },
  {
   "backwardYaw": -74.09,
   "yaw": 169.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE"
  }
 ],
 "label": "17. tengah malabar sampah",
 "id": "panorama_F807F64D_F289_29FF_41E0_C6A8F023369E",
 "overlays": [
  "this.overlay_E2194C2D_F297_5A25_41E2_DF56A2439898",
  "this.overlay_D02314A3_F3BF_6A3A_41E5_2AF10089ED87",
  "this.overlay_E063BC65_F78C_32E6_41DA_A10A75F76B7C"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 179.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2DF4DCF_D29D_64AE_41E3_7222DADB9ABD"
},
{
 "initialPosition": {
  "yaw": 70.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCDB7E56_D29D_67BF_41C5_373D1D9994A9"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "id": "window_D8D4D35F_F88C_D60E_41CC_F364592806A1",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window90334"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_D8D6835F_F88C_D60E_41CC_573BB8C8A8B6",
  "this.container_DD20FD80_D29D_6492_41C4_CC09761152C6"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "close": "this.playList_DD21AD80_D29D_6492_41D9_D56AC9B3F718.set('selectedIndex', -1);",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Arial",
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "bodyBackgroundColorDirection": "vertical"
},
{
 "levels": [
  {
   "url": "media/popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E_0_0.png",
   "width": 1180,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 498
  },
  {
   "url": "media/popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 249
  }
 ],
 "id": "ImageResource_B18EF5BB_F9F4_3217_41ED_1ADEFAB09C1D",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_camera"
},
{
 "height": 850,
 "label": "WhatsApp Video 2026-06-24 at 10.11.14",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1_t.jpg",
 "width": 478,
 "loop": false,
 "id": "video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1",
 "class": "Video",
 "video": {
  "width": 478,
  "height": 850,
  "class": "VideoResource",
  "mp4Url": "media/video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1.mp4"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E3EAD4CD_F8BC_5208_41E9_C4C1A09555DC",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window74438"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Pembuangan Lumpur Lapindo",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_E3EB14CD_F8BC_5208_41E8_97F82A567CFF"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "id": "panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_camera"
},
{
 "initialPosition": {
  "yaw": 21.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DD8F7F38_D29D_65F3_41C1_C36D1ABFFA0B"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 134.37,
   "yaw": -86.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704"
  }
 ],
 "label": "13. dermaga wisata bahari tlocor",
 "id": "panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825",
 "overlays": [
  "this.overlay_D08EC0E2_F3B9_EA3A_41D6_6DB5534D9981",
  "this.overlay_FCF96FBC_F3A9_D53B_41EB_90924A377578",
  "this.popup_E3F5E18E_F78D_F232_4194_D6DAD63FFC44",
  "this.overlay_E59BE253_F894_561A_41E9_C87D3A9531B6",
  "this.overlay_D958790D_F894_73F3_41EC_E04FF9C09F5A"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_camera"
},
{
 "height": 1600,
 "duration": 5000,
 "class": "Photo",
 "label": "13",
 "id": "photo_C3E938DA_F98C_3211_41E2_782F7DE0E7B0",
 "thumbnailUrl": "media/photo_C3E938DA_F98C_3211_41E2_782F7DE0E7B0_t.jpg",
 "width": 1131,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_C3E938DA_F98C_3211_41E2_782F7DE0E7B0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 1280,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 11.47.40",
 "id": "photo_E1025042_F79D_D204_41C5_D17119AEFBAE",
 "thumbnailUrl": "media/photo_E1025042_F79D_D204_41C5_D17119AEFBAE_t.jpg",
 "width": 720,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E1025042_F79D_D204_41C5_D17119AEFBAE.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -45.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DDD73F68_D29D_6593_41E1_975779B53593"
},
{
 "initialPosition": {
  "yaw": 89.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DDAD9F59_D29D_65B5_41E9_09FC43B7ABBC"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.43,
   "yaw": 149.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A"
  },
  {
   "backwardYaw": -109.31,
   "yaw": 0.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA"
  }
 ],
 "label": "5. jalan menuju jembatan",
 "id": "panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A",
 "overlays": [
  "this.overlay_E04B2702_F29F_57A8_41EC_58DAB1C5AB13",
  "this.overlay_ED7AA92C_F399_5A0E_41E0_9751F1F390A9",
  "this.overlay_279CA8B7_364A_4024_41C7_38D604E3D6D5"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E373B4B9_F78D_D26E_41D6_003ACCEC8912",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window25293"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Daerah Resapan Air",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD266D80_D29D_6492_41E2_85BE321B21A1_0",
  "this.htmlText_E30D74B9_F78D_D26E_41D3_03B2673EFA56"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "height": 892,
 "duration": 25000,
 "class": "Photo",
 "label": "Pulau Lusi 2026",
 "id": "album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_1",
 "thumbnailUrl": "media/album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_1_t.jpg",
 "width": 1485,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -75.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCF14E8E_D29D_64AE_41E8_46CC1103F7EB"
},
{
 "levels": [
  {
   "url": "media/popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 2296
  },
  {
   "url": "media/popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_EE17633F_F7F4_5658_41DD_EA6B5355DB8E",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E12F7462_F794_5207_41E7_DDF366147A69",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window47722"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Lokasi dan Sejarah Alun-Alun ",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD5D3D80_D29D_6492_41A4_D9F07F55DF92_0",
  "this.htmlText_E120B462_F794_5207_41D1_3D42B95E12A7"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": -87.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCAE0E41_D29D_6792_4164_E19BFE1B68E3"
},
{
 "height": 1110,
 "duration": 5000,
 "class": "Photo",
 "label": "20260618_130908",
 "id": "album_9FF6B40D_9387_2851_41E1_8FB72D56280C",
 "width": 1973,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9FF6B40D_9387_2851_41E1_8FB72D56280C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "vfov": 180,
 "overlays": [
  "this.overlay_E15E3FA1_F7BC_2E0C_41D6_09413BDEE033",
  "this.overlay_DBF3ED8E_F874_52F1_41CC_43BB3A008C76",
  "this.popup_C3AB8491_F9F4_5213_41C0_7BBC96E1D3F9",
  "this.overlay_B4B119A9_94BD_3BFE_41E1_1E28FBD14793"
 ],
 "label": "21. sungai brantas jembatan merdeka",
 "id": "panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A",
 "thumbnailUrl": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130,
 "pitch": 0
},
{
 "vfov": 180,
 "label": "20260620_133918_132",
 "id": "panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7",
 "thumbnailUrl": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130,
 "pitch": 0
},
{
 "height": 1283,
 "duration": 5000,
 "class": "Photo",
 "label": "IMG20150616121900",
 "id": "photo_9F4B8E3C_9387_18B6_41BA_6F46F6EFC232",
 "thumbnailUrl": "media/photo_9F4B8E3C_9387_18B6_41BA_6F46F6EFC232_t.jpg",
 "width": 1710,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_9F4B8E3C_9387_18B6_41BA_6F46F6EFC232.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 1000,
 "duration": 5000,
 "class": "Photo",
 "label": "qrcode_366684037_5f28b7d43d8cc31081fc13084c5cfae1",
 "id": "album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_0",
 "thumbnailUrl": "media/album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_0_t.jpg",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 1536,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-26 at 10.35.58",
 "id": "album_14228B36_024F_7584_4172_48B43AD2F408_0",
 "thumbnailUrl": "media/album_14228B36_024F_7584_4172_48B43AD2F408_0_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_14228B36_024F_7584_4172_48B43AD2F408_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 479,
 "duration": 25000,
 "class": "Photo",
 "label": "peta kampung warnawarni 3d dan arema",
 "id": "album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_0",
 "thumbnailUrl": "media/album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_0_t.jpg",
 "width": 870,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E251DCB0_F7B5_D20E_41EB_F3AC76E43797",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window36389"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Pasar Besar sebagai Pusat Ekonomi",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD5E0D80_D29D_6492_41AD_1124178C9938_0",
  "this.htmlText_E2538CB0_F7B5_D20E_41E8_50FB6F3ACCE1"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD358D70_D29D_6472_41E9_514270BE8130, [this.htmltext_DD353D70_D29D_6472_41D2_35CB294757C4,this.component_DD348D70_D29D_6472_41E2_B264867FF7C2,this.component_DD347D70_D29D_6472_41E3_232FBC2D3C13], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD35DD70_D29D_6472_41E9_F51934D7CD0C"
 ],
 "id": "playList_DF115D10_D29A_E5B3_41E2_B745746E8A7F"
},
{
 "id": "FadeInEffect_18B41ABE_097B_7ACD_41A0_697ADDFE6ED0",
 "easing": "cubic_in",
 "class": "FadeInEffect",
 "duration": 500
},
{
 "label": "Photo Album WhatsApp Image 2026-06-26 at 10.35.58",
 "id": "album_14228B36_024F_7584_4172_48B43AD2F408",
 "thumbnailUrl": "media/album_14228B36_024F_7584_4172_48B43AD2F408_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_14228B36_024F_7584_4172_48B43AD2F408_AlbumPlayList"
},
{
 "items": [
  {
   "media": "this.video_E3C2E78A_F894_5E09_41E3_59F594D0586A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD574D80_D29D_6492_41E1_1C1875EA4728, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD574D80_D29D_6492_41E1_1C1875EA4728, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_DD574D80_D29D_6492_41E1_1C1875EA4728",
 "class": "PlayList"
},
{
 "height": 892,
 "duration": 25000,
 "class": "Photo",
 "label": "Pulau Lusi 2006",
 "id": "album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_0",
 "thumbnailUrl": "media/album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_0_t.jpg",
 "width": 1485,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -132.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2C2EDDE_D29D_64AF_41E2_493DC9E29798"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E0964D97_F7BC_D234_41C1_3BA8731ECAD9",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window38126"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "DAS Brantas",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD5B3D80_D29D_6492_41D2_195C2534FB5F_0",
  "this.htmlText_E0902D9C_F7BC_D234_41DD_6F960CF24D30"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": -125.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC735F0A_D29D_6596_41E9_43DD236889FB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_camera"
},
{
 "levels": [
  {
   "url": "media/popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41_0_0.png",
   "width": 1159,
   "class": "ImageResourceLevel",
   "height": 571
  },
  {
   "url": "media/popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 504
  },
  {
   "url": "media/popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 252
  }
 ],
 "id": "ImageResource_B18C15BB_F9F4_3217_41CB_D974CD531D54",
 "class": "ImageResource"
},
{
 "height": 481,
 "duration": 0,
 "class": "Photo",
 "label": "Screenshot 2026-06-24 152205",
 "id": "album_C16A5A2A_F994_3631_41E2_596376131D6D_0",
 "thumbnailUrl": "media/album_C16A5A2A_F994_3631_41E2_596376131D6D_0_t.png",
 "width": 985,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_C16A5A2A_F994_3631_41E2_596376131D6D_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "label": "Photo Album 20260618_114614",
 "id": "album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910",
 "thumbnailUrl": "media/album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910_AlbumPlayList"
},
{
 "height": 1890,
 "duration": 5000,
 "class": "Photo",
 "label": "20260618_115222",
 "id": "album_9EAE2671_9387_E8CE_41DD_31B01C70029F",
 "width": 1163,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9EAE2671_9387_E8CE_41DD_31B01C70029F.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 1600,
 "duration": 5000,
 "class": "Photo",
 "label": "12",
 "id": "photo_C349A582_F98C_52F1_41C7_2A1A02D3D72B",
 "thumbnailUrl": "media/photo_C349A582_F98C_52F1_41C7_2A1A02D3D72B_t.jpg",
 "width": 1131,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_C349A582_F98C_52F1_41C7_2A1A02D3D72B.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E284D1D0_F78C_7231_41E2_1C5919122B7B",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window34290"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Lokasi dan Sejarah Pasar Besar",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD5F3D80_D29D_6492_41CB_BC60B72B583A_0",
  "this.htmlText_E28661D4_F78C_7231_41E3_0226219A9BA1"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "height": 632,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur Lapindo 2016",
 "id": "photo_80C58F3F_9385_18FC_41B5_38BB1FF93E42",
 "thumbnailUrl": "media/photo_80C58F3F_9385_18FC_41B5_38BB1FF93E42_t.jpg",
 "width": 1116,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_80C58F3F_9385_18FC_41B5_38BB1FF93E42.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "label": "Photo Album qrcode_366684037_5f28b7d43d8cc31081fc13084c5cfae1",
 "id": "album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467",
 "thumbnailUrl": "media/album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_AlbumPlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 129.29,
   "yaw": -101.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42"
  }
 ],
 "label": "28. jembatan sungai sukun",
 "id": "panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C",
 "overlays": [
  "this.overlay_D8C7E42D_F38B_2A0E_41ED_2F6B3F276D8C",
  "this.overlay_E1911B9A_F78C_363A_41E3_D45E5AC6A45A"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "levels": [
  {
   "url": "media/popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C_0_0.jpeg",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_EE14C341_F7F4_5628_41D6_DD6FD1A01F4C",
 "class": "ImageResource"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD59CD80_D29D_6492_41E7_78A7F538D8D0, [this.htmltext_DD596D80_D29D_6492_4198_0DC41BA88538,this.component_DD586D80_D29D_6492_41D9_30824479DCBA,this.component_DD585D80_D29D_6492_41E4_7773C3509E12], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD59FD80_D29D_6492_41CD_691CB6C52584"
 ],
 "id": "playList_DF022D1E_D29A_E5AF_41C6_49631C881646"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_camera"
},
{
 "height": 428,
 "duration": 5000,
 "class": "Photo",
 "label": "jarak jembatan kali porong ke tanggul",
 "id": "photo_E081B4C1_F87C_7201_418E_CD6CADA9A568",
 "thumbnailUrl": "media/photo_E081B4C1_F87C_7201_418E_CD6CADA9A568_t.png",
 "width": 848,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E081B4C1_F87C_7201_418E_CD6CADA9A568.PNG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -30.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCCD7E78_D29D_6473_41E6_1339482470EF"
},
{
 "height": 1600,
 "duration": 5000,
 "class": "Photo",
 "label": "11",
 "id": "album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_0",
 "thumbnailUrl": "media/album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_0_t.jpg",
 "width": 1131,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -76.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DDC36F78_D29D_6473_41E6_E5B10B3A3F28"
},
{
 "height": 720,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 10.08.16 (1)",
 "id": "album_F96B41C9_F794_D5F3_41EE_6A24455388C0_0",
 "thumbnailUrl": "media/album_F96B41C9_F794_D5F3_41EE_6A24455388C0_0_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F96B41C9_F794_D5F3_41EE_6A24455388C0_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E3774FA2_F794_2E1F_41EB_AF3A6D4826D4",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window27879"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Penampungan Air",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD257D80_D29D_6492_41E6_0D28B10D8E4F_0",
  "this.htmlText_E3789FA2_F794_2E1F_41E4_DFE4D2E96669"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "label": "Photo Album 20260618_121332",
 "id": "album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A",
 "thumbnailUrl": "media/album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_AlbumPlayList"
},
{
 "items": [
  {
   "media": "this.video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1",
   "start": "this.viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DF4D5D42_D29A_E596_41E2_BC01A08D4727, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DF4D5D42_D29A_E596_41E2_BC01A08D4727, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272VideoPlayer)",
   "player": "this.viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272VideoPlayer"
  }
 ],
 "id": "PlayList_DF4D5D42_D29A_E596_41E2_BC01A08D4727",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -162.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCC41E84_D29D_6492_41D7_318DA98A2310"
},
{
 "initialPosition": {
  "yaw": -179.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC495EFA_D29D_6476_41E7_D803AD998DA6"
},
{
 "levels": [
  {
   "url": "media/popup_E38560B4_F78C_F256_41A5_7535B20D4D5E_0_0.jpeg",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/popup_E38560B4_F78C_F256_41A5_7535B20D4D5E_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_E38560B4_F78C_F256_41A5_7535B20D4D5E_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_EE151341_F7F4_5628_41CC_DBD8B980FB70",
 "class": "ImageResource"
},
{
 "id": "FadeInEffect_153E260C_0277_3F85_417F_7F7D3E39D9BC",
 "easing": "cubic_in",
 "class": "FadeInEffect",
 "duration": 500
},
{
 "levels": [
  {
   "url": "media/popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 2296
  },
  {
   "url": "media/popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_E423A875_F7B5_D2B7_41DF_01D752894C2E",
 "class": "ImageResource"
},
{
 "id": "FadeInEffect_153EA60C_0277_3F85_4170_2EFE0E3C5F8C",
 "easing": "cubic_in",
 "class": "FadeInEffect",
 "duration": 500
},
{
 "items": [
  {
   "media": "this.panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_camera"
  },
  {
   "media": "this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_camera"
  },
  {
   "media": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_camera"
  },
  {
   "media": "this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_camera"
  },
  {
   "media": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_camera"
  },
  {
   "media": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_camera"
  },
  {
   "media": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_camera"
  },
  {
   "media": "this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_camera"
  },
  {
   "media": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_camera"
  },
  {
   "media": "this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_camera"
  },
  {
   "media": "this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_camera"
  },
  {
   "media": "this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_camera"
  },
  {
   "media": "this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_camera"
  },
  {
   "media": "this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_camera"
  },
  {
   "media": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_camera"
  },
  {
   "media": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_camera"
  },
  {
   "media": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE_camera"
  },
  {
   "media": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_camera"
  },
  {
   "media": "this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_camera"
  },
  {
   "media": "this.panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_camera"
  },
  {
   "media": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_camera"
  },
  {
   "media": "this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_camera"
  },
  {
   "media": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_camera"
  },
  {
   "media": "this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_camera"
  },
  {
   "media": "this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_camera"
  },
  {
   "media": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42_camera"
  },
  {
   "media": "this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.album_E322522E_F396_6ED7_41CE_6117BFB06450",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_E6A1023F_F79C_568F_41ED_B7F233AFE107",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 35)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.album_F96B41C9_F794_D5F3_41EE_6A24455388C0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.album_F80085AA_F794_5DB6_41DA_49B1D02EC45F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 38, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 38)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.album_E013B05F_F874_3202_41B9_D50B38B9771F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 41, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 41)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.album_C16A5A2A_F994_3631_41E2_596376131D6D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "media": "this.album_B9110E12_F98C_6E10_41B9_66C9C3E7E227",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "media": "this.album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "media": "this.album_14228B36_024F_7584_4172_48B43AD2F408",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_88B08704_939A_E8B6_41DB_496F8458CA4D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_camera"
  },
  {
   "media": "this.panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_camera"
  },
  {
   "media": "this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E38560B4_F78C_F256_41A5_7535B20D4D5E",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 4.41,
 "showEasing": "cubic_in",
 "yaw": 44.12,
 "pitch": 1.27,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E38560B4_F78C_F256_41A5_7535B20D4D5E_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_C3AB8491_F9F4_5213_41C0_7BBC96E1D3F9",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 15.82,
 "showEasing": "cubic_in",
 "yaw": 69.25,
 "pitch": -10.92,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C3AB8491_F9F4_5213_41C0_7BBC96E1D3F9_0_0.png",
    "width": 988,
    "class": "ImageResourceLevel",
    "height": 477
   },
   {
    "url": "media/popup_C3AB8491_F9F4_5213_41C0_7BBC96E1D3F9_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 247
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "id": "FadeOutEffect_18B4FABE_097B_7ACD_418A_347CE4C1776A",
 "easing": "cubic_out",
 "class": "FadeOutEffect",
 "duration": 500
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.88,
   "yaw": -109.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A"
  },
  {
   "backwardYaw": -76.7,
   "yaw": 162.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A"
  },
  {
   "backwardYaw": 54.18,
   "yaw": -92.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D"
  }
 ],
 "label": "2. monumen",
 "id": "panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA",
 "overlays": [
  "this.overlay_EF188E7A_F399_F60A_41D5_343012473F74",
  "this.overlay_ED65A8E6_F388_DA3A_41E8_40FF5FED1FD2",
  "this.overlay_E840A59A_F3F9_2A0A_41D9_182FD465B6B5",
  "this.overlay_E6530A87_F794_364F_41D0_E8FC91415534",
  "this.popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 93.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2FFBDF4_D29D_6473_4190_CFC04F76AFAC"
},
{
 "data": {
  "name": "Window680"
 },
 "shadowSpread": 1,
 "id": "window_D91E183A_D295_ABF7_41DC_CDFC7AE96A86",
 "closeButtonPaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "modal": true,
 "closeButtonPaddingBottom": 5,
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 0,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "closeButtonRollOverIconLineWidth": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonIconWidth": 20,
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "headerBackgroundOpacity": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "vfov": 180,
 "label": "20260620_133912_873",
 "id": "panorama_88B08704_939A_E8B6_41DB_496F8458CA4D",
 "thumbnailUrl": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130,
 "pitch": 0
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 154.19,
   "yaw": -114.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7"
  }
 ],
 "label": "10. jalan deket masjid 2",
 "id": "panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C",
 "overlays": [
  "this.overlay_EEAF2246_F399_2E7A_41AF_1413F676123C",
  "this.overlay_FC28670F_F396_D6D5_41E4_EF62BF2F4E75",
  "this.overlay_FC34AD02_F397_FACF_41DA_AA5FFE388BCA",
  "this.popup_E3D9C12D_F78C_5271_41E1_B9673E388232",
  "this.popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "vfov": 180,
 "label": "20260706_094541_269",
 "id": "panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782",
 "thumbnailUrl": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130,
 "pitch": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_C39D3FC2_F98C_6E71_41E1_3810998690E1",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 13.57,
 "showEasing": "cubic_in",
 "yaw": -6.45,
 "pitch": -4.88,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C39D3FC2_F98C_6E71_41E1_3810998690E1_0_0.png",
    "width": 985,
    "class": "ImageResourceLevel",
    "height": 481
   },
   {
    "url": "media/popup_C39D3FC2_F98C_6E71_41E1_3810998690E1_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 250
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.27,
   "yaw": -137.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42"
  }
 ],
 "label": "26 kayutangan depan",
 "id": "panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2",
 "overlays": [
  "this.overlay_DD7FDD9D_F38F_5A0E_41E2_C3F04C2EBA11",
  "this.overlay_E145EBDD_F7BC_763A_41EC_A045D67599B8",
  "this.overlay_DBDFF841_F98C_3273_41E8_FF27FA541675",
  "this.popup_DA47C704_F98C_5FF2_41DB_CAD85AB394B8",
  "this.popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 632,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur Lapindo 2021",
 "id": "photo_818A407D_9386_E97F_41DB_7F90CDC4E055",
 "thumbnailUrl": "media/photo_818A407D_9386_E97F_41DB_7F90CDC4E055_t.jpg",
 "width": 1116,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_818A407D_9386_E97F_41DB_7F90CDC4E055.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.86,
   "yaw": 103.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF"
  },
  {
   "backwardYaw": 164.49,
   "yaw": -1.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE"
  }
 ],
 "label": "19. bunderan malabar",
 "id": "panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD",
 "overlays": [
  "this.overlay_E34E9987_F29B_DAED_41D4_A8ED5CA04495",
  "this.overlay_D9166A0A_F3BB_DE0A_41C0_0EAA9BF58463",
  "this.overlay_E33B2955_F79C_5239_41DD_37D8637D6BDF"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 768,
 "duration": 25000,
 "class": "Photo",
 "label": "PL 2016",
 "id": "photo_B02F055C_948E_EB56_41D4_7268D90712EA",
 "thumbnailUrl": "media/photo_B02F055C_948E_EB56_41D4_7268D90712EA_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_B02F055C_948E_EB56_41D4_7268D90712EA.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 82.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DD840F48_D29D_6593_41E1_6AD26FD93EB8"
},
{
 "height": 1536,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-26 at 10.56.29",
 "id": "album_14228B36_024F_7584_4172_48B43AD2F408_1",
 "thumbnailUrl": "media/album_14228B36_024F_7584_4172_48B43AD2F408_1_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_14228B36_024F_7584_4172_48B43AD2F408_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "label": "Photo Album WhatsApp Image 2026-06-24 at 10.08.16 (1)",
 "id": "album_F96B41C9_F794_D5F3_41EE_6A24455388C0",
 "thumbnailUrl": "media/album_F96B41C9_F794_D5F3_41EE_6A24455388C0_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_F96B41C9_F794_D5F3_41EE_6A24455388C0_AlbumPlayList"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_8679A41A_938B_68D2_41E0_988357C18E75",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window17574"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD30FD65_D29D_659D_41C4_9FA022137F8A"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 149.04,
   "yaw": -90.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A"
  },
  {
   "backwardYaw": 17.33,
   "yaw": 92.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F"
  }
 ],
 "label": "6. jembatan lumpur lapindo",
 "id": "panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A",
 "overlays": [
  "this.overlay_EC279EEF_F388_D60A_41E6_74AC744A4D38",
  "this.overlay_ECE246DD_F38F_F60E_41E6_3CFD7B531AA5",
  "this.overlay_E38D3E5C_F89C_6E0B_41E4_2A3D0F00F55D",
  "this.overlay_E51376EC_F894_5E0E_41E6_9414DE52C0D7"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 3.84,
 "showEasing": "cubic_in",
 "yaw": -29.13,
 "pitch": -11.2,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4_0_2.jpg",
    "width": 630,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "id": "FadeOutEffect_153E160C_0277_3F85_417F_9815BF49C21F",
 "easing": "cubic_out",
 "class": "FadeOutEffect",
 "duration": 500
},
{
 "initialPosition": {
  "yaw": 19.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC65AF29_D29D_6592_41E4_2F233731E13C"
},
{
 "height": 1080,
 "label": "20260618_124610 (1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E6A1023F_F79C_568F_41ED_B7F233AFE107_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E6A1023F_F79C_568F_41ED_B7F233AFE107",
 "class": "Video",
 "video": {
  "width": 1920,
  "height": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_E6A1023F_F79C_568F_41ED_B7F233AFE107.mp4"
 }
},
{
 "label": "Photo Album 20260618_115222",
 "id": "album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071",
 "thumbnailUrl": "media/album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071_AlbumPlayList"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "id": "window_E2F62A12_F89C_D61E_41D1_1AA874E07368",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window68083"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Kandungan Lumpur Lapindo",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_E2F4EA12_F89C_D61E_41D8_E7CE78514E4D",
  "this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "close": "this.playList_DD2B5D70_D29D_6472_41D0_FC7FA5264F69.set('selectedIndex', -1);",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titleFontFamily": "Book Antiqua",
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "bodyBackgroundColorDirection": "vertical"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E1B24DE1_F78C_3209_41E2_14787C3F4342",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window42077"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Lokasi dan Sejarah Kayutangan",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD52FD80_D29D_6492_41E1_3B5DBB14DFBA_0",
  "this.htmlText_E1B39DE1_F78C_3209_41B2_594756A3A146"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.64,
   "yaw": 144.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0"
  }
 ],
 "label": "24. tengah alun-alun",
 "id": "panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A",
 "overlays": [
  "this.overlay_E297616A_F289_6A3E_41E1_D70579172B63",
  "this.overlay_E122C846_F79C_320F_41E4_C085C670DC6E"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "label": "Photo Album 20260618_115222",
 "id": "album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465",
 "thumbnailUrl": "media/album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465_AlbumPlayList"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_8A030EBD_938B_F9D6_41D3_14CD70F335A4",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window25619"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD2BBD70_D29D_6472_41E7_F36A39EDCACF"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "label": "Photo Album WhatsApp Image 2026-06-24 at 10.08.16",
 "id": "album_F80085AA_F794_5DB6_41DA_49B1D02EC45F",
 "thumbnailUrl": "media/album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_AlbumPlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -92.05,
   "yaw": 54.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA"
  }
 ],
 "label": "1. pintu masuk lapindo",
 "id": "panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D",
 "overlays": [
  "this.overlay_E2ED6A74_F2BB_5987_41B8_1AB349522034",
  "this.overlay_FEDB9804_F396_7ACB_41E2_50BFBD61C00B",
  "this.popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF",
  "this.overlay_E13AC22F_F87C_5602_41EC_FC1B5A59C370"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_camera"
},
{
 "initialPosition": {
  "yaw": 122.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2D46DDE_D29D_64AF_41E3_91206C4F2590"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_B551BFAA_94BD_37F3_41C9_C8A8AE9D68E9",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window39043"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#B2B2B2",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "",
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "footerBackgroundOpacity": 0,
 "children": [
  "this.container_DD59CD80_D29D_6492_41E7_78A7F538D8D0"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "levels": [
  {
   "url": "media/popup_E3D9C12D_F78C_5271_41E1_B9673E388232_0_0.jpeg",
   "width": 960,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_E3D9C12D_F78C_5271_41E1_B9673E388232_0_1.jpeg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_E3D9C12D_F78C_5271_41E1_B9673E388232_0_2.jpeg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_EE162341_F7F4_5628_41A9_59E77B590187",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_camera"
},
{
 "initialPosition": {
  "yaw": 78.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCEFEE99_D29D_64B5_41C3_2D8B420DE10E"
},
{
 "initialPosition": {
  "yaw": -10.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC08DEBD_D29D_64F2_41D2_5BFD121F52BF"
},
{
 "height": 430,
 "duration": 5000,
 "class": "Photo",
 "label": "Jarak tanggul lapindo dengan permukiman",
 "id": "photo_E248DF44_F874_2E04_41DE_F228B348D3F4",
 "thumbnailUrl": "media/photo_E248DF44_F874_2E04_41DE_F228B348D3F4_t.png",
 "width": 851,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E248DF44_F874_2E04_41DE_F228B348D3F4.PNG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -35.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCD78E6E_D29D_646F_41E1_B2CEF2553717"
},
{
 "initialPosition": {
  "yaw": -25.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC691F19_D29D_65B5_41BE_C8BA3B92200C"
},
{
 "height": 1973,
 "duration": 5000,
 "class": "Photo",
 "label": "20260419_092507",
 "id": "photo_9E1B12AB_9387_2851_41D7_6882E51BFEEF",
 "thumbnailUrl": "media/photo_9E1B12AB_9387_2851_41D7_6882E51BFEEF_t.jpg",
 "width": 1110,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_9E1B12AB_9387_2851_41D7_6882E51BFEEF.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.81,
   "yaw": -109.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7"
  }
 ],
 "label": "9. pembuangan lapindo sungai porong",
 "id": "panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D",
 "overlays": [
  "this.overlay_E28F9C7D_F289_DA40_41D2_2957787CEB3F",
  "this.overlay_E30DCABD_F794_364D_41D1_1F3CEB7F44E5",
  "this.popup_E38741ED_F794_35CD_41D6_B03CBBB4F13F",
  "this.overlay_E3DE9EEB_F8B5_EE08_41EB_231C8185EBDA"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -160.37,
   "yaw": 66.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7"
  }
 ],
 "label": "7. deket permukiman resain",
 "id": "panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19",
 "overlays": [
  "this.overlay_D3099588_F389_EAF6_41EE_32B37A713397",
  "this.overlay_DFBE964F_F399_D60A_41AF_75CA8D7AD7D9",
  "this.overlay_E3A96FD4_F88D_EE18_41A1_7681BB3E145F"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 632,
 "duration": 5000,
 "class": "Photo",
 "label": "Wisata Bahari Tlocor.jpg",
 "id": "photo_E70AFE80_F894_6EF5_41E0_EADF5BCF7905",
 "thumbnailUrl": "media/photo_E70AFE80_F894_6EF5_41E0_EADF5BCF7905_t.jpg",
 "width": 1116,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E70AFE80_F894_6EF5_41E0_EADF5BCF7905.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "levels": [
  {
   "url": "media/zoomImage_1A3310D5_0249_3487_4170_4DAFC6411C36_0_0.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/zoomImage_1A3310D5_0249_3487_4170_4DAFC6411C36_0_1.jpeg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_1A3310D5_0249_3487_4170_4DAFC6411C36_0_2.jpeg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_153EB60C_0277_3F85_4151_D3C9D01C0610",
 "class": "ImageResource"
},
{
 "height": 1280,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-23 at 15.32.01",
 "id": "album_E322522E_F396_6ED7_41CE_6117BFB06450_0",
 "thumbnailUrl": "media/album_E322522E_F396_6ED7_41CE_6117BFB06450_0_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_E322522E_F396_6ED7_41CE_6117BFB06450_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F814C08A_F289_E978_41C9_BE632721EB42_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_camera"
},
{
 "height": 1836,
 "duration": 5000,
 "class": "Photo",
 "label": "20260620_102016",
 "id": "photo_E3428E8E_F797_EE26_41D1_4ED184902F7D",
 "thumbnailUrl": "media/photo_E3428E8E_F797_EE26_41D1_4ED184902F7D_t.jpg",
 "width": 3264,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E3428E8E_F797_EE26_41D1_4ED184902F7D.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "id": "FadeOutEffect_153E960C_0277_3F85_416C_53D4E576A3A3",
 "easing": "cubic_out",
 "class": "FadeOutEffect",
 "duration": 500
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.07,
   "yaw": 17.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A"
  },
  {
   "backwardYaw": 66.95,
   "yaw": -160.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19"
  }
 ],
 "label": "20260620_133935_446",
 "id": "panorama_EE782535_F388_EA1E_41D4_7E8E3727981F",
 "overlays": [
  "this.overlay_D1C39DAF_F389_3A0A_41EC_BED5E1851E9A",
  "this.overlay_EC5A249A_F38B_2A0A_41E9_9EB0A1878F0E",
  "this.overlay_E330D661_F89C_DE3B_41E0_1E729BFB4AF4",
  "this.overlay_E308BE25_F894_EE3B_41E6_978C7EFCDBE5"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 1080,
 "label": "20260618_121906",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E3C2E78A_F894_5E09_41E3_59F594D0586A_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E3C2E78A_F894_5E09_41E3_59F594D0586A",
 "class": "Video",
 "video": {
  "width": 1920,
  "height": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_E3C2E78A_F894_5E09_41E3_59F594D0586A.mp4"
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.35,
   "yaw": 165.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD"
  }
 ],
 "label": "20. pintu masuk malabar belakang",
 "id": "panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF",
 "overlays": [
  "this.overlay_DA1F97BF_F3B9_560A_41D0_6E6EF320D69E"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 16.11,
 "showEasing": "cubic_in",
 "yaw": 59.58,
 "pitch": -0.93,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 498
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "height": 600,
 "duration": 5000,
 "class": "Photo",
 "label": "pasar-besar-malang",
 "id": "photo_E25F066F_F78C_FEEF_41E6_B665E431866B",
 "thumbnailUrl": "media/photo_E25F066F_F78C_FEEF_41E6_B665E431866B_t.jpg",
 "width": 900,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E25F066F_F78C_FEEF_41E6_B665E431866B.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_camera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD30FD65_D29D_659D_41C4_9FA022137F8A, [this.htmltext_DD309D65_D29D_659D_41E4_06BDA46D232F,this.component_DD300D70_D29D_6472_41E0_6226B4576833,this.component_DD37FD70_D29D_6472_41DA_C2761F22A86B], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD312D65_D29D_659D_41E4_5C445C448896"
 ],
 "id": "playList_DF1EAD0E_D29A_E5AF_41E8_7C6F43A95078"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_EDEEDA61_F794_5603_41DF_74BBB0A5B6EC",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window49393"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Pusat Perbelanjaan Modern ",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD53DD80_D29D_6492_41D2_E0312942A348_0",
  "this.htmlText_EDEF1A61_F794_5603_41DF_C3298A073E16"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "initialPosition": {
  "yaw": -113.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCA1AE4C_D29D_6793_41E1_ACFCF4C2A2BB"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.57,
   "yaw": -0.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802"
  }
 ],
 "label": "15. pintu masuk malabar 2",
 "id": "panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B",
 "overlays": [
  "this.overlay_D1E5066C_F3BB_360E_41DD_3E7EA6C00666",
  "this.overlay_E6AE3960_F7B4_72A4_41EE_EA4D7EF76B5F",
  "this.overlay_DA046196_F874_3211_41E8_15AA771C6504",
  "this.popup_C39D3FC2_F98C_6E71_41E1_3810998690E1"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 768,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur Lapindo 2006.jpg",
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_0",
 "thumbnailUrl": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_0_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "data": {
  "name": "Window679"
 },
 "shadowSpread": 1,
 "id": "window_D91EC83A_D295_ABF7_41DD_AED1EA9DC503",
 "closeButtonPaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "modal": true,
 "closeButtonPaddingBottom": 5,
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "headerPaddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 0,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#888888",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyPaddingLeft": 0,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "closeButtonRollOverIconLineWidth": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonIconWidth": 20,
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "headerBackgroundOpacity": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "height": 1110,
 "duration": 25000,
 "class": "Photo",
 "label": "20260618_121332",
 "id": "album_9FE280C0_9387_29CE_41B5_86E237B3B7F6",
 "width": 1973,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9FE280C0_9387_29CE_41B5_86E237B3B7F6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.video_E6A1023F_F79C_568F_41ED_B7F233AFE107",
   "start": "this.viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DF4A8D42_D29A_E596_41D8_26940E0460A5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DF4A8D42_D29A_E596_41D8_26940E0460A5, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1VideoPlayer)",
   "player": "this.viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1VideoPlayer"
  }
 ],
 "id": "PlayList_DF4A8D42_D29A_E596_41D8_26940E0460A5",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.39,
   "yaw": 90.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B"
  },
  {
   "backwardYaw": -57.66,
   "yaw": -97.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E"
  }
 ],
 "label": "16. jalan turun malabar",
 "id": "panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802",
 "overlays": [
  "this.overlay_D58B1CFF_F3B9_3A0A_41E9_76FD55957C4B",
  "this.overlay_D1B3DB66_F3B9_7E3D_41EB_3FF1BAF4C2BB"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 65.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCDD2E62_D29D_6797_41C0_F6600AADA9FF"
},
{
 "label": "Photo Album 20260620_103822",
 "id": "album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9",
 "thumbnailUrl": "media/album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_camera"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.94,
   "yaw": 47.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A"
  }
 ],
 "label": "22. pasar besar",
 "id": "panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553",
 "overlays": [
  "this.overlay_DB590279_F3B7_6E16_41A2_6ABB09495FB8",
  "this.overlay_D42D5765_F389_563E_41DC_730DFD00451F",
  "this.overlay_E353AA52_F78C_3631_41DA_D9C7983A6C80",
  "this.overlay_C3D5F669_F9FC_5E30_41DF_6DF15202C10B",
  "this.popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 70.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DDDB2F68_D29D_6593_41E4_9E380FE8C3EF"
},
{
 "label": "Photo Album Lumpur Lapindo 2006.jpg",
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE",
 "thumbnailUrl": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_AlbumPlayList"
},
{
 "height": 404,
 "duration": 5000,
 "class": "Photo",
 "label": "Lokasi Lumpur Lapindo",
 "id": "album_E013B05F_F874_3202_41B9_D50B38B9771F_0",
 "thumbnailUrl": "media/album_E013B05F_F874_3202_41B9_D50B38B9771F_0_t.png",
 "width": 850,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_E013B05F_F874_3202_41B9_D50B38B9771F_0.PNG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_camera"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.29,
   "yaw": 164.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD"
  },
  {
   "backwardYaw": 169.63,
   "yaw": -74.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E"
  }
 ],
 "label": "18. penampungan air malabar",
 "id": "panorama_F8F37192_F289_2B6A_41C3_844097E623FE",
 "overlays": [
  "this.overlay_DA772172_F3B9_2A1A_41D3_BA1F977A2B3F",
  "this.overlay_D7BDF892_F3B9_5A1A_41C4_2417E898B6BA",
  "this.overlay_E1787996_F794_7227_41E9_046DFB28B6D3"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 47.5,
   "yaw": 104.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553"
  }
 ],
 "label": "23. ratu",
 "id": "panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E",
 "overlays": [
  "this.overlay_D5037A20_F389_7E36_41EB_BD48E7E9F3F6",
  "this.overlay_E2EDF156_F7B4_3233_41E4_F074F6CBB8DC"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_camera"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_126DC4BA_01DB_3C8D_4161_FBA62CDC4832",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window20529"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Lokasi dan Sejarah Hutan Malabar",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_126C74BA_01DB_3C8D_4171_E82A898BBFE9"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "height": 768,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur lapindo 2021",
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_3",
 "thumbnailUrl": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_3_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 133.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2A1CDBE_D29D_64EF_41DE_BAA5F7FF1D96"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -109.33,
   "yaw": -46.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D"
  },
  {
   "backwardYaw": -114.32,
   "yaw": 154.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C"
  }
 ],
 "label": "8. jalan menuju sungai porong",
 "id": "panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7",
 "overlays": [
  "this.overlay_E01A0B8C_F28B_5ECE_41D3_B1DE2D2976CA",
  "this.overlay_EE6A969D_F398_F60E_41E5_66C860787AED"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 1110,
 "duration": 5000,
 "class": "Photo",
 "label": "20260618_114614",
 "id": "album_9E88A9E2_9387_1BD2_41C7_B41D2D6FDC69",
 "width": 1973,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9E88A9E2_9387_1BD2_41C7_B41D2D6FDC69.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 42.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCE53EA5_D29D_649D_4198_919A706FBFB2"
},
{
 "height": 1280,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 11.06.41",
 "id": "photo_E356EEAF_F78C_6E64_41E2_B370D3FEAE7C",
 "thumbnailUrl": "media/photo_E356EEAF_F78C_6E64_41E2_B370D3FEAE7C_t.jpg",
 "width": 720,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E356EEAF_F78C_6E64_41E2_B370D3FEAE7C.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_camera"
},
{
 "label": "Photo Album 20260618_130908",
 "id": "album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF",
 "thumbnailUrl": "media/album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": -15.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC5D1EEA_D29D_6496_41D5_85D190458940"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 6.09,
 "showEasing": "cubic_in",
 "yaw": 23.34,
 "pitch": 6.82,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "height": 1280,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 11.44.04",
 "id": "photo_E1A42F5F_F794_2E3B_41D0_A606D6DDC0BC",
 "thumbnailUrl": "media/photo_E1A42F5F_F794_2E3B_41D0_A606D6DDC0BC_t.jpg",
 "width": 720,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E1A42F5F_F794_2E3B_41D0_A606D6DDC0BC.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "label": "Photo Album Wisata Bahari Tlocor.jpg",
 "id": "album_E5D412AE_F893_D60D_41D1_3DA893E610D4",
 "thumbnailUrl": "media/album_E5D412AE_F893_D60D_41D1_3DA893E610D4_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4_AlbumPlayList"
},
{
 "height": 720,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 10.08.16",
 "id": "album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_0",
 "thumbnailUrl": "media/album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_0_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E21CA963_F79D_F219_41CF_220C5E5496A6",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window30372"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Jenis Vegetasi ",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD243D80_D29D_6492_41E3_1D97E926911E_0",
  "this.htmlText_E21E897A_F79D_F2EB_41C1_1E28841AB8C5"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "levels": [
  {
   "url": "media/zoomImage_180D5643_0974_8DB6_4190_A04FA4844056_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/zoomImage_180D5643_0974_8DB6_4190_A04FA4844056_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_180D5643_0974_8DB6_4190_A04FA4844056_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_18B42ABE_097B_7ACD_4188_0AAF24F9A1A9",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_camera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD2CDD80_D29D_6492_41E1_7BE437673D54, [this.htmltext_DD2C7D80_D29D_6492_41E7_8B69B2AE2C47,this.component_DD23DD80_D29D_6492_41D6_DDC3514C6352,this.component_DD23CD80_D29D_6492_41E6_070152CC038A], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD2D0D80_D29D_6492_4199_B55E799F8660"
 ],
 "id": "playList_DF095D18_D29A_E5B3_41BC_4041FF5EAA5D"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E2A83387_F89D_D606_41D8_031DFF0ED0FA",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window66712"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Penyebab Lumpur Lapindo",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_E2ABE38C_F89D_D60A_41EA_3B773D9E0DAC"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "label": "Photo Album Pulau Lusi 2006",
 "id": "album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88",
 "thumbnailUrl": "media/album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_AlbumPlayList"
},
{
 "height": 1600,
 "duration": 5000,
 "class": "Photo",
 "label": "WhatsApp Image 2026-06-24 at 11.42.59",
 "id": "photo_E1F680FE_F794_53FD_41BF_715182BAEEE2",
 "thumbnailUrl": "media/photo_E1F680FE_F794_53FD_41BF_715182BAEEE2_t.jpg",
 "width": 900,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E1F680FE_F794_53FD_41BF_715182BAEEE2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 768,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur lapindo 2016",
 "id": "photo_B1EFA7D1_94BB_37AE_41E0_FFAD458EB4EE",
 "thumbnailUrl": "media/photo_B1EFA7D1_94BB_37AE_41E0_FFAD458EB4EE_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_B1EFA7D1_94BB_37AE_41E0_FFAD458EB4EE.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0",
   "start": "this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD2B5D70_D29D_6472_41D0_FC7FA5264F69, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD2B5D70_D29D_6472_41D0_FC7FA5264F69, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165VideoPlayer)",
   "player": "this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165VideoPlayer"
  }
 ],
 "id": "playList_DD2B5D70_D29D_6472_41D0_FC7FA5264F69",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.03,
   "yaw": 134.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825"
  }
 ],
 "label": "12. pintu masuk wisata bahari",
 "id": "panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704",
 "overlays": [
  "this.overlay_D1121037_F3B7_2A1A_41D7_2D08602E1A26",
  "this.overlay_FC897C99_F396_DBFD_41DA_9313415C4292",
  "this.overlay_E3F25002_F396_6ACF_41D9_2ACED55305CC",
  "this.popup_E38560B4_F78C_F256_41A5_7535B20D4D5E",
  "this.popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C",
  "this.overlay_E662EE50_F89C_EE15_41E7_5A667D9E088C"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "height": 1836,
 "duration": 5000,
 "class": "Photo",
 "label": "20260620_103805",
 "id": "photo_E0492C0E_F7BC_3217_41E9_8F96F538725F",
 "thumbnailUrl": "media/photo_E0492C0E_F7BC_3217_41E9_8F96F538725F_t.jpg",
 "width": 3264,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E0492C0E_F7BC_3217_41E9_8F96F538725F.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_camera"
},
{
 "height": 1283,
 "duration": 5000,
 "class": "Photo",
 "label": "Pemkot-Malang-Tunda-Pembangunan-Mall-UMKM-Kenapad28b5e11618ad4c8",
 "id": "photo_9E90B698_9387_687F_41C5_2DAA11E91976",
 "thumbnailUrl": "media/photo_9E90B698_9387_687F_41C5_2DAA11E91976_t.jpg",
 "width": 1710,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_9E90B698_9387_687F_41C5_2DAA11E91976.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 3.4,
 "showEasing": "cubic_in",
 "yaw": 88.47,
 "pitch": -2.29,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.33,
   "yaw": 129.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C"
  },
  {
   "backwardYaw": -137.54,
   "yaw": -158.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2"
  }
 ],
 "label": "27 permukiman kayutangan",
 "id": "panorama_F814C08A_F289_E978_41C9_BE632721EB42",
 "overlays": [
  "this.overlay_E1449EFF_F2B9_3610_41CA_27D5B9736C8F",
  "this.overlay_DB1FFCFC_F38B_5A0E_41DA_C99EE3744273",
  "this.overlay_EF88A7D7_F794_3E0B_41E8_1CB933DB1441"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_camera"
},
{
 "height": 3264,
 "duration": 5000,
 "class": "Photo",
 "label": "20260620_103822",
 "id": "album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_0",
 "thumbnailUrl": "media/album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_0_t.jpg",
 "width": 1836,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -89.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC29DEDA_D29D_64B7_41D7_1D5D4373D6B5"
},
{
 "height": 632,
 "duration": 25000,
 "class": "Photo",
 "label": "Wisata Bahari Tlocor.jpg",
 "id": "album_E5D412AE_F893_D60D_41D1_3DA893E610D4_0",
 "thumbnailUrl": "media/album_E5D412AE_F893_D60D_41D1_3DA893E610D4_0_t.jpg",
 "width": 1116,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_E5D412AE_F893_D60D_41D1_3DA893E610D4_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_DA47C704_F98C_5FF2_41DB_CAD85AB394B8",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 16.1,
 "showEasing": "cubic_in",
 "yaw": 41.42,
 "pitch": -2.16,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_DA47C704_F98C_5FF2_41DB_CAD85AB394B8_0_0.png",
    "width": 569,
    "class": "ImageResourceLevel",
    "height": 279
   },
   {
    "url": "media/popup_DA47C704_F98C_5FF2_41DB_CAD85AB394B8_0_1.png",
    "width": 511,
    "class": "ImageResourceLevel",
    "height": 251
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "levels": [
  {
   "url": "media/zoomImage_1593E8DA_0277_548C_417F_92E0C46883DA_0_0.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/zoomImage_1593E8DA_0277_548C_417F_92E0C46883DA_0_1.jpeg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_1593E8DA_0277_548C_417F_92E0C46883DA_0_2.jpeg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_153E360C_0277_3F85_4153_13B10E76DAEC",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_camera"
},
{
 "label": "Photo Album 11",
 "id": "album_B9110E12_F98C_6E10_41B9_66C9C3E7E227",
 "thumbnailUrl": "media/album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_AlbumPlayList"
},
{
 "height": 892,
 "duration": 5000,
 "class": "Photo",
 "label": "Lumpur Lapindo 2026",
 "id": "photo_801EE3A7_9387_2F8A_41D4_66F59F36F8DD",
 "thumbnailUrl": "media/photo_801EE3A7_9387_2F8A_41D4_66F59F36F8DD_t.jpg",
 "width": 1485,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_801EE3A7_9387_2F8A_41D4_66F59F36F8DD.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E10A351D_F78C_F23E_41E3_D3CA61B0E99A",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window43776"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Sungai Sukun ",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD501D80_D29D_6492_41C2_ADDDAB5F1BA8_0",
  "this.image_uidDD501D80_D29D_6492_41C2_ADDDAB5F1BA8_1",
  "this.htmlText_E108151D_F78C_F23E_41CB_E97F33568B1F"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "pitch": -0.34,
 "id": "popup_E3F5E18E_F78D_F232_4194_D6DAD63FFC44",
 "rotationZ": 0,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 16.11,
 "showEasing": "cubic_in",
 "yaw": 127.06,
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 478,
  "height": 850,
  "class": "VideoResource",
  "mp4Url": "media/video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1.mp4"
 }
},
{
 "items": [
  {
   "media": "this.panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9EDC0C3E_9387_18B2_41A7_07C0672E4782_camera"
  },
  {
   "media": "this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_camera"
  },
  {
   "media": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_camera"
  },
  {
   "media": "this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_camera"
  },
  {
   "media": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_camera"
  },
  {
   "media": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_camera"
  },
  {
   "media": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_camera"
  },
  {
   "media": "this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_camera"
  },
  {
   "media": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_camera"
  },
  {
   "media": "this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_camera"
  },
  {
   "media": "this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_camera"
  },
  {
   "media": "this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_camera"
  },
  {
   "media": "this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_camera"
  },
  {
   "media": "this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_camera"
  },
  {
   "media": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_camera"
  },
  {
   "media": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_camera"
  },
  {
   "media": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE_camera"
  },
  {
   "media": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_camera"
  },
  {
   "media": "this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_camera"
  },
  {
   "media": "this.panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_camera"
  },
  {
   "media": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_camera"
  },
  {
   "media": "this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_camera"
  },
  {
   "media": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_camera"
  },
  {
   "media": "this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_camera"
  },
  {
   "media": "this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_camera"
  },
  {
   "media": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F814C08A_F289_E978_41C9_BE632721EB42_camera"
  },
  {
   "media": "this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.album_E322522E_F396_6ED7_41CE_6117BFB06450",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_E6A1023F_F79C_568F_41ED_B7F233AFE107",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "media": "this.album_F96B41C9_F794_D5F3_41EE_6A24455388C0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "media": "this.album_F80085AA_F794_5DB6_41DA_49B1D02EC45F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "media": "this.album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "media": "this.album_E013B05F_F874_3202_41B9_D50B38B9771F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_E37489B3_F88C_D218_41E4_A7BA8AD5B1C0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "media": "this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "media": "this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "media": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "media": "this.album_C16A5A2A_F994_3631_41E2_596376131D6D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "media": "this.album_B9110E12_F98C_6E10_41B9_66C9C3E7E227",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "media": "this.album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "media": "this.album_14228B36_024F_7584_4172_48B43AD2F408",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50)",
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_88B08704_939A_E8B6_41DB_496F8458CA4D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88B08704_939A_E8B6_41DB_496F8458CA4D_camera"
  },
  {
   "media": "this.panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88CA9089_9385_29B1_41C7_B5E7F2C75FF7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 52, 0)",
   "media": "this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "pitch": -4.27,
 "id": "popup_E38741ED_F794_35CD_41D6_B03CBBB4F13F",
 "rotationZ": 0,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 15.95,
 "showEasing": "cubic_in",
 "yaw": 18.8,
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "height": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_E6A1023F_F79C_568F_41ED_B7F233AFE107.mp4"
 }
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD20FD80_D29D_6492_41C4_CC09761152C6, [this.htmltext_DD208D80_D29D_6492_41AA_D07AD65BA516,this.component_DD27BD80_D29D_6492_41CC_7687E387E59B,this.component_DD27AD80_D29D_6492_41E1_90F039EDCD3C], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD214D80_D29D_6492_41DF_3E8DEF4426C8"
 ],
 "id": "playList_DD21AD80_D29D_6492_41D9_D56AC9B3F718"
},
{
 "height": 768,
 "duration": 25000,
 "class": "Photo",
 "label": "PL 2021",
 "id": "photo_B1080968_948E_FB7F_41DB_EE887F0D85D9",
 "thumbnailUrl": "media/photo_B1080968_948E_FB7F_41DB_EE887F0D85D9_t.jpg",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_B1080968_948E_FB7F_41DB_EE887F0D85D9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F37192_F289_2B6A_41C3_844097E623FE_camera"
},
{
 "initialPosition": {
  "yaw": 105.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DDB19F48_D29D_6593_41CD_600EC31AB7B2"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 16.1,
 "showEasing": "cubic_in",
 "yaw": 41.42,
 "pitch": -2.16,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 504
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD3CCD65_D29D_659D_41DB_CA9816A90E93, [this.htmltext_DD3C9D65_D29D_659D_41E9_103E2D33B16B,this.component_DD33FD65_D29D_659D_41E5_2B48DF7F0393,this.component_DD33ED65_D29D_659D_41D5_591641BC1445], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD3D0D65_D29D_659D_41DE_7D892E2D09F5"
 ],
 "id": "playList_DF192D06_D29A_E59F_41DB_C615444D2F06"
},
{
 "height": 1890,
 "duration": 5000,
 "class": "Photo",
 "label": "20260618_115222",
 "id": "album_9E9BD1E7_9387_2BD1_41D0_724838BD76C2",
 "width": 1163,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_9E9BD1E7_9387_2BD1_41D0_724838BD76C2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hideDuration": 500,
 "id": "popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 14.27,
 "showEasing": "cubic_in",
 "yaw": 41.87,
 "pitch": 27.67,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "showDuration": 500
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_DD2BBD70_D29D_6472_41E7_F36A39EDCACF, [this.htmltext_DD2B5D70_D29D_6472_41D7_F677C7905E73,this.component_DD2A8D70_D29D_6472_41E7_C076DFD2A0DF,this.component_DD2A7D70_D29D_6472_41D2_704B920325AC], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_DD2BFD70_D29D_6472_41C9_E52ACDBDB457"
 ],
 "id": "playList_DF128D14_D29A_E5B3_41DB_EAF6CAA0B7D7"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_camera"
},
{
 "height": 2296,
 "duration": 5000,
 "class": "Photo",
 "label": "20260620_102010",
 "id": "album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_0",
 "thumbnailUrl": "media/album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_0_t.jpg",
 "width": 4080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "label": "Photo Album peta kampung warnawarni 3d dan arema",
 "id": "album_B417E01D_94BF_28D1_41E0_D79B04CC2A09",
 "thumbnailUrl": "media/album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_AlbumPlayList"
},
{
 "levels": [
  {
   "url": "media/popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4_0_0.jpg",
   "width": 2296,
   "class": "ImageResourceLevel",
   "height": 3731
  },
  {
   "url": "media/popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4_0_1.jpg",
   "width": 1260,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4_0_2.jpg",
   "width": 630,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4_0_3.jpg",
   "width": 315,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_E00A3C78_F794_32D6_41D3_E6B5CA5E9E6C",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 162.67,
   "yaw": -76.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA"
  }
 ],
 "label": "3. sesudah pintu masuk",
 "id": "panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A",
 "overlays": [
  "this.overlay_FDA36081_F289_2A93_41D5_86FC6D09083A",
  "this.overlay_E26E1F0B_F88C_2E0C_41D2_28E54615D2EF"
 ],
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "thumbnailUrl": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_EE894683_F794_3E04_41E0_FECCD99C1136",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window46055"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "bold",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Permukiman Kayutangan",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.image_uidDD514D80_D29D_6492_41AB_B31127279766_0",
  "this.htmlText_EE8F5683_F794_3E04_41E0_820DDAE887E5"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "shadowSpread": 1,
 "id": "window_E343824E_F88C_3609_4190_65E16BEF477A",
 "width": 400,
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window71756"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonIconColor": "#000000",
 "titlePaddingTop": 5,
 "layout": "vertical",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "titleFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "title": "Desa Terdampak",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "titleFontSize": "2vmin",
 "bodyPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingTop": 5,
 "bodyPaddingLeft": 5,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowBlurRadius": 6,
 "shadow": true,
 "children": [
  "this.htmlText_E37D524E_F88C_3609_41E3_83B76F9C987F",
  "this.image_uidDD29AD70_D29D_6472_41DE_474E24E62228_1"
 ],
 "titlePaddingRight": 5,
 "bodyBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColor": [],
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyPaddingRight": 5,
 "titlePaddingLeft": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "paddingTop": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "paddingBottom": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "titleFontFamily": "Book Antiqua",
 "bodyBackgroundColorDirection": "vertical"
},
{
 "label": "Photo Album 20260618_121112",
 "id": "album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80",
 "thumbnailUrl": "media/album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_AlbumPlayList"
},
{
 "label": "Photo Album WhatsApp Image 2026-06-23 at 15.32.01",
 "id": "album_E322522E_F396_6ED7_41CE_6117BFB06450",
 "thumbnailUrl": "media/album_E322522E_F396_6ED7_41CE_6117BFB06450_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_E322522E_F396_6ED7_41CE_6117BFB06450_AlbumPlayList"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#000000",
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 34,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 140,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--STICKER"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 641,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 328.7,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--LOCATION"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "--REALTOR"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_88DDD1A8_938A_EBFE_41D0_6C5047F65100",
 "left": "0.16%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "88.54%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "-6.89%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 58.65,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 7,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-Container Icons 1"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "data": {
  "name": "UIComponent2099"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "ZoomImage",
 "data": {
  "name": "ZoomImage2100"
 }
},
{
 "iconWidth": 20,
 "data": {
  "name": "CloseButton2101"
 },
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "minHeight": 0,
 "borderColor": "#000000",
 "pressedIconColor": "#888888",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "iconColor": "#000000",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "layout": "horizontal",
 "fontStyle": "normal",
 "paddingTop": 5,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "CloseButton",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "items": [
  {
   "media": "this.album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.69"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FC16B860_F3AE_5B4B_41D5_3EDAEDCB0F49_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD35FD70_D29D_6472_41C2_C43B751621CF",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD353D70_D29D_6472_41D2_35CB294757C4"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2054"
   }
  },
  "this.component_DD348D70_D29D_6472_41E2_B264867FF7C2",
  "this.component_DD347D70_D29D_6472_41E3_232FBC2D3C13"
 ],
 "id": "container_DD358D70_D29D_6472_41E9_514270BE8130",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2053"
 }
},
{
 "items": [
  {
   "media": "this.album_E013B05F_F874_3202_41B9_D50B38B9771F_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_E081B4C1_F87C_7201_418E_CD6CADA9A568",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_E248DF44_F874_2E04_41DE_F228B348D3F4",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E013B05F_F874_3202_41B9_D50B38B9771F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD2D4D80_D29D_6492_41E4_35D2445A597C",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD2C7D80_D29D_6492_41E7_8B69B2AE2C47"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2069"
   }
  },
  "this.component_DD23DD80_D29D_6492_41D6_DDC3514C6352",
  "this.component_DD23CD80_D29D_6492_41E6_070152CC038A"
 ],
 "id": "container_DD2CDD80_D29D_6492_41E1_7BE437673D54",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2068"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_82ACA0B0_9387_284E_41CB_AED8B88D0E28",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Times New Roman', Times, serif;\">Memahami geografi sebagai ilmu dan studi, objek, pendekatan dan prinsip; sejarah geografi, ruang lingkup, pendekatan penelitian geografi, dan peran geografi; merancang dan menerapkan pendidikan geografi yang inovatif untuk pemecahan masalah pendidikan dan pembelajaran; terampil mengomunikasikan karya secara lisan maupun tulis; mengapresiasi pemikiran dan karya para geograf masa lalu, temuan dan hasil penelitian sebagai sumber inspirasi dan pengembangan gagasan penelitian</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText7328"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E2CB61C3_F88C_327D_41D5_1FD52891D64C",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Peristiwa Lumpur Lapindo terjadi di wilayah Porong, Kabupaten Sidoarjo, Jawa Timur, pada 29 Mei 2006. Semburan pertama muncul di dekat sumur pengeboran gas Banjar Panji-1 milik perusahaan PT Lapindo Brantas di Desa Siring, Kecamatan Porong. Peristiwa ini berdampak pada permukiman, lahan pertanian, kawasan industri, dan ruas Tol Surabaya-Gempol. Saat ini lumpur lapindo memiliki luas 1.200 Ha.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText63583"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "items": [
  {
   "media": "this.album_C16A5A2A_F994_3631_41E2_596376131D6D_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 0,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C16A5A2A_F994_3631_41E2_596376131D6D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A, this.camera_DCD78E6E_D29D_646F_41E1_B2CEF2553717); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.18,
   "hfov": 36.93
  }
 ],
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -150.64,
   "pitch": -26.18,
   "hfov": 36.93,
   "image": "this.AnimatedImageResource_DA1F3843_F388_DA7A_41E6_C42C357E5B18",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E39C49ED_F289_3A34_41CC_7C5EA4CDC3E2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 87.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.82,
   "hfov": 31.75
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 87.59,
   "pitch": -16.82,
   "hfov": 31.75,
   "image": "this.AnimatedImageResource_DA1F0843_F388_DA7A_41E2_5778362760CE",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA799691_F388_D616_41D6_EF3BAA1A15E8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EDEEDA61_F794_5603_41DF_74BBB0A5B6EC, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 58.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.29,
   "hfov": 13.6
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 58.02,
   "pitch": 3.29,
   "hfov": 13.6,
   "image": "this.AnimatedImageResource_E680C94A_F87C_3202_41D4_B65CDF7044B5",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE928C54_F794_5202_41B4_60155300EEBE"
},
{
 "items": [
  {
   "media": "this.album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.44"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E3C85461_F3AA_6B4D_41ED_52F2EAAF86D5_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD3D3D65_D29D_659D_41E5_82E3AC28BDE0",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD3C9D65_D29D_659D_41E9_103E2D33B16B"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2042"
   }
  },
  "this.component_DD33FD65_D29D_659D_41E5_2B48DF7F0393",
  "this.component_DD33ED65_D29D_659D_41D5_591641BC1445"
 ],
 "id": "container_DD3CCD65_D29D_659D_41DB_CA9816A90E93",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2041"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E5AFCA62_F894_5635_41EA_CE124C3E5054",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Lumpur yang dialirkan ke Sungai Porong mengalami pengendapan di kawasan hilir dan muara, sehingga berkontribusi terhadap perubahan bentang alam pesisir di sekitar Tlocor.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText83477"
 }
},
{
 "id": "image_uidDD223D80_D29D_6492_41D8_E20E17E99E8C_1",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E70AFE80_F894_6EF5_41E0_EADF5BCF7905.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2074"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802, this.camera_DD840F48_D29D_6593_41E1_6AD26FD93EB8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -57.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.1,
   "hfov": 24.74
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -57.66,
   "pitch": -19.1,
   "hfov": 24.74,
   "image": "this.AnimatedImageResource_DA1EC843_F388_DA7A_41E5_94153D9BC7C4",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2194C2D_F297_5A25_41E2_DF56A2439898"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE, this.camera_DDB19F48_D29D_6593_41CD_600EC31AB7B2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 169.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.19,
   "hfov": 26.57
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 169.63,
   "pitch": -30.19,
   "hfov": 26.57,
   "image": "this.AnimatedImageResource_DA1EA843_F388_DA7A_41E9_C7A4F591A6CA",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D02314A3_F3BF_6A3A_41E5_2AF10089ED87"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E373B4B9_F78D_D26E_41D6_003ACCEC8912, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -167.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.27,
   "hfov": 13
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -167.15,
   "pitch": -17.27,
   "hfov": 13,
   "image": "this.AnimatedImageResource_E67BE944_F87C_3206_41C4_B7EBFA56C4B6",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E063BC65_F78C_32E6_41DA_A10A75F76B7C"
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_D8D6835F_F88C_D60E_41CC_573BB8C8A8B6",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Kawasan Wisata Bahari Tlocor memiliki keterkaitan yang erat dengan Lumpur Lapindo, khususnya melalui keberadaan Pulau Lusi. Pulau Lusi terbentuk akibat akumulasi sedimen atau endapan Lumpur Sidoarjo (Lumpur Lapindo) yang terus mengalir menuju laut melalui Sungai Porong. Proses sedimentasi tersebut berlangsung secara berkelanjutan sehingga membentuk daratan baru yang saat ini dikenal sebagai Pulau Lusi.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText90335"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD215D80_D29D_6492_41DD_1F3771BFE758",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD208D80_D29D_6492_41AA_D07AD65BA516"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2077"
   }
  },
  "this.component_DD27BD80_D29D_6492_41CC_7687E387E59B",
  "this.component_DD27AD80_D29D_6492_41E1_90F039EDCD3C"
 ],
 "id": "container_DD20FD80_D29D_6492_41C4_CC09761152C6",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "50%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2076"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E3EB14CD_F8BC_5208_41E8_97F82A567CFF",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Lumpur Lapindo dialirkan ke Sungai Porong karena sungai ini merupakan satu-satunya sungai yang luas dan berdekatan dengan lokasi semburan. Namun, hal tersebut menyebabkan pencemaran dan mengancam biota sungai.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText74439"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704, this.camera_DDD73F68_D29D_6593_41E1_975779B53593); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -86.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.04,
   "hfov": 25.07
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -86.03,
   "pitch": -23.04,
   "hfov": 25.07,
   "image": "this.AnimatedImageResource_DA015843_F388_DA7A_41D6_DDFE5473AE5B",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D08EC0E2_F3B9_EA3A_41D6_6DB5534D9981"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E3F5E18E_F78D_F232_4194_D6DAD63FFC44, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_D91E183A_D295_ABF7_41DC_CDFC7AE96A86, this.video_F860DA4F_F78D_D6F2_41E9_E17BE024F8E1, this.PlayList_DF4D5D42_D29A_E596_41E2_BC01A08D4727, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 127.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.34,
   "hfov": 16.11
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_4_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -0.34,
   "yaw": 127.06,
   "hfov": 16.11
  }
 ],
 "id": "overlay_FCF96FBC_F3A9_D53B_41EB_90924A377578"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E5A98A62_F894_5635_41E1_C0FF7B71BBB7, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.61,
   "hfov": 8.19
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_5_0.png",
      "width": 202,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ]
   },
   "pitch": -48.61,
   "yaw": -158.84,
   "hfov": 8.19
  }
 ],
 "id": "overlay_E59BE253_F894_561A_41E9_C87D3A9531B6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_D8D4D35F_F88C_D60E_41CC_F364592806A1, null, false); this.playList_DD21AD80_D29D_6492_41D9_D56AC9B3F718.set('selectedIndex', 0); ",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 160.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.68,
   "hfov": 11.02
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_6_0.png",
      "width": 188,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ]
   },
   "pitch": -16.68,
   "yaw": 160.17,
   "hfov": 11.02
  }
 ],
 "id": "overlay_D958790D_F894_73F3_41EC_E04FF9C09F5A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA, this.camera_DDDB2F68_D29D_6593_41E4_9E380FE8C3EF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.32,
   "hfov": 20.29
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 0.88,
   "pitch": -20.32,
   "hfov": 20.29,
   "image": "this.AnimatedImageResource_D2D532BF_F398_EE0A_41EA_E69E429F2170",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E04B2702_F29F_57A8_41EC_58DAB1C5AB13"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A, this.camera_DDAD9F59_D29D_65B5_41E9_09FC43B7ABBC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 149.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.35,
   "hfov": 25.2
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 149.04,
   "pitch": -31.35,
   "hfov": 25.2,
   "image": "this.AnimatedImageResource_D2D4C2C0_F398_EE76_41EC_C4CC70D83DA6",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED7AA92C_F399_5A0E_41E0_9751F1F390A9"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_8679A41A_938B_68D2_41E0_988357C18E75, this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE, this.playList_DF1EAD0E_D29A_E5AF_41E8_7C6F43A95078, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "yaw": -97.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.08,
   "hfov": 7.55
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_3_0.png",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": 2.08,
   "yaw": -97.55,
   "hfov": 7.55
  }
 ],
 "id": "overlay_279CA8B7_364A_4024_41C7_38D604E3D6D5"
},
{
 "id": "image_uidDD266D80_D29D_6492_41E2_85BE321B21A1_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E356EEAF_F78C_6E64_41E2_B370D3FEAE7C.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2081"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E30D74B9_F78D_D26E_41D3_03B2673EFA56",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Daerah resapan air di Hutan Kota Malabar ditunjukkan oleh adanya tutupan vegetasi yang rapat serta lapisan serasah berupa daun-daun kering yang menutupi permukaan tanah. Serasah tersebut berfungsi memperlambat aliran permukaan, meningkatkan infiltrasi air hujan ke dalam tanah, serta menjaga kelembapan tanah. Keberadaan pohon-pohon dengan sistem perakaran yang berkembang baik juga mendukung fungsi Hutan Kota Malabar sebagai kawasan konservasi air dan penyedia jasa ekosistem di wilayah perkotaan. Hutan Kota Malabar memiliki peranan ekologis yang baik, terutama dalam mendukung fungsi resapan air dan menjaga keseimbangan lingkungan perkotaan (Alfian &amp; Kurniawan, 2010). Selain itu, keberadaan ruang terbuka hijau seperti Hutan Kota Malabar berkontribusi dalam menjaga iklim mikro dan mendukung keberlanjutan sumber daya air di kawasan perkotaan (Towary dkk., 2020)</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText25294"
 }
},
{
 "id": "image_uidDD5D3D80_D29D_6492_41A4_D9F07F55DF92_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_9F4B8E3C_9387_18B6_41BA_6F46F6EFC232.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2093"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E120B462_F794_5207_41D1_3D42B95E12A7",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\"><B>Lokasi Alun-Alun Kota Malang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Alun-Alun Merdeka Malang terletak di Jalan Merdeka Selatan, Kelurahan Kiduldalem, Kecamatan Klojen, Kota Malang, Jawa Timur. Kawasan ini berada di pusat Kota Malang dan dikelilingi oleh berbagai bangunan penting, seperti Masjid Jami' Malang, Kantor Pos Besar Malang, pusat perbelanjaan, serta kawasan perdagangan dan jasa. Letaknya yang strategis menjadikan Alun-Alun Malang sebagai pusat aktivitas sosial, ekonomi, dan pemerintahan kota (Junianto, 2010). </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\"><B>Sejarah Alun-Alun Kota Malang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Secara historis, Alun-Alun Kota Malang merupakan titik awal perkembangan Kota Malang. Kawasan ini mulai berkembang pada masa pemerintahan kolonial Belanda dan berfungsi sebagai pusat pemerintahan Kabupaten Malang pada masa lalu. Menurut Rahajeng, Antariksa, dan Usman (2009), kawasan alun-alun tidak hanya memiliki fungsi administratif, tetapi juga mengandung nilai filosofis, religius, politik, dan budaya sebagai identitas kota. Seiring perkembangan zaman, fungsi Alun-Alun Malang mengalami perubahan dari pusat pemerintahan tradisional menjadi ruang publik yang digunakan masyarakat untuk rekreasi, kegiatan sosial, dan berbagai acara kota (Rahajeng et al., 2009). </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Selain itu, Junianto (2010) menjelaskan bahwa perkembangan kawasan Alun-Alun Malang sangat dipengaruhi oleh pertumbuhan pusat bisnis kota. Perubahan tersebut menyebabkan kawasan alun-alun berkembang menjadi kawasan Central Business District (CBD) yang mendukung berbagai aktivitas komersial dan jasa di sekitarnya.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Sumber foto: Kelurahan Kidul Dalem. (2015, June 16). Mengintip Alun-alun Kota Malang di H-1 menjelang peresmian. Kelurahan Kidul Dalem. https://kelkiduldalem.malangkota.go.id/</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText47723"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E0964D97_F7BC_D234_41C1_3BA8731ECAD9, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 25.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.35,
   "hfov": 13.25
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 25.94,
   "pitch": -13.35,
   "hfov": 13.25,
   "image": "this.AnimatedImageResource_E687694A_F87C_3202_41EE_0F5AC6F99DE5",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E15E3FA1_F7BC_2E0C_41D6_09413BDEE033"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_C3AB8491_F9F4_5213_41C0_7BBC96E1D3F9, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 69.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.92,
   "hfov": 15.82
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_5_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -10.92,
   "yaw": 69.25,
   "hfov": 15.82
  }
 ],
 "id": "overlay_DBF3ED8E_F874_52F1_41CC_43BB3A008C76"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_B551BFAA_94BD_37F3_41C9_C8A8AE9D68E9, this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09, this.playList_DF022D1E_D29A_E5AF_41C6_49631C881646, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 153.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.59,
   "hfov": 12.18
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_6_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 197
     }
    ]
   },
   "pitch": -12.59,
   "yaw": 153.1,
   "hfov": 12.18
  }
 ],
 "id": "overlay_B4B119A9_94BD_3BFE_41E1_1E28FBD14793"
},
{
 "id": "image_uidDD5E0D80_D29D_6492_41AD_1124178C9938_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E23B4AD7_F7B4_F633_41DF_5C298F5F55E7.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2092"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E2538CB0_F7B5_D20E_41E8_50FB6F3ACCE1",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Pasar Besar Kota Malang memiliki peranan penting dalam perekonomian daerah sebagai pusat distribusi barang kebutuhan sehari-hari. Aktivitas perdagangan yang berlangsung di pasar ini mampu menciptakan lapangan pekerjaan bagi pedagang, buruh angkut, maupun pelaku usaha informal lainnya (Maziyah, 2014). </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Keberadaan Pasar Besar juga mendukung pertumbuhan sektor perdagangan dan jasa di pusat Kota Malang. Kawasan ini ditetapkan sebagai kawasan strategis pertumbuhan ekonomi karena tingginya investasi perdagangan dan jasa yang berkembang di sekitarnya (Rina, 2023). </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Di tengah berkembangnya pasar modern, Pasar Besar tetap mampu bertahan karena adanya hubungan sosial yang kuat antara pedagang dan konsumen, seperti kepercayaan, jaringan sosial, dan interaksi yang intensif (Maziyah, 2014).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Sumber foto: BeritaJatim.com. (2026). Revitalisasi Pasar Besar Kota Malang tunggu petunjuk pusat. BeritaJatim. https://beritajatim.com/revitalisasi-pasar-besar-kota-malang-tunggu-petunjuk-pusat</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText36390"
 }
},
{
 "media": "this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_AlbumPlayList, this.htmltext_DD353D70_D29D_6472_41D2_35CB294757C4, this.albumitem_DD35DD70_D29D_6472_41E9_F51934D7CD0C); this.loopAlbum(this.playList_DF115D10_D29A_E5B3_41E2_B745746E8A7F, 0)",
 "player": "this.viewer_uidDD35FD70_D29D_6472_41C2_C43B751621CFPhotoAlbumPlayer",
 "id": "albumitem_DD35DD70_D29D_6472_41E9_F51934D7CD0C"
},
{
 "items": [
  {
   "media": "this.album_14228B36_024F_7584_4172_48B43AD2F408_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.36"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_14228B36_024F_7584_4172_48B43AD2F408_1",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.54"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_14228B36_024F_7584_4172_48B43AD2F408_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "image_uidDD5B3D80_D29D_6492_41D2_195C2534FB5F_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E0492C0E_F7BC_3217_41E9_8F96F538725F.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2084"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E0902D9C_F7BC_D234_41DD_6F960CF24D30",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Sungai Brantas merupakan wilayah sungai terbesar kedua di Pulau Jawa setelah Bengawan Solo, terletak di Jawa Timur dengan panjang sekitar 320 km dan catchment area seluas 14.103 km\u00b2, mencakup 16 kabupaten seperti Blitar, Malang, Kediri, dan Mojokerto (Erlina, 2018). Sungai ini sangat vital bagi Jawa Timur karena sekitar 60% pengairan lahan produksi beras berasal dari alirannya, sekaligus menjadi sumber air baku, irigasi, dan PLTA bagi jutaan penduduk (Lusiana et al., 2020). Namun, kualitas airnya terus menurun akibat tekanan aktivitas manusia, terbukti dari indeks kualitas air yang turun dari 52,51 (2015) menjadi 50,75 (2016), dengan beberapa titik seperti Blimbing dan Kedungkandang melampaui daya tampung pencemarannya (Lusiana et al., 2020). Sungai ini juga memiliki sejarah panjang menghadapi banjir dan sedimentasi sejak masa Raja Airlangga abad XI, yang hingga kini masih berlanjut akibat degradasi sungai dan penebangan liar di kawasan hulu (Erlina, 2018). Untuk itu, Pemerintah Provinsi Jawa Timur menetapkan kebijakan pengelolaan melalui Perda No. 18 Tahun 2016, meski implementasinya di wilayah hilir seperti Surabaya masih belum optimal (Prianggoro et al., 2022).</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText38127"
 }
},
{
 "items": [
  {
   "media": "this.album_9E88A9E2_9387_1BD2_41C7_B41D2D6FDC69",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.27"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FEA98BB4_F39A_7DCB_41CE_22BF5111A910_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "image_uidDD5F3D80_D29D_6492_41CB_BC60B72B583A_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E25F066F_F78C_FEEF_41E6_B665E431866B.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2091"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E28661D4_F78C_7231_41E3_0226219A9BA1",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\"><B>Lokasi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Pasar Besar Kota Malang terletak di Jalan Pasar Besar, Kelurahan Sukoharjo, Kecamatan Klojen, Kota Malang, Jawa Timur. Kawasan ini berada di pusat Kota Malang dan termasuk dalam kawasan perdagangan dan jasa yang strategis karena berdekatan dengan Alun-Alun Kota Malang serta kawasan Pecinan (Rina, 2023). </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\"><B>Sejarah </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Pasar Besar merupakan salah satu pasar tradisional tertua di Kota Malang. Pada masa kolonial Belanda, kawasan Pasar Besar berkembang sebagai pusat perdagangan utama yang melayani kebutuhan masyarakat kota. Sejak Kota Malang ditetapkan sebagai Gemeente pada tahun 1914, pasar-pasar di Malang mengalami perubahan baik secara fisik maupun administratif. Perubahan tersebut meliputi pembangunan sarana pasar yang lebih permanen, peningkatan fasilitas, serta pengelolaan pasar oleh pemerintah kota (Junda, 2012). </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Selain itu, koridor Jalan Pasar Besar memiliki nilai historis tinggi karena sejak masa kolonial menjadi pusat aktivitas ekonomi dan kawasan Pecinan yang berperan penting dalam perkembangan Kota Malang (Zuliana et al., 2022).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Sumber foto: BeritaJatim.com. (2026). Revitalisasi Pasar Besar Kota Malang tunggu petunjuk pusat. BeritaJatim. https://beritajatim.com/revitalisasi-pasar-besar-kota-malang-tunggu-petunjuk-pusat</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText34291"
 }
},
{
 "items": [
  {
   "media": "this.album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.68"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C7C5EB04_F9B4_57F1_41EA_B8575A33D467_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F814C08A_F289_E978_41C9_BE632721EB42, this.camera_DCABEE35_D29D_67FD_41E2_765339ED6A03); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -101.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.8,
   "hfov": 26.45
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -101.33,
   "pitch": -13.8,
   "hfov": 26.45,
   "image": "this.AnimatedImageResource_DA1C7843_F388_DA7A_41CD_44EB60DC05B4",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8C7E42D_F38B_2A0E_41ED_2F6B3F276D8C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E10A351D_F78C_F23E_41E3_D3CA61B0E99A, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.02,
   "hfov": 13.62
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -3.86,
   "pitch": -0.02,
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_E68EE950_F87C_321D_41DA_EA0A83469E1C",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1911B9A_F78C_363A_41E3_D45E5AC6A45A"
},
{
 "media": "this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_AlbumPlayList, this.htmltext_DD596D80_D29D_6492_4198_0DC41BA88538, this.albumitem_DD59FD80_D29D_6492_41CD_691CB6C52584); this.loopAlbum(this.playList_DF022D1E_D29A_E5AF_41C6_49631C881646, 0)",
 "player": "this.viewer_uidDD5A2D80_D29D_6492_41DC_BE8F4A8E0DEBPhotoAlbumPlayer",
 "id": "albumitem_DD59FD80_D29D_6492_41CD_691CB6C52584"
},
{
 "id": "image_uidDD257D80_D29D_6492_41E6_0D28B10D8E4F_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E3428E8E_F797_EE26_41D1_4ED184902F7D.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2082"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E3789FA2_F794_2E1F_41E4_DFE4D2E96669",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Hutan Kota Malabar memiliki fungsi penting sebagai kawasan resapan dan penampungan air di wilayah perkotaan. Kawasan ini berperan dalam menyimpan air hujan, meningkatkan infiltrasi air ke dalam tanah, serta membantu menjaga ketersediaan air tanah di Kota Malang. Selain sebagai daerah resapan, Hutan Kota Malabar juga berfungsi menampung aliran air dari kawasan sekitarnya, khususnya dari wilayah Oro-Oro Dowo, sebelum dialirkan menuju saluran drainase dan sungai di sekitarnya. Keberadaan vegetasi yang rapat pada kawasan ini mendukung proses penyimpanan air dan mengurangi risiko genangan maupun limpasan permukaan saat musim hujan (Alfian &amp; Kurniawan, 2010)</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText27880"
 }
},
{
 "items": [
  {
   "media": "this.album_9FE280C0_9387_29CE_41B5_86E237B3B7F6",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.43"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "viewerArea": "this.viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272",
 "id": "viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A, this.camera_DC471F0A_D29D_6596_41C5_4F659B2C55DD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 162.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.27,
   "hfov": 13.98
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 162.67,
   "pitch": -7.27,
   "hfov": 13.98,
   "image": "this.AnimatedImageResource_E8934519_F38B_2A16_41E8_246EB7CEF3C2",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EF188E7A_F399_F60A_41D5_343012473F74"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D, this.camera_DC735F0A_D29D_6596_41E9_43DD236889FB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -92.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.65,
   "hfov": 11.79
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -92.05,
   "pitch": -23.65,
   "hfov": 11.79,
   "image": "this.AnimatedImageResource_ECE8BAEA_F39B_5E0A_41D6_627E38DEB26A",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED65A8E6_F388_DA3A_41E8_40FF5FED1FD2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A, this.camera_DC495EFA_D29D_6476_41E7_D803AD998DA6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -109.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.95,
   "hfov": 11.51
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -109.31,
   "pitch": -13.95,
   "hfov": 11.51,
   "image": "this.AnimatedImageResource_ECE8DAEA_F39B_5E0A_41EB_FB12F3CDD311",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E840A59A_F3F9_2A0A_41D9_182FD465B6B5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3CAA1A0_F794_D276_41ED_08BE74E39CB4, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_E00A3C78_F794_32D6_41D3_E6B5CA5E9E6C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -29.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.2,
   "hfov": 7.38
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_7_0.png",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": -11.2,
   "yaw": -29.13,
   "hfov": 7.38
  }
 ],
 "id": "overlay_E6530A87_F794_364F_41D0_E8FC91415534"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD22ED80_D29D_6492_41E4_2A191893C272",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2073"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7, this.camera_DC691F19_D29D_65B5_41BE_C8BA3B92200C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -114.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.04,
   "hfov": 21.53
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -114.32,
   "pitch": -31.04,
   "hfov": 21.53,
   "image": "this.AnimatedImageResource_EC947AEA_F39B_5E0A_41E1_E1C090B24DFC",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EEAF2246_F399_2E7A_41AF_1413F676123C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3CFA04A_F78C_5232_41D3_1A1831B02B5E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_EE17633F_F7F4_5658_41DD_EA6B5355DB8E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 41.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 27.67,
   "hfov": 14.27
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_5_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": 27.67,
   "yaw": 41.87,
   "hfov": 14.27
  }
 ],
 "id": "overlay_FC28670F_F396_D6D5_41E4_EF62BF2F4E75"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3D9C12D_F78C_5271_41E1_B9673E388232, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_EE162341_F7F4_5628_41A9_59E77B590187, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -37.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.27,
   "hfov": 14.8
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_6_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": 23.27,
   "yaw": -37.89,
   "hfov": 14.8
  }
 ],
 "id": "overlay_FC34AD02_F397_FACF_41DA_AA5FFE388BCA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F814C08A_F289_E978_41C9_BE632721EB42, this.camera_DD8F7F38_D29D_65F3_41C1_C36D1ABFFA0B); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -137.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.02,
   "hfov": 29.22
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -137.54,
   "pitch": -15.02,
   "hfov": 29.22,
   "image": "this.AnimatedImageResource_DA1CE843_F388_DA7A_41ED_9A2D51B477F9",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DD7FDD9D_F38F_5A0E_41E2_C3F04C2EBA11"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E1B24DE1_F78C_3209_41E2_14787C3F4342, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -7.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.27,
   "hfov": 13.62
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -7.94,
   "pitch": 0.27,
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_E680694E_F87C_3205_41DD_2D1F0704BCC9",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E145EBDD_F7BC_763A_41EC_A045D67599B8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_DA47C704_F98C_5FF2_41DB_CAD85AB394B8, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false); this.showPopupPanoramaOverlay(this.popup_C60AA376_F9F4_D610_41EE_C8FFDA12DF41, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_B18C15BB_F9F4_3217_41CB_D974CD531D54, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 41.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.16,
   "hfov": 16.1
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_4_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -2.16,
   "yaw": 41.42,
   "hfov": 16.1
  }
 ],
 "id": "overlay_DBDFF841_F98C_3273_41E8_FF27FA541675"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F37192_F289_2B6A_41C3_844097E623FE, this.camera_DC5D1EEA_D29D_6496_41D5_85D190458940); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.93,
   "hfov": 22.89
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -1.29,
   "pitch": -18.93,
   "hfov": 22.89,
   "image": "this.AnimatedImageResource_DA1E3843_F388_DA7A_41D0_688140CEF2C2",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E34E9987_F29B_DAED_41D4_A8ED5CA04495"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF, this.camera_DC203EDA_D29D_64B7_41C4_834659F1307A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 103.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.43,
   "hfov": 29.79
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 103.35,
   "pitch": -22.43,
   "hfov": 29.79,
   "image": "this.AnimatedImageResource_DA1E0843_F388_DA7A_41AF_EC4FCA263FDF",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D9166A0A_F3BB_DE0A_41C0_0EAA9BF58463"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E21CA963_F79D_F219_41CF_220C5E5496A6, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 33.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.57,
   "hfov": 13.62
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 33.96,
   "pitch": 0.57,
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_E686794A_F87C_3202_41DD_3E5D010E3393",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E33B2955_F79C_5239_41DD_37D8637D6BDF"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "items": [
  {
   "media": "this.album_F96B41C9_F794_D5F3_41EE_6A24455388C0_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.35"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F96B41C9_F794_D5F3_41EE_6A24455388C0_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD316D65_D29D_659D_41E9_9C8E8CBDF68F",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD309D65_D29D_659D_41E4_06BDA46D232F"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2048"
   }
  },
  "this.component_DD300D70_D29D_6472_41E0_6226B4576833",
  "this.component_DD37FD70_D29D_6472_41DA_C2761F22A86B"
 ],
 "id": "container_DD30FD65_D29D_659D_41C4_9FA022137F8A",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2047"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F, this.camera_DCC41E84_D29D_6492_41D7_318DA98A2310); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.52,
   "hfov": 25.34
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 92.07,
   "pitch": -21.52,
   "hfov": 25.34,
   "image": "this.AnimatedImageResource_D2149CBF_F38F_5A0A_41D7_8285C5E5A201",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EC279EEF_F388_D60A_41E6_74AC744A4D38"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A, this.camera_DCCD7E78_D29D_6473_41E6_1339482470EF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.09,
   "hfov": 25.74
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -90.43,
   "pitch": -19.09,
   "hfov": 25.74,
   "image": "this.AnimatedImageResource_D2142CBF_F38F_5A0A_41E4_8C34124D4007",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ECE246DD_F38F_F60E_41E6_3CFD7B531AA5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E2A83387_F89D_D606_41D8_031DFF0ED0FA, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_4_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": -165.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.22,
   "hfov": 11.87
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_4_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ]
   },
   "pitch": -11.22,
   "yaw": -165.48,
   "hfov": 11.87
  }
 ],
 "id": "overlay_E38D3E5C_F89C_6E0B_41E4_2A3D0F00F55D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_8B3FAC89_9387_19BE_41A7_663213D9CB7E, this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A, this.playList_DF115D10_D29A_E5B3_41E2_B745746E8A7F, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.64,
   "hfov": 11.82
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_5_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -18.64,
   "yaw": 108.15,
   "hfov": 11.82
  }
 ],
 "id": "overlay_E51376EC_F894_5E0E_41E6_9414DE52C0D7"
},
{
 "items": [
  {
   "media": "this.album_9E9BD1E7_9387_2BD1_41D0_724838BD76C2",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.47"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FC3DB4B1_F39B_EBCD_41D9_F82F21230071_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E2F4EA12_F89C_D61E_41D8_E7CE78514E4D",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Lumpur lapindo mengandung belerang, garam, dan minyak yang berpotensi mencemari lingkungan.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText68084"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "50%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2058"
 }
},
{
 "id": "image_uidDD52FD80_D29D_6492_41E1_3B5DBB14DFBA_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E0AC15B8_F78F_D207_41E2_2CF60438765E.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2095"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E1B39DE1_F78C_3209_41B2_594756A3A146",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Kawasan Kayutangan di Kota Malang memiliki sejarah panjang yang diperkirakan telah ada sejak abad ke-12, di mana menurut Dwi Cahyono kawasan ini awalnya merupakan jalan setapak di tengah hutan dekat Desa Talun, yang dalam kisah Pararaton dikenal sebagai tempat persembunyian Ken Arok. Pada masa kolonial Belanda, terutama awal abad ke-20, Kayutangan berkembang menjadi pusat perdagangan modern dan kawasan elit melalui pembangunan pertokoan, jalur trem, serta bangunan bergaya Eropa di sepanjang Jalan Kayutangan/Basuki Rahmat (Sayono dkk., 2020). Kawasan ini juga kaya nilai historis dan budaya karena masih mempertahankan banyak bangunan kolonial, sehingga sejak 2018 mulai dilestarikan secara intensif melalui Kampoeng Heritage Kajoetangan sebagai destinasi wisata sejarah yang sekaligus meningkatkan ekonomi masyarakat lewat pariwisata berbasis heritage (Sayono dkk., 2020; Pemerintah Kota Malang, 2021).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Nugroho, A. (2025, August 25). Strolling around Malang: 4 rekomendasi spot foto wajib yang instagramable di Kayutangan Heritage. Radar Malang. https://radarmalang.jawapos.com/</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText42078"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0, this.camera_DD91DF29_D29D_6592_41CD_DA7F1332419B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 144.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.69,
   "hfov": 26.6
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 144.25,
   "pitch": -19.69,
   "hfov": 26.6,
   "image": "this.AnimatedImageResource_DA1F5843_F388_DA7A_41ED_7F16515DEB42",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E297616A_F289_6A3E_41E1_D70579172B63"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E12F7462_F794_5207_41E7_DDF366147A69, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 47.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.38,
   "hfov": 13.61
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 47.44,
   "pitch": 2.38,
   "hfov": 13.61,
   "image": "this.AnimatedImageResource_E682494A_F87C_3202_41D2_62D90692CEA8",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E122C846_F79C_320F_41E4_C085C670DC6E"
},
{
 "items": [
  {
   "media": "this.album_9EAE2671_9387_E8CE_41DD_31B01C70029F",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "y": "0.29"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E3AEA272_F79C_56DD_41D5_AF01A3C2B465_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD2A9D70_D29D_6472_41E6_787521C8FF73",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD2B5D70_D29D_6472_41D7_F677C7905E73"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2061"
   }
  },
  "this.component_DD2A8D70_D29D_6472_41E7_C076DFD2A0DF",
  "this.component_DD2A7D70_D29D_6472_41D2_704B920325AC"
 ],
 "id": "container_DD2BBD70_D29D_6472_41E7_F36A39EDCACF",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2060"
 }
},
{
 "items": [
  {
   "media": "this.album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "y": "0.52"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F80085AA_F794_5DB6_41DA_49B1D02EC45F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA, this.camera_DC061EBD_D29D_64F2_41D0_DC4AFB4548B4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.58,
   "hfov": 17.87
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 54.18,
   "pitch": -7.58,
   "hfov": 17.87,
   "image": "this.AnimatedImageResource_E2BB5F53_F2BB_3787_41D0_22BD0D3E8BB0",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2ED6A74_F2BB_5987_41B8_1AB349522034"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E6DF6FDF_F7B4_6DF2_41E8_E3EB7D1BA2BF, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_E423A875_F7B5_D2B7_41DF_01D752894C2E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "yaw": 23.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.82,
   "hfov": 6.09
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_1_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ]
   },
   "pitch": 6.82,
   "yaw": 23.34,
   "hfov": 6.09
  }
 ],
 "id": "overlay_FEDB9804_F396_7ACB_41E2_50BFBD61C00B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_E1147026_F87F_D202_41DD_F55A2A82DA18, this.album_E013B05F_F874_3202_41B9_D50B38B9771F, this.playList_DF192D06_D29A_E59F_41DB_C615444D2F06, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.52,
   "hfov": 4.5
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_2_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": 5.52,
   "yaw": 4.68,
   "hfov": 4.5
  }
 ],
 "id": "overlay_E13AC22F_F87C_5602_41EC_FC1B5A59C370"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uidDD5A2D80_D29D_6492_41DC_BE8F4A8E0DEB",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_DD596D80_D29D_6492_4198_0DC41BA88538"
   ],
   "left": 0,
   "horizontalAlign": "left",
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "layout": "vertical",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "paddingBottom": 0,
   "shadow": false,
   "class": "Container",
   "data": {
    "name": "Container2087"
   }
  },
  "this.component_DD586D80_D29D_6492_41D9_30824479DCBA",
  "this.component_DD585D80_D29D_6492_41E4_7773C3509E12"
 ],
 "id": "container_DD59CD80_D29D_6492_41E7_78A7F538D8D0",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container2086"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7, this.camera_C2A1CDBE_D29D_64EF_41DE_BAA5F7FF1D96); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -109.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.06,
   "hfov": 13.28
  }
 ],
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -109.33,
   "pitch": -21.06,
   "hfov": 13.28,
   "image": "this.AnimatedImageResource_FD2DE3B5_F298_EE23_41D7_7B1B6F3FB432",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E28F9C7D_F289_DA40_41D2_2957787CEB3F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E38741ED_F794_35CD_41D6_B03CBBB4F13F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_D91EC83A_D295_ABF7_41DD_AED1EA9DC503, this.video_E6A1023F_F79C_568F_41ED_B7F233AFE107, this.PlayList_DF4A8D42_D29A_E596_41D8_26940E0460A5, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 18.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.27,
   "hfov": 15.95
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_3_0.png",
      "width": 261,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -4.27,
   "yaw": 18.8,
   "hfov": 15.95
  }
 ],
 "id": "overlay_E30DCABD_F794_364D_41D1_1F3CEB7F44E5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E3EAD4CD_F8BC_5208_41E9_C4C1A09555DC, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.54,
   "hfov": 10.68
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_4_0.png",
      "width": 178,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ]
   },
   "pitch": -11.54,
   "yaw": -6.45,
   "hfov": 10.68
  }
 ],
 "id": "overlay_E3DE9EEB_F8B5_EE08_41EB_231C8185EBDA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EE782535_F388_EA1E_41D4_7E8E3727981F, this.camera_DC65AF29_D29D_6592_41E4_2F233731E13C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 66.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.79,
   "hfov": 27.93
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 66.95,
   "pitch": -13.79,
   "hfov": 27.93,
   "image": "this.AnimatedImageResource_D54FACD6_F38B_7A1A_41E0_F96B16D69809",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3099588_F389_EAF6_41EE_32B37A713397"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -122.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.56,
   "hfov": 26.86
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -122.05,
   "pitch": -9.56,
   "hfov": 26.86,
   "image": "this.AnimatedImageResource_C61A8338_F399_2E15_41E8_F6FC712DCD8D",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DFBE964F_F399_D60A_41AF_75CA8D7AD7D9"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E343824E_F88C_3609_4190_65E16BEF477A, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -60.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.92,
   "hfov": 11.74
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_3_0.png",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "pitch": -5.92,
   "yaw": -60.15,
   "hfov": 11.74
  }
 ],
 "id": "overlay_E3A96FD4_F88D_EE18_41A1_7681BB3E145F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19, this.camera_DCA1AE4C_D29D_6793_41E1_ACFCF4C2A2BB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -160.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.2,
   "hfov": 20.32
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -160.37,
   "pitch": -21.2,
   "hfov": 20.32,
   "image": "this.AnimatedImageResource_D6A68BA3_F388_DE3A_41A3_435712D13A30",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1C39DAF_F389_3A0A_41EC_BED5E1851E9A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A, this.camera_DCAE0E41_D29D_6792_4164_E19BFE1B68E3); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 17.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.95,
   "hfov": 22.27
  }
 ],
 "data": {
  "label": "Arrow 06b Left"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 17.33,
   "pitch": -28.95,
   "hfov": 22.27,
   "image": "this.AnimatedImageResource_D6A64BA3_F388_DE3A_41E0_B01214AD08BA",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EC5A249A_F38B_2A0A_41E9_9EB0A1878F0E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E2F62A12_F89C_D61E_41D1_1AA874E07368, null, true); this.playList_DD2B5D70_D29D_6472_41D0_FC7FA5264F69.set('selectedIndex', 0); ; this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165VideoPlayer.play(); ",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 162.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.13,
   "hfov": 13.32
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_5_0.png",
      "width": 227,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ]
   },
   "pitch": -17.13,
   "yaw": 162.91,
   "hfov": 13.32
  }
 ],
 "id": "overlay_E330D661_F89C_DE3B_41E0_1E729BFB4AF4"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_8A030EBD_938B_F9D6_41D3_14CD70F335A4, this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80, this.playList_DF128D14_D29A_E5B3_41DB_EAF6CAA0B7D7, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 96.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.73,
   "hfov": 14.17
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_6_0.png",
      "width": 243,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ]
   },
   "pitch": -17.73,
   "yaw": 96.19,
   "hfov": 14.17
  }
 ],
 "id": "overlay_E308BE25_F894_EE3B_41E6_978C7EFCDBE5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD, this.camera_DDC36F78_D29D_6473_41E6_E5B10B3A3F28); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 165.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.25,
   "hfov": 31.99
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 165.86,
   "pitch": -35.25,
   "hfov": 31.99,
   "image": "this.AnimatedImageResource_DA1FE843_F388_DA7A_41AC_13BC1FC4D085",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA1F97BF_F3B9_560A_41D0_6E6EF320D69E"
},
{
 "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_AlbumPlayList, this.htmltext_DD309D65_D29D_659D_41E4_06BDA46D232F, this.albumitem_DD312D65_D29D_659D_41E4_5C445C448896); this.loopAlbum(this.playList_DF1EAD0E_D29A_E5AF_41E8_7C6F43A95078, 0)",
 "player": "this.viewer_uidDD316D65_D29D_659D_41E9_9C8E8CBDF68FPhotoAlbumPlayer",
 "id": "albumitem_DD312D65_D29D_659D_41E4_5C445C448896"
},
{
 "id": "image_uidDD53DD80_D29D_6492_41D2_E0312942A348_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_9E90B698_9387_687F_41C5_2DAA11E91976.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2094"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EDEF1A61_F794_5603_41DF_C3298A073E16",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Kawasan Alun-Alun Kota Malang memiliki peran penting dalam perekonomian kota. Lokasinya yang berada di pusat kota menyebabkan kawasan ini berkembang menjadi pusat perdagangan dan jasa. Berbagai aktivitas ekonomi seperti perdagangan ritel, kuliner, jasa transportasi, serta usaha mikro kecil dan menengah (UMKM) tumbuh di sekitar kawasan alun-alun. Keberadaan pusat perbelanjaan, pedagang kaki lima, dan sektor pariwisata turut meningkatkan aktivitas ekonomi masyarakat sekitar (Junianto, 2010). </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Menurut Junianto (2010), perubahan fungsi Alun-Alun Kota Malang menjadi kawasan bisnis menyebabkan ruang publik tersebut tidak hanya berfungsi sebagai tempat rekreasi, tetapi juga sebagai penunjang kegiatan komersial di pusat kota. Aktivitas ekonomi yang tinggi di kawasan ini memberikan kontribusi terhadap pertumbuhan ekonomi Kota Malang secara keseluruhan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Sumber foto: Firdausi, A. C. (2019, September 1). Pemkot Malang tunda pembangunan mall UMKM, kenapa? JatimTIMES. https://jatimtimes.com/baca/200134/20190901/162200/pemkot-malang-tunda-pembangunan-mall-umkm-kenapa</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText49394"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802, this.camera_DC29DEDA_D29D_64B7_41D7_1D5D4373D6B5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.08,
   "hfov": 24.87
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.39,
   "pitch": -24.08,
   "hfov": 24.87,
   "image": "this.AnimatedImageResource_DA013843_F388_DA7A_41E6_AD3A8D01F3B0",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1E5066C_F3BB_360E_41DD_3E7EA6C00666"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_126DC4BA_01DB_3C8D_4161_FBA62CDC4832, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 38.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.29,
   "hfov": 13.51
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 38.04,
   "pitch": -7.29,
   "hfov": 13.51,
   "image": "this.AnimatedImageResource_E7FB82EF_F7BC_37A9_41DA_71182E3F3AD7",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E6AE3960_F7B4_72A4_41EE_EA4D7EF76B5F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_C39D3FC2_F98C_6E71_41E1_3810998690E1, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.88,
   "hfov": 13.57
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_4_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -4.88,
   "yaw": -6.45,
   "hfov": 13.57
  }
 ],
 "id": "overlay_DA046196_F874_3211_41E8_15AA771C6504"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2066"
 }
},
{
 "viewerArea": "this.viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1",
 "id": "viewer_uidDD282D70_D29D_6472_41DE_1A71EC9906E1VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B, this.camera_C2DF4DCF_D29D_64AE_41E3_7222DADB9ABD); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.04,
   "hfov": 25.07
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 90.57,
   "pitch": -23.04,
   "hfov": 25.07,
   "image": "this.AnimatedImageResource_DA010843_F388_DA7A_41EA_E4F795B710E4",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D58B1CFF_F3B9_3A0A_41E9_76FD55957C4B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E, this.camera_C2D46DDE_D29D_64AF_41E3_91206C4F2590); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.5,
   "hfov": 25.83
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -97.99,
   "pitch": -18.5,
   "hfov": 25.83,
   "image": "this.AnimatedImageResource_DA1EE843_F388_DA7A_41D3_39962009B625",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1B3DB66_F3B9_7E3D_41EB_3FF1BAF4C2BB"
},
{
 "items": [
  {
   "media": "this.album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.43"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FCDA931B_F3A9_AEFD_41E0_431D318C32E9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E, this.camera_DCF14E8E_D29D_64AE_41E8_46CC1103F7EB); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 47.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.83,
   "hfov": 39.26
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 47.5,
   "pitch": -16.83,
   "hfov": 39.26,
   "image": "this.AnimatedImageResource_DA1FC843_F388_DA7A_41EA_CE2751370883",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB590279_F3B7_6E16_41A2_6ABB09495FB8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -44.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.14,
   "hfov": 34.58
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -44.33,
   "pitch": -17.14,
   "hfov": 34.58,
   "image": "this.AnimatedImageResource_DA1FA843_F388_DA7A_41D0_0FDEC554C3A8",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D42D5765_F389_563E_41DC_730DFD00451F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E284D1D0_F78C_7231_41E2_1C5919122B7B, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.48,
   "hfov": 13.61
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 14.44,
   "pitch": 1.48,
   "hfov": 13.61,
   "image": "this.AnimatedImageResource_E684494A_F87C_3202_41E8_D32785EDDEB0",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E353AA52_F78C_3631_41DA_D9C7983A6C80"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_C3FBBAF2_F9FC_3617_41CB_EAAA3D458A9E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_B18EF5BB_F9F4_3217_41ED_1ADEFAB09C1D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 59.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.93,
   "hfov": 16.11
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_6_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -0.93,
   "yaw": 59.58,
   "hfov": 16.11
  }
 ],
 "id": "overlay_C3D5F669_F9FC_5E30_41DF_6DF15202C10B"
},
{
 "items": [
  {
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.73"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_1",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.53"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_B1EFA7D1_94BB_37AE_41E0_FFAD458EB4EE",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.51"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_3",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.60"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_4",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.57"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F807F64D_F289_29FF_41E0_C6A8F023369E, this.camera_DC08DEBD_D29D_64F2_41D2_5BFD121F52BF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -74.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.05,
   "hfov": 25.9
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -74.09,
   "pitch": -18.05,
   "hfov": 25.9,
   "image": "this.AnimatedImageResource_DA1E7843_F388_DA7A_41DD_CED5F4B17D37",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA772172_F3B9_2A1A_41D3_BA1F977A2B3F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD, this.camera_DC125EB1_D29D_64F2_41BB_131D17ECFEC8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.85,
   "hfov": 29.44
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 164.49,
   "pitch": -31.85,
   "hfov": 29.44,
   "image": "this.AnimatedImageResource_DA1E5843_F388_DA7A_41EC_A118936D798F",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7BDF892_F3B9_5A1A_41C4_2417E898B6BA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E3774FA2_F794_2E1F_41EB_AF3A6D4826D4, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -11.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.97,
   "hfov": 13.45
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -11.58,
   "pitch": -8.97,
   "hfov": 13.45,
   "image": "this.AnimatedImageResource_E678A944_F87C_3206_41E8_A4420C177644",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1787996_F794_7227_41E9_046DFB28B6D3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553, this.camera_C2C2EDDE_D29D_64AF_41E2_493DC9E29798); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 104.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20,
   "hfov": 35.28
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 104.94,
   "pitch": -20,
   "hfov": 35.28,
   "image": "this.AnimatedImageResource_DA1F7843_F388_DA7A_41E6_A82947BDBD8C",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D5037A20_F389_7E36_41EB_BD48E7E9F3F6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E251DCB0_F7B5_D20E_41EB_F3AC76E43797, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -40.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.57,
   "hfov": 13.62
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -40.34,
   "pitch": 0.57,
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_E685394A_F87C_3202_41C4_7842E046DFD2",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EDF156_F7B4_3233_41E4_F074F6CBB8DC"
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_126C74BA_01DB_3C8D_4171_E82A898BBFE9",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"><B>Lokasi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\">Hutan Kota Malabar terletak di Jalan Malabar, Kelurahan Oro-Oro Dowo, Kecamatan Klojen, Kota Malang, Jawa Timur. Kawasan ini berada di sebelah timur Jalan Ijen dan memiliki luas sekitar 16.718\u201317.909 m\u00b2. Letaknya yang berada di tengah kawasan perkotaan menjadikan Hutan Kota Malabar sebagai salah satu ruang terbuka hijau penting di Kota Malang.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\"><B>Sejarah</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\">Pada masa kolonial Belanda, kawasan ini dikenal dengan nama Kebon Rodjo atau Bon Rodjo. Hutan Kota Malabar kemudian dikembangkan sebagai ruang terbuka hijau yang berfungsi menjaga keseimbangan lingkungan perkotaan, terutama sebagai daerah resapan air, paru-paru kota, dan kawasan konservasi. Menurut Alfian dan Kurniawan (2010), Hutan Kota Malabar memiliki peran ekologis yang penting bagi Kota Malang. Pada tahun 2015 dilakukan revitalisasi untuk meningkatkan fungsi ekologis, sosial, dan estetika kawasan (Subandi &amp; Prastiwi, 2017). Selain itu, kawasan ini juga dimanfaatkan sebagai sarana rekreasi, pendidikan lingkungan, dan interaksi sosial masyarakat (Towary et al., 2020).</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText20530"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D, this.camera_DCDB7E56_D29D_67BF_41C5_373D1D9994A9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -46.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.4,
   "hfov": 17.12
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -46.81,
   "pitch": -42.4,
   "hfov": 17.12,
   "image": "this.AnimatedImageResource_EC977AEA_F39B_5E0A_41B8_A491D5ADBC3A",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E01A0B8C_F28B_5ECE_41D3_B1DE2D2976CA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C, this.camera_DCDD2E62_D29D_6797_41C0_F6600AADA9FF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0_HS_2_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 154.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.24,
   "hfov": 22.4
  }
 ],
 "data": {
  "label": "Arrow 06b Right"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 154.19,
   "pitch": -23.24,
   "hfov": 22.4,
   "image": "this.AnimatedImageResource_EC97AAEA_F39B_5E0A_41BB_3453D6FAF740",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE6A969D_F398_F60E_41E5_66C860787AED"
},
{
 "items": [
  {
   "media": "this.album_9FF6B40D_9387_2851_41E1_8FB72D56280C",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.61"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FCAEEA98_F396_7FFB_41C4_88519CD7C7FF_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.63"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E5D412AE_F893_D60D_41D1_3DA893E610D4_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "image_uidDD243D80_D29D_6492_41E3_1D97E926911E_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_9E1B12AB_9387_2851_41D7_6882E51BFEEF.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2083"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E21E897A_F79D_F2EB_41C1_1E28841AB8C5",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Book Antiqua';\">Vegetasi di Hutan Kota Malabar didominasi oleh berbagai jenis pohon peneduh, seperti mahoni (Swietenia macrophylla), trembesi (Samanea saman), tanjung (Mimusops elengi), ketapang (Terminalia catappa), glodokan tiang (Polyalthia longifolia), dan beringin (Ficus benjamina). Keanekaragaman vegetasi tersebut menjadikan Hutan Kota Malabar sebagai ruang terbuka hijau yang penting dalam menjaga keseimbangan ekologis, meningkatkan kenyamanan termal, serta menyediakan habitat bagi berbagai jenis satwa perkotaan. Hutan Kota Malabar memiliki sekitar 79 jenis pohon dan 22 jenis burung yang hidup di dalam kawasan tersebut (Leba et al., 2022)</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText30373"
 }
},
{
 "media": "this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4_AlbumPlayList, this.htmltext_DD2C7D80_D29D_6492_41E7_8B69B2AE2C47, this.albumitem_DD2D0D80_D29D_6492_4199_B55E799F8660); this.loopAlbum(this.playList_DF095D18_D29A_E5B3_41BC_4041FF5EAA5D, 0)",
 "player": "this.viewer_uidDD2D4D80_D29D_6492_41E4_35D2445A597CPhotoAlbumPlayer",
 "id": "albumitem_DD2D0D80_D29D_6492_4199_B55E799F8660"
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E2ABE38C_F89D_D60A_41EA_3B773D9E0DAC",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"> \u2022 </SPAN><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Pengeboran telah mencapai kedalaman sekitar 8.500\u20139.297 kaki dan casing (pelindung sumur) tidak dipasang sesuai rekomendasi sehingga fluida bertekanan dari bawah tanah naik ke permukaan dan memicu semburan lumpur.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"> \u2022 </SPAN><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\"> Gempa berkekuatan 6,3 magnitudo di Yogyakarta pada 27 Mei 2006 memicu semburan lumpur melalui retakan bawah tanah</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText66713"
 }
},
{
 "items": [
  {
   "media": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.62"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_BE36A184_948E_EBB6_41B9_87F9098FCCF9",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "y": "0.47"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_B02F055C_948E_EB56_41D4_7268D90712EA",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.41"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_B1080968_948E_FB7F_41DB_EE887F0D85D9",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.28",
     "class": "PhotoCameraPosition",
     "y": "0.45"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_1",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.30"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "viewerArea": "this.viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165",
 "id": "viewer_uidDD2B2D70_D29D_6472_41D2_054AF5EB4165VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825, this.camera_C2FFBDF4_D29D_6473_4190_CFC04F76AFAC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 134.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.68,
   "hfov": 26.25
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 134.37,
   "pitch": -16.68,
   "hfov": 26.25,
   "image": "this.AnimatedImageResource_DA017843_F388_DA7A_41DA_14E9D166D6AB",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1121037_F3B7_2A1A_41D7_2D08602E1A26"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E38560B4_F78C_F256_41A5_7535B20D4D5E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_EE151341_F7F4_5628_41CC_DBD8B980FB70, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 44.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.27,
   "hfov": 4.41
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_3_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 1.27,
   "yaw": 44.12,
   "hfov": 4.41
  }
 ],
 "id": "overlay_FC897C99_F396_DBFD_41DA_9313415C4292"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3D3179B_F78C_5E52_419D_B28ADDC98F8C, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_EE14C341_F7F4_5628_41D6_DD6FD1A01F4C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": 88.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.29,
   "hfov": 3.4
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_4_0.png",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": -2.29,
   "yaw": 88.47,
   "hfov": 3.4
  }
 ],
 "id": "overlay_E3F25002_F396_6ACF_41D9_2ACED55305CC"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_8902FDBB_9487_1BD1_41E1_81B4647F9460, this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4, this.playList_DF095D18_D29A_E5B3_41BC_4041FF5EAA5D, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "yaw": 69.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.86,
   "hfov": 3.16
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_5_0.png",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": -0.86,
   "yaw": 69.98,
   "hfov": 3.16
  }
 ],
 "id": "overlay_E662EE50_F89C_EE15_41E7_5A667D9E088C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2, this.camera_DCE53EA5_D29D_649D_4198_919A706FBFB2); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.94,
   "hfov": 25.39
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -158.27,
   "pitch": -39.94,
   "hfov": 25.39,
   "image": "this.AnimatedImageResource_DA1CC843_F388_DA7A_41D0_1178E032CBD4",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1449EFF_F2B9_3610_41CA_27D5B9736C8F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C, this.camera_DCEFEE99_D29D_64B5_41C3_2D8B420DE10E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 129.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.35,
   "hfov": 24.41
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 129.29,
   "pitch": -26.35,
   "hfov": 24.41,
   "image": "this.AnimatedImageResource_DA1CA843_F388_DA7A_41C1_90616914E6FB",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB1FFCFC_F38B_5A0E_41DA_C99EE3744273"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EE894683_F794_3E04_41E0_FECCD99C1136, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 116.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.79,
   "hfov": 13.55
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 116.13,
   "pitch": -5.79,
   "hfov": 13.55,
   "image": "this.AnimatedImageResource_E681194E_F87C_3205_41EE_276ED3EDE396",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EF88A7D7_F794_3E0B_41E8_1CB933DB1441"
},
{
 "items": [
  {
   "media": "this.album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.01,
     "x": "0.35",
     "class": "PhotoCameraPosition",
     "y": "0.59"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_C349A582_F98C_52F1_41C7_2A1A02D3D72B",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.01,
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.28"
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_C3E938DA_F98C_3211_41E2_782F7DE0E7B0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.01,
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "y": "0.29"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_B9110E12_F98C_6E10_41B9_66C9C3E7E227_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "image_uidDD501D80_D29D_6492_41C2_ADDDAB5F1BA8_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E1F680FE_F794_53FD_41BF_715182BAEEE2.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "33%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2097"
 }
},
{
 "id": "image_uidDD501D80_D29D_6492_41C2_ADDDAB5F1BA8_1",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E1A42F5F_F794_2E3B_41D0_A606D6DDC0BC.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "33%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2098"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E108151D_F78C_F23E_41CB_E97F33568B1F",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "33%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Kali Sukun merupakan salah satu unsur penting yang mendukung karakter kawasan Kampung Heritage Kayutangan di Kota Malang. Sungai ini berfungsi sebagai saluran drainase sekaligus ruang terbuka yang dimanfaatkan masyarakat untuk aktivitas sosial dan wisata. Keberadaan Kali Sukun juga memiliki nilai historis karena menjadi bagian dari perkembangan kawasan Kayutangan sejak masa kolonial (Yusran, 2020). Selain itu, sungai ini berperan dalam menjaga tata kelola sumber daya air dan keseimbangan lingkungan di kawasan perkotaan (Ali, 2013). Potensi Kali Sukun sebagai pendukung wisata heritage turut memperkuat identitas Kampung Kayutangan sebagai destinasi wisata sejarah di Kota Malang (Mulyadi et al., 2024).</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText43777"
 }
},
{
 "media": "this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_AlbumPlayList, this.htmltext_DD208D80_D29D_6492_41AA_D07AD65BA516, this.albumitem_DD214D80_D29D_6492_41DF_3E8DEF4426C8); this.loopAlbum(this.playList_DD21AD80_D29D_6492_41D9_D56AC9B3F718, 0)",
 "player": "this.viewer_uidDD215D80_D29D_6492_41DD_1F3771BFE758PhotoAlbumPlayer",
 "id": "albumitem_DD214D80_D29D_6492_41DF_3E8DEF4426C8"
},
{
 "media": "this.album_E013B05F_F874_3202_41B9_D50B38B9771F",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_E013B05F_F874_3202_41B9_D50B38B9771F_AlbumPlayList, this.htmltext_DD3C9D65_D29D_659D_41E9_103E2D33B16B, this.albumitem_DD3D0D65_D29D_659D_41DE_7D892E2D09F5); this.loopAlbum(this.playList_DF192D06_D29A_E59F_41DB_C615444D2F06, 0)",
 "player": "this.viewer_uidDD3D3D65_D29D_659D_41E5_82E3AC28BDE0PhotoAlbumPlayer",
 "id": "albumitem_DD3D0D65_D29D_659D_41DE_7D892E2D09F5"
},
{
 "media": "this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_AlbumPlayList, this.htmltext_DD2B5D70_D29D_6472_41D7_F677C7905E73, this.albumitem_DD2BFD70_D29D_6472_41C9_E52ACDBDB457); this.loopAlbum(this.playList_DF128D14_D29A_E5B3_41DB_EAF6CAA0B7D7, 0)",
 "player": "this.viewer_uidDD2A9D70_D29D_6472_41E6_787521C8FF73PhotoAlbumPlayer",
 "id": "albumitem_DD2BFD70_D29D_6472_41C9_E52ACDBDB457"
},
{
 "items": [
  {
   "media": "this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.41",
     "class": "PhotoCameraPosition",
     "y": "0.69"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA, this.camera_DC3CAECA_D29D_6497_41C5_7171E6091ABF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.15,
   "hfov": 17.49
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -76.7,
   "pitch": -35.15,
   "hfov": 17.49,
   "image": "this.AnimatedImageResource_FD22A3B3_F298_EE27_41C0_4D6D5BBC75C6",
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDA36081_F289_2A93_41D5_86FC6D09083A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E2CD21C3_F88C_327D_41E3_AC982C176098, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": 122.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.64,
   "hfov": 11.21
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0_HS_1_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 213
     }
    ]
   },
   "pitch": -0.64,
   "yaw": 122.8,
   "hfov": 11.21
  }
 ],
 "id": "overlay_E26E1F0B_F88C_2E0C_41D2_28E54615D2EF"
},
{
 "id": "image_uidDD514D80_D29D_6492_41AB_B31127279766_0",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_E1025042_F79D_D204_41C5_D17119AEFBAE.jpeg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2096"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EE8F5683_F794_3E04_41E0_820DDAE887E5",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Book Antiqua';\">Permukiman di Kampung Heritage Kayutangan berkembang secara organik sejak masa kolonial sehingga membentuk pola permukiman yang padat dengan gang-gang sempit dan jarak antarbangunan yang berdekatan. Kepadatan ini muncul karena kawasan Kayutangan telah lama menjadi pusat aktivitas sosial, ekonomi, dan budaya masyarakat Kota Malang. Meskipun memiliki keterbatasan ruang terbuka, karakter permukiman yang padat tersebut justru menjadi bagian dari identitas kawasan heritage dan daya tarik wisata berbasis sejarah serta budaya lokal (Murtikasari &amp; Tukiman, 2021). Selain itu, tingginya kepadatan bangunan menyebabkan perlunya pengelolaan infrastruktur hijau untuk menjaga keberlanjutan lingkungan kawasan (Aliyah &amp; Giriwati, 2025).</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText46056"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_E37D524E_F88C_3609_41E3_83B76F9C987F",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "height": "50%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Book Antiqua';\">Desa Risen, salah satu desa terdampak lumpur lapindo. Namun demikian, terdapat 5 rumah persewaan PLS yang dapat ditempatkan oleh masyarakat.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText71757"
 }
},
{
 "id": "image_uidDD29AD70_D29D_6472_41DE_474E24E62228_1",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_9E2783B6_9387_6FB2_41DA_F688F93A0C55.jpg",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "50%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image2065"
 }
},
{
 "items": [
  {
   "media": "this.album_9D28B7ED_9387_37D6_41D1_D868D8F010E1",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 25000,
    "scaleMode": "fit_inside",
    "targetPosition": {
     "zoomFactor": 1,
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.73"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_E322522E_F396_6ED7_41CE_6117BFB06450_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "scaleMode": "fit_outside",
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.45"
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E322522E_F396_6ED7_41CE_6117BFB06450_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "height": 78,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7
},
{
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": 86,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "height": 46,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "top": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Label",
 "textDecoration": "none",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "textShadowHorizontalLength": 0,
 "top": 90,
 "propagateClick": true,
 "paddingLeft": 0,
 "textShadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 44,
 "fontSize": 28,
 "fontStyle": "italic",
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Label",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "0%",
 "propagateClick": true,
 "layout": "horizontal",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 110,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarMargin": 2,
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
 "width": "91.304%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "85.959%",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-button set"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "0%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "15%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "propagateClick": true,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "shadowSpread": 1,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "15%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container X global"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD35FD70_D29D_6472_41C2_C43B751621CF",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2052"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD353D70_D29D_6472_41D2_35CB294757C4",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2055"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD348D70_D29D_6472_41E2_B264867FF7C2",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2056"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD347D70_D29D_6472_41E3_232FBC2D3C13",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E554FF95_F894_EE1F_41E8_C6E1E3BBB10A_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2057"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD2D4D80_D29D_6492_41E4_35D2445A597C",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2067"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD2C7D80_D29D_6492_41E7_8B69B2AE2C47",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2070"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD23DD80_D29D_6492_41D6_DDC3514C6352",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2071"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD23CD80_D29D_6492_41E6_070152CC038A",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E5D412AE_F893_D60D_41D1_3DA893E610D4_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2072"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_DA1F3843_F388_DA7A_41E6_C42C357E5B18",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA1F0843_F388_DA7A_41E2_5778362760CE",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F38AF0_F289_DEA7_4196_48196FF4A1F0_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E680C94A_F87C_3202_41D4_B65CDF7044B5",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD3D3D65_D29D_659D_41E5_82E3AC28BDE0",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2040"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD3C9D65_D29D_659D_41E9_103E2D33B16B",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2043"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD33FD65_D29D_659D_41E5_2B48DF7F0393",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E013B05F_F874_3202_41B9_D50B38B9771F_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2044"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD33ED65_D29D_659D_41D5_591641BC1445",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E013B05F_F874_3202_41B9_D50B38B9771F_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2045"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA1EC843_F388_DA7A_41E5_94153D9BC7C4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1EA843_F388_DA7A_41E9_C7A4F591A6CA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F807F64D_F289_29FF_41E0_C6A8F023369E_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E67BE944_F87C_3206_41C4_B7EBFA56C4B6",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD215D80_D29D_6492_41DD_1F3771BFE758",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2075"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD208D80_D29D_6492_41AA_D07AD65BA516",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2078"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD27BD80_D29D_6492_41CC_7687E387E59B",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2079"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD27AD80_D29D_6492_41E1_90F039EDCD3C",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_D805B3AF_F894_D60E_41EE_3BBAA6E67A88_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2080"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2C4D2_F288_EAE5_41E4_AB2734C1C825_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA015843_F388_DA7A_41D6_DDFE5473AE5B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D2D532BF_F398_EE0A_41EA_E69E429F2170",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8E087E6_F28B_36AC_41DC_D7B128FABF8A_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D2D4C2C0_F398_EE76_41EC_C4CC70D83DA6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F3A236_F289_69AA_41E0_E1D429A16B1A_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E687694A_F87C_3202_41EE_0F5AC6F99DE5",
 "colCount": 4
},
{
 "viewerArea": "this.viewer_uidDD35FD70_D29D_6472_41C2_C43B751621CF",
 "id": "viewer_uidDD35FD70_D29D_6472_41C2_C43B751621CFPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1C7843_F388_DA7A_41CD_44EB60DC05B4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F38AF3_F289_DEA8_41E3_5239D32A629C_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E68EE950_F87C_321D_41DA_EA0A83469E1C",
 "colCount": 4
},
{
 "viewerArea": "this.viewer_uidDD5A2D80_D29D_6492_41DC_BE8F4A8E0DEB",
 "id": "viewer_uidDD5A2D80_D29D_6492_41DC_BE8F4A8E0DEBPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E8934519_F38B_2A16_41E8_246EB7CEF3C2",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_ECE8BAEA_F39B_5E0A_41D6_627E38DEB26A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81778CD_F28B_FAFD_41A7_A069E191C4CA_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_ECE8DAEA_F39B_5E0A_41EB_FB12F3CDD311",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2C646_F28B_29ED_41E7_A0421971F63C_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EC947AEA_F39B_5E0A_41E1_E1C090B24DFC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1CE843_F388_DA7A_41ED_9A2D51B477F9",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F385D2_F289_EAEB_41E9_2E47E98AA0E2_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E680694E_F87C_3205_41DD_2D1F0704BCC9",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1E3843_F388_DA7A_41D0_688140CEF2C2",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1E0843_F388_DA7A_41AF_EC4FCA263FDF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F80B9CAA_F289_5ABA_41BF_27D87171ABFD_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E686794A_F87C_3202_41DD_3E5D010E3393",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD316D65_D29D_659D_41E9_9C8E8CBDF68F",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2046"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD309D65_D29D_659D_41E4_06BDA46D232F",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2049"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD300D70_D29D_6472_41E0_6226B4576833",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2050"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD37FD70_D29D_6472_41DA_C2761F22A86B",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_86BFD640_938B_68AF_41CE_3BBA3765C4CE_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2051"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D2149CBF_F38F_5A0A_41D7_8285C5E5A201",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F54256_F28B_29EC_41D4_5138C6F1975A_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D2142CBF_F38F_5A0A_41E4_8C34124D4007",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA1F5843_F388_DA7A_41ED_7F16515DEB42",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F81ED077_F289_29A9_41B5_2AFBF9F3A06A_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E682494A_F87C_3202_41D2_62D90692CEA8",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD2A9D70_D29D_6472_41E6_787521C8FF73",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2059"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD2B5D70_D29D_6472_41D7_F677C7905E73",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2062"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD2A8D70_D29D_6472_41E7_C076DFD2A0DF",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2063"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD2A7D70_D29D_6472_41D2_704B920325AC",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_FC9F2592_F39A_75CF_41CF_CB69E94D6C80_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2064"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F902DFE9_F289_36A1_41DA_1EBD4A0BB77D_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2BB5F53_F2BB_3787_41D0_22BD0D3E8BB0",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uidDD5A2D80_D29D_6492_41DC_BE8F4A8E0DEB",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2085"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_DD596D80_D29D_6492_4198_0DC41BA88538",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2088"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD586D80_D29D_6492_41D9_30824479DCBA",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_AlbumPlayList, -1)",
 "borderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2089"
 }
},
{
 "transparencyActive": false,
 "id": "component_DD585D80_D29D_6492_41E4_7773C3509E12",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_B417E01D_94BF_28D1_41E0_D79B04CC2A09_AlbumPlayList, 1)",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "class": "IconButton",
 "cursor": "hand",
 "data": {
  "name": "IconButton2090"
 }
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81DBBD1_F28B_5EE7_41D2_6FE58772C04D_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_FD2DE3B5_F298_EE23_41D7_7B1B6F3FB432",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D54FACD6_F38B_7A1A_41E0_F96B16D69809",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F814FCFA_F28B_5AA4_41E1_61BF3B8CBB19_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_C61A8338_F399_2E15_41E8_F6FC712DCD8D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D6A68BA3_F388_DE3A_41A3_435712D13A30",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EE782535_F388_EA1E_41D4_7E8E3727981F_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D6A64BA3_F388_DE3A_41E0_B01214AD08BA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F3B73C_F289_779E_41E7_7F9F5F64E6FF_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1FE843_F388_DA7A_41AC_13BC1FC4D085",
 "colCount": 4
},
{
 "viewerArea": "this.viewer_uidDD316D65_D29D_659D_41E9_9C8E8CBDF68F",
 "id": "viewer_uidDD316D65_D29D_659D_41E9_9C8E8CBDF68FPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA013843_F388_DA7A_41E6_AD3A8D01F3B0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8136FD9_F288_F6E7_41EA_0A8131468F5B_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E7FB82EF_F7BC_37A9_41DA_71182E3F3AD7",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA010843_F388_DA7A_41EA_E4F795B710E4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2EB0C_F288_DF7D_41D7_74CE1F6E4802_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1EE843_F388_DA7A_41D3_39962009B625",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1FC843_F388_DA7A_41EA_CE2751370883",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA1FA843_F388_DA7A_41D0_0FDEC554C3A8",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F3BC3E_F289_599B_41C4_E0AEB3CDE553_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E684494A_F87C_3202_41E8_D32785EDDEB0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1E7843_F388_DA7A_41DD_CED5F4B17D37",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1E5843_F388_DA7A_41EC_A118936D798F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F8F37192_F289_2B6A_41C3_844097E623FE_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E678A944_F87C_3206_41E8_A4420C177644",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1F7843_F388_DA7A_41E6_A82947BDBD8C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F81B36B1_F289_36A9_41E2_79D1FE7BC36E_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E685394A_F87C_3202_41C4_7842E046DFD2",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EC977AEA_F39B_5E0A_41B8_A491D5ADBC3A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2A6FD_F28B_769C_41E0_5F3B604A70D7_0_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EC97AAEA_F39B_5E0A_41BB_3453D6FAF740",
 "colCount": 4
},
{
 "viewerArea": "this.viewer_uidDD2D4D80_D29D_6492_41E4_35D2445A597C",
 "id": "viewer_uidDD2D4D80_D29D_6492_41E4_35D2445A597CPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F2FAA0_F288_DEA5_41D8_CE3FCE2E9704_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA017843_F388_DA7A_41DA_14E9D166D6AB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DA1CC843_F388_DA7A_41D0_1178E032CBD4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_DA1CA843_F388_DA7A_41C1_90616914E6FB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F814C08A_F289_E978_41C9_BE632721EB42_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E681194E_F87C_3205_41EE_276ED3EDE396",
 "colCount": 4
},
{
 "viewerArea": "this.viewer_uidDD215D80_D29D_6492_41DD_1F3771BFE758",
 "id": "viewer_uidDD215D80_D29D_6492_41DD_1F3771BFE758PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidDD3D3D65_D29D_659D_41E5_82E3AC28BDE0",
 "id": "viewer_uidDD3D3D65_D29D_659D_41E5_82E3AC28BDE0PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "viewerArea": "this.viewer_uidDD2A9D70_D29D_6472_41E6_787521C8FF73",
 "id": "viewer_uidDD2A9D70_D29D_6472_41E6_787521C8FF73PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F8F5E2AB_F28B_EEA5_41D4_8B8AC1C8750A_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FD22A3B3_F298_EE27_41C0_4D6D5BBC75C6",
 "colCount": 4
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container black"
 }
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "top": "40%",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "propagateClick": true,
 "bottom": "40%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "width": "90%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 9,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "top": "40%",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "propagateClick": true,
 "bottom": "40%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "minHeight": 1,
 "paddingLeft": 70,
 "itemMinWidth": 50,
 "propagateClick": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "92%",
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "scrollBarColor": "#04A3E1",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "itemHeight": 160,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "class": "ThumbnailGrid",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 16,
 "itemThumbnailShadow": false,
 "paddingRight": 70,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemWidth": 220,
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemLabelFontStyle": "italic",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollEnabled": true,
 "shadow": false,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "height": "99.975%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 140,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "width": "55%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "width": "45%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 60,
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 20,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_D51E5729_F994_5E33_41CC_E47ACD9CFCEF",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_1A04695A_0249_558D_4138_70A1CC605B20",
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.7,
 "paddingRight": 40,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 40,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 40,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "- Buttons set"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image40635"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "5%",
 "contentOpaque": false,
 "gap": 0,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 30,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Button_8FF06621_9385_28F1_41CC_1D54CA9A8509",
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "26%",
 "propagateClick": true,
 "bottom": "11.71%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-Level 1"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-1"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-2"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-3"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-4"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-5"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-Level 2-6"
 }
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_D51E5729_F994_5E33_41CC_E47ACD9CFCEF",
 "left": "11.11%",
 "width": "75.758%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_D51E5729_F994_5E33_41CC_E47ACD9CFCEF.png",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0.08%",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "24.314%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "Image101383"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "left": "0.16%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "26.78%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "-8.73%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 58.65,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 7,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "-Container Icons 1"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "left": "0.03%",
 "width": 44,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "propagateClick": false,
 "bottom": "0.35%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_153EB60C_0277_3F85_4151_D3C9D01C0610, null, '90%', '90%', this.FadeInEffect_153EA60C_0277_3F85_4170_2EFE0E3C5F8C, this.FadeOutEffect_153E960C_0277_3F85_416C_53D4E576A3A3, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_1A04695A_0249_558D_4138_70A1CC605B20",
 "left": "22.71%",
 "width": 44,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1A04695A_0249_558D_4138_70A1CC605B20_rollover.png",
 "iconURL": "skin/IconButton_1A04695A_0249_558D_4138_70A1CC605B20.png",
 "propagateClick": false,
 "bottom": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_153E360C_0277_3F85_4153_13B10E76DAEC, null, '90%', '90%', this.FadeInEffect_153E260C_0277_3F85_417F_7F7D3E39D9BC, this.FadeOutEffect_153E160C_0277_3F85_417F_9815BF49C21F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "pressedIconURL": "skin/IconButton_1A04695A_0249_558D_4138_70A1CC605B20_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "34.32%",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "propagateClick": false,
 "bottom": "0.16%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_18B42ABE_097B_7ACD_4188_0AAF24F9A1A9, null, '90%', '90%', this.FadeInEffect_18B41ABE_097B_7ACD_41A0_697ADDFE6ED0, this.FadeOutEffect_18B4FABE_097B_7ACD_418A_347CE4C1776A, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "IconButton",
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "height": "46%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.41vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "75%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "- content"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "87.696%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "CP DAN TUJUAN >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.showWindow(this.window_82ACE0B0_9387_284E_41DA_9C59CB57FAAB, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "HUTAN MALABAR >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Inserdt Text",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "SUNGAI BRANTAS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 19)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 42.35,
 "fontSize": 18,
 "label": "KAYUTANGAN >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 24)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 43,
 "fontSize": 18,
 "label": "PUSAT EKONOMI >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 20)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "width": "73.064%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 35,
 "fontSize": 18,
 "label": "SIDOARJO  >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_8FF06621_9385_28F1_41CC_1D54CA9A8509",
 "width": "53.535%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 43,
 "fontSize": 18,
 "label": "PULAU LUSI >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Reception",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 5,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverFontSize": 18,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "line"
 }
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 8,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 }
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverShadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "width": "75%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.56vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.83vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.83vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.83vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText19460"
 }
}],
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.83,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "shadow": false,
 "defaultVRPointer": "laser",
 "class": "Player",
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
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

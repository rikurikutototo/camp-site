"use strict";

// ドロワー
jQuery('.drawer-icon').on('click', function (e) {
	// aタグをクリックしてもページ遷移が起きないようにする
	e.preventDefault();

	// アイコンの処理
	jQuery(".drawer-icon").toggleClass("drawer-icon--open");
	// コンテントの処理
	jQuery(".drawer-content").toggleClass("drawer-content--open");
	// 背景色の処理
	jQuery('.drawer-background').toggleClass('drawer-background--open');
	return false;
});

jQuery('.drawer-content__link').on('click', function () {
	// アイコンの処理
	jQuery(".drawer-icon").removeClass("drawer-icon--open");
	// コンテントの処理
	jQuery(".drawer-content").removeClass("drawer-content--open");
	// 背景色の処理
	jQuery('.drawer-background').removeClass('drawer-background--open');
});

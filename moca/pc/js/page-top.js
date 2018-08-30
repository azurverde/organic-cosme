if($.browser.msie && $.browser.version < 7){
	$('.pageTop').css({"display":"none"});
} else {
	// グローバル変数
	var syncerTimeout = null ;

	// 一連の処理
	$( function(){
		// スクロールイベントの設定
		$( window ).scroll( function(){
			// 1秒ごとに処理
			if( syncerTimeout == null ){
				// セットタイムアウトを設定
				syncerTimeout = setTimeout( function(){

					// 対象のエレメント
					var element = $( '.pageTop' ) ;

					// 現在、表示されているか？
					var visible = element.is( ':visible' ) ;

					// 最上部から現在位置までの距離を取得して、変数[now]に格納
					var now = $( window ).scrollTop() ;

					// 最下部から現在位置までの距離を計算して、変数[under]に格納
					var under = $( 'body' ).height() - ( now + $(window).height() ) ;

					// 最上部から現在位置までの距離(now)が401px以上だったら
					if( now > 400 ){
						// 非表示状態だったら
						if( !visible ){
							// [#page-top]をゆっくりフェードインする
							element.fadeIn( 100 ) ;
						}
					}

					// 最上部から現在位置までの距離(now)が400px以下もしくは400pxだったら
					else if( now <= 400 ){
						// 表示状態だったら
						if( visible ){
							// [#page-top]をゆっくりフェードアウトする
							element.fadeOut( 100 );
						}
					}

					// フラグを削除
					syncerTimeout = null ;
				} , 500 ) ;
			}
		} ) ;

		// クリックイベントを設定する
		$( '#move-page-top' ).click(
			function(){
				// スムーズにスクロールする
				$( 'html,body' ).animate( {scrollTop:0} , 'normal' ) ;
				return false;
			}
		);
	});

}
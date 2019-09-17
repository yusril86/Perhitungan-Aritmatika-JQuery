$(document).ready(function () {
	
	$(".dragable").draggable();

	$(".dropable").droppable({
		drop: function( event , ui ){
			let nilaibenar = 23; // Jawaban Benar

			let KotakYangDibawa = ui.draggable.text();

			if(KotakYangDibawa == nilaibenar){

				ui.draggable.animate({ 'opacity':'0' }, 100);

				$(this).removeClass("error"); // hapus class error di CSS

				$('.ui-widget-header').addClass("active");

				$(this).text(nilaibenar);

			}else{

				ui.draggable.animate({'opacity' : '0'}, 100);

				$(this).addClass("error"); // Tambahkan Class Error jika jawaban Salah
			}
		}
	});
});
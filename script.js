 
$(document).ready(function(){
    $clickCounts = 1
  $("div").click(function(){
      if ($clickCounts == 1) {
    $("div").animate({left: '250px' ,
                     duration: "slow", 
                      height: 50,
                     
                      width: 100,                 
                     });
//      $("div").width('50px');
//      $("div").height('100px');
      $("div").css('background-color' , 'red');
          $clickCounts += 1;
     } else if ($clickCounts == 2) {
          $("div").animate({
              left: '350px' ,
              top: '250px' ,
              height:150 ,
              width:250 ,
          });
//      $("div").width('150px');
//      $("div").height('250px');
      $("div").css('background-color' , 'green');
         $clickCounts += 1;
          } else if ($clickCounts == 3) {
                $("div").animate({right: '350px' ,
                      bottom: '150px' ,
                           height:100 ,
              width:30 ,        
                                 });
//      $("div").width('30px');
//      $("div").height('100px');
      $("div").css('background-color' , 'yellow');
              $clickCounts += 1;
               } else if ($clickCounts == 4) {
                       $("div").animate({top: '150px' ,
         left: '50px'  ,
         bottom: '50px' , 
            height:10 ,
              width:300 ,                                  
                                        });
//      $("div").width('400px');
//      $("div").height('10px');
      $("div").css('background-color' , 'orange');
              $clickCounts = 1;
               }
  });
                  
                   });


//if ($clickCounts === 1) {
//        $this.addClass('bg-act-red');
//        $clickCounts += 1;
//    } else if ($clickCounts == 2) {
//        $this.addClass('bg-act-yellow');
//        $clickCounts += 1;
//    } else if ($clickCounts == 3) {
//        $this.addClass('bg-act-green');
//        $clickCounts += 1;
//    }
//});
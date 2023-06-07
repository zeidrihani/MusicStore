$("document").ready(
			function()
			{
				
				$('#tele2').hide();
					$("#tele1").hover(
				function()
				{
				$('#tele1').css({'cursor':'pointer'});
				
					$('#tele1').css({'color':'#860D9E'});
				}
				
				);
				
				
					$("#tele1").click(
				function()
				{
					$('#tele2').css({'color':'#860D9E'}).toggle(2500);
				}
				
				);
				
				$('#add2').hide();
					$("#add1").hover(
				function()
				{
				$('#add1').css({'cursor':'pointer'});
				
					$('#add1').css({'color':'#860D9E'});
				}
				
				);
				
					$("#add1").click(
				function()
				{
					$('#add2').css({'color':'#860D9E'}).toggle(2500);
				}
				
				);
				
			
			}
			);


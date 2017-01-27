$(function () {
    'use strict';

    $('.datepicker').datepicker({
        format          : 'dd.mm.yyyy',
        language        : 'bg',
        weekStart       : 1,
        todayBtn        : 'linked',
        assumeNearbyYear: true
    });
});

  $(function() {
       let i = 1,
       		minColsCount = 3,
          col = '<td><input type="text" class="form-control input-md"></td>';
          
       function addRow(ev) {
        	 ev.stopPropagation();
           
         	let currentColsCount = $('#salary-table tbody tr:first-of-type').children('td').length;
         	for(let j = 0;j<currentColsCount;j+=1){
         		$('#row-' + i).append(col);
         	}

         	$('#salary-table').append('<tr id="row-' + (i + 1) + '"></tr>');
          
         	i+=1;
       	}
        
        function deleteRow(ev) {
         ev.stopPropagation();
         
         if (i > 1) {
           $("#row-" + (i - 1)).html('');
           i-=1;
         }
       }
       
       function addCol(ev) {
         ev.stopPropagation();
         
         let rows = $('#salary-table tbody tr'),
            len = rows.length;

         rows.each(function(i, row) {
           if (i < len - 1) {
             $(row).append(col);
           }
         });
       }
       
       function deleteCol(ev) {
         ev.stopPropagation();
         
         $('#salary-table tbody > tr').each(function(i, row) {
           if ($(row).children().length > minColsCount) {
             $(row).children().last().remove();
           }
         });
       }
        
       $("#add-row").click(addRow);
       $("#delete-row").click(deleteRow);
       $('#add-col').click(addCol);
       $('#delete-col').click(deleteCol);
     });


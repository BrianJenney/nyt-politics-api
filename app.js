function searchCampaign(){

	document.getElementById("campaignResults").textContent=""
	var electionYear = document.getElementById("electionYear").value
	var zipCode = document.getElementById("zipCode").value

	var key = "71e0a95bf2e3d1b66d899ed41eaa2853:15:73594931"
	$.ajax({
	   	url: "http://api.nytimes.com/svc/elections/us/v3/finances/"+electionYear+"/president/zips/"+zipCode+".json?api-key="+key,
	   	dataType: "json",
	   	success: function(data) {
	   		console.log(data)
	   		if(data.results.length<1){
					var p = document.createElement("p")
          p.textContent = "Sorry, we didn't find any available data. Make sure you search using an election year after 2008. "
          document.getElementById("campaignResults").style.opacity = "1"
          		document.getElementById("campaignResults").appendChild(p)
        }
	   		for (i=0; i<data.results.length; i++){
				var name = data.results[i].full_name
				var total = data.results[i].total
				var total = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
				// var total = parseFloat(total)
				console.log(name)
				console.log(total)

				var p = document.createElement("p")
				p.textContent = "$" + total + "0" + " to " + name
				document.getElementById("campaignResults").style.opacity = "1"
				document.getElementById("campaignResults").appendChild(p)
				zipCode =""
				electionYear =""


				}
	   		},
	   	type: 'GET'
				})
			}


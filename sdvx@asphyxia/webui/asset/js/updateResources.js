// data\graphics\game_nemsys -- nemsys
// data\graphics\ap_card -- appeal card
// data\graphics\submonitor_bg -- subbg
$(document).ready(async function() {
    $('.collapse').click(function(){
        console.log($('.collapsible-card').css('display'))
        if($('.collapsible-card').css('display') == 'none') {
            $('.collapsible-card').css('display', 'block')
        } else $('.collapsible-card').css('display', 'none')
    })
    
    $( "#updateResources" ).click(async function() {
        answer = confirm("Clicking OK would mean that you have already updated the datacode in your ea3-config.xml file. Would you like to proceed?");
        if (answer == true) {
            document.getElementById("logtextarea").textContent = ''
            document.getElementById("logtextarea").textContent = 'Running....\n'
            await emit("copyResourcesFromGame").then(
                function(response){
                    document.getElementById("logtextarea").textContent += 'Done.\n'
                    $.getJSON( "static/asset/logs/copyResourcesFromGame.json", function( data ) {
                        document.getElementById("logtextarea").textContent += 'NOTE:\n- labels for these new files (nemsys, bgm, submonitor bg, chat stamps) in the asset/json/data.json file needs to be updated.\n'
                        document.getElementById("logtextarea").textContent += '- for converting s3p files to mp3, check guide in the notes section above.\n'

                        if(data['errors'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'Errors: \n'
                            $.each(data['errors'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " + val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['versionSongs'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New songs in latest version data: \n'
                            $.each(data['versionSongs'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val[1] + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }


                        if(data['jsonSongs'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New songs added to mdb asset: \n'
                            $.each(data['jsonSongs'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val[1] + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['xcdSongs'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'XCD songs: \n'
                            $.each(data['xcdSongs'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val[1] + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['nemsys'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New nemsys: \n'
                            $.each(data['nemsys'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " + val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['bgm'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New bgm: \n'
                            $.each(data['bgm'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['apCard'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New appeal cards: \n'
                            $.each(data['apCard'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        if(data['subbg'].length > 0) {                        
                            document.getElementById("logtextarea").textContent += 'New submonitor backgrounds: \n'
                            $.each(data['subbg'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }


                        if(data['chatStamp'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New chat stamps: \n'
                            $.each(data['chatStamp'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }


                        if(data['valgeneItemFiles'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New valgene_item files: \n'
                            $.each(data['valgeneItemFiles'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }

                        // console.log(JSON.stringify(data))
                        if(data['akaname'].length > 0) {
                            document.getElementById("logtextarea").textContent += 'New akanames: \n'
                            $.each(data['akaname'], function(key, val) {
                                document.getElementById("logtextarea").textContent += "- " +  val + '\n'
                            })
                            document.getElementById("logtextarea").textContent += '\n\n'
                        }
                    })
                },
                function(error){
                    console.log(error);
                }
            )
        }
    });
})
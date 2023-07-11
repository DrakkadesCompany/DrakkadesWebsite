import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drakkades',
  templateUrl: './drakkades.component.html',
  styleUrls: ['./drakkades.component.scss']
})
export class DrakkadesComponent {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router){}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  redirectToYoutube() {
    window.open('https://www.youtube.com/@drakkades', '_blank');
  }

  redirectToYoutubeVOD() {
    window.open('https://www.youtube.com/@drakkadesvod', '_blank');
  }

  redirectToTwitch() {
    window.open('https://www.twitch.tv/drakkades', '_blank');
  }

  redirectToDiscord() {
    window.open('https://discord.com/invite/Kv9wzS8', '_blank');
  }

  redirectToTwitter() {
    window.open('https://www.twitter.com/drakkades', '_blank');
  }

  redirectToInstagram() {
    window.open('https://www.instagram.com/drakkades', '_blank');
  }

  // playSound() {
  //    if (this.audioPlayer) {
  //      const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
  //      audio.play();
  //    }
  // }


  playSound() {
    let audio = new Audio();
    audio.src = "/assets/sounds/prout.mp3";
    audio.load();
    audio.play();
  }
}

#./yt_script.sh https://www.youtube.com/watch?v=DPxL7dO5XPc

youtube-dl -o '/Users/isaacparsons/Desktop/downloaded_videos/%(title)s.%(ext)s' -f 140 --no-check-certificate $1
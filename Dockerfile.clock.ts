FROM busybox:latest
CMD while true; do date +%s && sleep 1;done

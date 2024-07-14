FROM ubuntu:latest
LABEL authors="conno"

ENTRYPOINT ["top", "-b"]
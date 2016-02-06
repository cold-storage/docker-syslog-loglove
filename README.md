# Docker Syslog Loglove

Example of loglove running in docker and logging to syslog.

You will need to be on a system that has syslog running.

```
docker build -t dll .
docker run -d --name dll --log-driver syslog --log-opt tag="docker-loglove" dll
```

Your syslog logs will look like this.

```
sudo tail -f /var/log/syslog

Feb  6 13:12:28 vagrant-ubuntu-trusty-64 docker/docker-loglove[8011]: 2016-02-06T13:12:28.982Z INFO [/index.js] we are logging out something here.
```
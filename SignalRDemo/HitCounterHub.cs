using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRDemo
{
    [HubName("hitCounterHub")]
    public class HitCounterHub : Hub
    {
        static int _counter = 0;
        public void RecordHit()
        {
            _counter += 1;
            Clients.All.updateHits(_counter);
        }
    }
}
export interface Alarm {
   id: number;
   uei: string;
   nodeId?: number;
   nodeLabel?: string;
   ipAddress?: string;
   serviceName?: string;
   lastEvent: Object;
   lastEventTime: number;
   logMessage: string;
   description: string;
   type: number;
   count: number;
   reductionKey: string;
   clearKey?: string;
   severity: string;
   suppressedUntil?: number;
   suppressedTime?: number;
   ackTime?: number;
   ackUser?: string;
   ifIndex?: number;
   stickyMemo?: Object;
   journalMemo?: Object;
   parameters?: Object[]
}

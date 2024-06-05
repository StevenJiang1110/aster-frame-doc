(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#367\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#371\">source</a><h4 class=\"code-header\">pub const fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.new\" class=\"fn\">new</a>(val: T) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new instance of an <code>RwLock&lt;T&gt;</code> which is unlocked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#391\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes this <code>RwLock</code>, returning the underlying data.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#396\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.const_new\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#403\">source</a><h4 class=\"code-header\">pub const fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.const_new\" class=\"fn\">const_new</a>(raw_rwlock: R, val: T) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new new instance of an <code>RwLock&lt;T&gt;</code> based on a pre-existing\n<code>RawRwLock&lt;T&gt;</code>.</p>\n<p>This allows creating a <code>RwLock&lt;T&gt;</code> in a constant context on stable\nRust.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#411\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#447\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.read\" class=\"fn\">read</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks this <code>RwLock</code> with shared read access, blocking the current thread\nuntil it can be acquired.</p>\n<p>The calling thread will be blocked until there are no more writers which\nhold the lock. There may be other readers currently inside the lock when\nthis method returns.</p>\n<p>Note that attempts to recursively acquire a read lock on a <code>RwLock</code> when\nthe current thread already holds one may result in a deadlock.</p>\n<p>Returns an RAII guard which will release this thread’s shared access\nonce it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#461\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read\" class=\"fn\">try_read</a>(&amp;self) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access.</p>\n<p>If the access could not be granted at this time, then <code>None</code> is returned.\nOtherwise, an RAII guard is returned which will release the shared access\nwhen it is dropped.</p>\n<p>This function does not block.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#479\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.write\" class=\"fn\">write</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks this <code>RwLock</code> with exclusive write access, blocking the current\nthread until it can be acquired.</p>\n<p>This function will not return while other writers or other readers\ncurrently have access to the lock.</p>\n<p>Returns an RAII guard which will drop the write access of this <code>RwLock</code>\nwhen dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_write\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#493\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_write\" class=\"fn\">try_write</a>(&amp;self) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to lock this <code>RwLock</code> with exclusive write access.</p>\n<p>If the lock could not be acquired at this time, then <code>None</code> is returned.\nOtherwise, an RAII guard is returned which will release the lock when\nit is dropped.</p>\n<p>This function does not block.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#507\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; &amp;mut T</h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the underlying data.</p>\n<p>Since this call borrows the <code>RwLock</code> mutably, no actual locking needs to\ntake place—the mutable borrow statically guarantees no locks exist.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_locked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#513\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.is_locked\" class=\"fn\">is_locked</a>(&amp;self) -&gt; bool</h4></section></summary><div class=\"docblock\"><p>Checks whether this <code>RwLock</code> is currently locked in any way.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_locked_exclusive\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#519\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.is_locked_exclusive\" class=\"fn\">is_locked_exclusive</a>(&amp;self) -&gt; bool</h4></section></summary><div class=\"docblock\"><p>Check if this <code>RwLock</code> is currently exclusively locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock_read\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#535\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.force_unlock_read\" class=\"fn\">force_unlock_read</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks a read lock.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>RwLockReadGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>This method must only be called if the current thread logically owns a\n<code>RwLockReadGuard</code> but that guard has be discarded using <code>mem::forget</code>.\nBehavior is undefined if a rwlock is read-unlocked when not read-locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock_write\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#551\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.force_unlock_write\" class=\"fn\">force_unlock_write</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks a write lock.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>RwLockWriteGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety-1\"><a href=\"#safety-1\">Safety</a></h5>\n<p>This method must only be called if the current thread logically owns a\n<code>RwLockWriteGuard</code> but that guard has be discarded using <code>mem::forget</code>.\nBehavior is undefined if a rwlock is write-unlocked when not write-locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#565\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.raw\" class=\"fn\">raw</a>(&amp;self) -&gt; &amp;R</h4></section></summary><div class=\"docblock\"><p>Returns the underlying raw reader-writer lock object.</p>\n<p>Note that you will most likely need to import the <code>RawRwLock</code> trait from\n<code>lock_api</code> to be able to call functions on the raw\nreader-writer lock.</p>\n<h5 id=\"safety-2\"><a href=\"#safety-2\">Safety</a></h5>\n<p>This method is unsafe because it allows unlocking a mutex while\nstill holding a reference to a lock guard.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#582\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.data_ptr\" class=\"fn\">data_ptr</a>(&amp;self) -&gt; *mut T</h4></section></summary><div class=\"docblock\"><p>Returns a raw pointer to the underlying data.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>RwLockReadGuard</code> or <code>RwLockWriteGuard</code> object\nalive, for example when dealing with FFI.</p>\n<h5 id=\"safety-3\"><a href=\"#safety-3\">Safety</a></h5>\n<p>You must ensure that there are no data races when dereferencing the\nreturned pointer, for example if the current thread logically owns a\n<code>RwLockReadGuard</code> or <code>RwLockWriteGuard</code> but that guard has been discarded\nusing <code>mem::forget</code>.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#665\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockFair.html\" title=\"trait lock_api::rwlock::RawRwLockFair\">RawRwLockFair</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock_read_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#678\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.force_unlock_read_fair\" class=\"fn\">force_unlock_read_fair</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks a read lock using a fair unlock procotol.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>RwLockReadGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>This method must only be called if the current thread logically owns a\n<code>RwLockReadGuard</code> but that guard has be discarded using <code>mem::forget</code>.\nBehavior is undefined if a rwlock is read-unlocked when not read-locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock_write_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#694\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.force_unlock_write_fair\" class=\"fn\">force_unlock_write_fair</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks a write lock using a fair unlock procotol.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>RwLockWriteGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety-1\"><a href=\"#safety-1\">Safety</a></h5>\n<p>This method must only be called if the current thread logically owns a\n<code>RwLockWriteGuard</code> but that guard has be discarded using <code>mem::forget</code>.\nBehavior is undefined if a rwlock is write-unlocked when not write-locked.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#699\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#707\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read_for\" class=\"fn\">try_read_for</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#723\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read_until\" class=\"fn\">try_read_until</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_write_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#739\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_write_for\" class=\"fn\">try_write_for</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with exclusive write access until a\ntimeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the exclusive access when it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_write_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#755\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_write_until\" class=\"fn\">try_write_until</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with exclusive write access until a\ntimeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the exclusive access when it is dropped.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#837\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockRecursive.html\" title=\"trait lock_api::rwlock::RawRwLockRecursive\">RawRwLockRecursive</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_recursive\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#854\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.read_recursive\" class=\"fn\">read_recursive</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks this <code>RwLock</code> with shared read access, blocking the current thread\nuntil it can be acquired.</p>\n<p>The calling thread will be blocked until there are no more writers which\nhold the lock. There may be other readers currently inside the lock when\nthis method returns.</p>\n<p>Unlike <code>read</code>, this method is guaranteed to succeed without blocking if\nanother read lock is held at the time of the call. This allows a thread\nto recursively lock a <code>RwLock</code>. However using this method can cause\nwriters to starve since readers no longer block if a writer is waiting\nfor the lock.</p>\n<p>Returns an RAII guard which will release this thread’s shared access\nonce it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read_recursive\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#871\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read_recursive\" class=\"fn\">try_read_recursive</a>(&amp;self) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access.</p>\n<p>If the access could not be granted at this time, then <code>None</code> is returned.\nOtherwise, an RAII guard is returned which will release the shared access\nwhen it is dropped.</p>\n<p>This method is guaranteed to succeed if another read lock is held at the\ntime of the call. See the documentation for <code>read_recursive</code> for details.</p>\n<p>This function does not block.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#908\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockRecursiveTimed.html\" title=\"trait lock_api::rwlock::RawRwLockRecursiveTimed\">RawRwLockRecursiveTimed</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read_recursive_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#920-923\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read_recursive_for\" class=\"fn\">try_read_recursive_for</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n<p>This method is guaranteed to succeed without blocking if another read\nlock is held at the time of the call. See the documentation for\n<code>read_recursive</code> for details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read_recursive_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#939-942\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_read_recursive_until\" class=\"fn\">try_read_recursive_until</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with shared read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#988\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgradable_read\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1010\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.upgradable_read\" class=\"fn\">upgradable_read</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks this <code>RwLock</code> with upgradable read access, blocking the current thread\nuntil it can be acquired.</p>\n<p>The calling thread will be blocked until there are no more writers or other\nupgradable reads which hold the lock. There may be other readers currently\ninside the lock when this method returns.</p>\n<p>Returns an RAII guard which will release this thread’s shared access\nonce it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgradable_read\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1024\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_upgradable_read\" class=\"fn\">try_upgradable_read</a>(&amp;self) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with upgradable read access.</p>\n<p>If the access could not be granted at this time, then <code>None</code> is returned.\nOtherwise, an RAII guard is returned which will release the shared access\nwhen it is dropped.</p>\n<p>This function does not block.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1073\">source</a><a href=\"#impl-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeTimed.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeTimed\">RawRwLockUpgradeTimed</a>,\n    T: ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgradable_read_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1081-1084\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_upgradable_read_for\" class=\"fn\">try_upgradable_read_for</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with upgradable read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgradable_read_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1100-1103\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLock.html#tymethod.try_upgradable_read_until\" class=\"fn\">try_upgradable_read_until</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>\n) -&gt; Option&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this <code>RwLock</code> with upgradable read access until a timeout\nis reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned which will\nrelease the shared access when it is dropped.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLock"],["<section id=\"impl-Send-for-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#364\">source</a><a href=\"#impl-Send-for-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; Send for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + Send,\n    T: Send + ?Sized,</div></h3></section>","Send","spin::lock_api::RwLock"],["<section id=\"impl-Sync-for-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#365\">source</a><a href=\"#impl-Sync-for-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; Sync for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + Sync,\n    T: Send + Sync + ?Sized,</div></h3></section>","Sync","spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1163\">source</a><a href=\"#impl-Debug-for-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; Debug for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a>,\n    T: Debug + ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1164\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result&lt;(), Error&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1156\">source</a><a href=\"#impl-From%3CT%3E-for-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; From&lt;T&gt; for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1158\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from</a>(t: T) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","spin::lock_api::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-RwLock%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1149\">source</a><a href=\"#impl-Default-for-RwLock%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; Default for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a>,\n    T: Default + ?Sized,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1151\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","spin::lock_api::RwLock"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()